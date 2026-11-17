import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, copyFileSync, readFileSync, writeFileSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

test('Pages metadata uses the actual repository subpath', () => {
  const dir = mkdtempSync(join(tmpdir(), 'portfolio-metadata-'));
  try {
    mkdirSync(join(dir, 'scripts')); mkdirSync(join(dir, 'dist'));
    copyFileSync(new URL('../scripts/set-site-url.mjs', import.meta.url), join(dir, 'scripts', 'set-site-url.mjs'));
    writeFileSync(join(dir, 'dist', 'index.html'), '<head><!-- deployment-metadata --></head>');
    const result = spawnSync(process.execPath, [join(dir, 'scripts', 'set-site-url.mjs')], { env: { ...process.env, SITE_URL: 'https://example.github.io/portfolio' }, encoding:'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const html = readFileSync(join(dir, 'dist', 'index.html'), 'utf8');
    assert.match(html, /rel="canonical" href="https:\/\/example.github.io\/portfolio\/"/);
    assert.match(html, /content="https:\/\/example.github.io\/portfolio\/og-image.png"/);
    assert.ok(!html.includes('deployment-metadata'));
  } finally { rmSync(dir, { recursive:true, force:true }); }
});

test('R3 static build config and bundle use portable relative paths for GitHub Pages and home servers', () => {
  const viteConfig = readFileSync(join(root, 'vite.config.ts'), 'utf8');
  assert.match(viteConfig, /base:\s*['"]\.\/['"]/);
  assert.ok(existsSync(join(root, 'public', '.nojekyll')), 'public/.nojekyll must exist');

  const sourceHtml = readFileSync(join(root, 'index.html'), 'utf8');
  assert.match(sourceHtml, /href="%BASE_URL%favicon\.svg"/);
  assert.doesNotMatch(sourceHtml, /(?:href|src)="\/(?:assets|resume|projects|favicon\.svg)/);

  const outDir = mkdtempSync(join(tmpdir(), 'portfolio-dist-'));
  try {
    const viteBin = join(root, 'node_modules', 'vite', 'bin', 'vite.js');
    const build = spawnSync(process.execPath, [viteBin, 'build', '--outDir', outDir], { cwd: root, encoding: 'utf8' });
    assert.equal(build.status, 0, build.stderr || build.stdout);

    assert.ok(existsSync(join(outDir, '.nojekyll')), 'dist/.nojekyll must be copied');
    const builtHtml = readFileSync(join(outDir, 'index.html'), 'utf8');
    assert.doesNotMatch(builtHtml, /(?:href|src)="\//, 'built index.html must not contain root-absolute asset URLs');

    for (const match of builtHtml.matchAll(/(?:href|src)="(\.\/[^"]+)"/g)) {
      const target = match[1].slice(2);
      assert.ok(existsSync(join(outDir, target)), `missing built asset: ${target}`);
    }

    const assetsDir = join(outDir, 'assets');
    const assetFiles = readdirSync(assetsDir);
    for (const cssFile of assetFiles.filter(f => f.endsWith('.css'))) {
      const css = readFileSync(join(assetsDir, cssFile), 'utf8');
      for (const match of css.matchAll(/url\(([^)]+)\)/g)) {
        const ref = match[1].replace(/^['"]|['"]$/g, '');
        if (ref.startsWith('data:')) continue;
        assert.ok(!ref.startsWith('/'), `root-absolute CSS url(${ref}) in ${cssFile}`);
        assert.ok(existsSync(join(assetsDir, ref)), `missing CSS asset ${ref}`);
      }
    }
    for (const jsFile of assetFiles.filter(f => f.endsWith('.js'))) {
      const js = readFileSync(join(assetsDir, jsFile), 'utf8');
      assert.doesNotMatch(js, /"\/(?:assets|resume|projects|favicon\.svg)\//);
    }
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});
