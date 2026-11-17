import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { projects } from '../src/data.ts';
import { translations } from '../src/translations.ts';

test('featured project media references shipped, verified assets in both languages', () => {
  assert.equal(projects[0].media?.kind, 'video');
  assert.equal(projects[1].media?.kind, 'video');
  assert.equal(projects[2].media, undefined);
  assert.equal(projects[3].media, undefined);
  for (const copy of Object.values(translations)) {
    for (const project of copy.projects) {
      if (!project.media) continue;
      assert.ok(project.media.alt.trim());
      for (const path of [project.media.src, project.media.kind === 'video' ? project.media.poster : undefined]) {
        if (!path) continue;
        assert.match(path, /^projects\/[^/]+\/[^/]+$/);
        assert.ok(existsSync(fileURLToPath(new URL(`../public/${path}`, import.meta.url))), path);
      }
    }
  }
});

test('architecture diagrams describe the two data-backed projects in both languages', () => {
  for (const copy of Object.values(translations)) {
    assert.equal(copy.projects[0].architecture, undefined);
    assert.equal(copy.projects[1].architecture, undefined);
    for (const project of copy.projects.slice(2)) {
      assert.equal(project.architecture?.nodes.length, 3);
      assert.equal(project.architecture?.connections.length, 2);
      assert.ok(project.architecture?.nodes.every(node => node.layer && node.title && node.detail));
      assert.ok(project.architecture?.note);
    }
    assert.match(copy.projects[2].architecture.nodes[1].title, /Supabase/i);
    assert.match(copy.projects[3].architecture.nodes[1].title, /Spring Boot/i);
    assert.match(copy.projects[3].architecture.nodes[2].title, /MySQL/i);
  }
});
