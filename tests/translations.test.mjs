import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { translations, resolveLanguage } from '../src/translations.ts';
import { techIcons } from '../src/components/tech-icons.ts';

const genericIcons = new Set([
  'SQL',
  'REST APIs',
  'Windows',
  'BSD',
  'BSD Jails',
  'Virtualization',
  'Virtualización',
  'NAS',
]);

test('both languages cover the same interface and portfolio content', () => {
  assert.deepEqual(Object.keys(translations.en.ui).sort(), Object.keys(translations.es.ui).sort());
  assert.equal(resolveLanguage('es'), 'es');
  assert.equal(resolveLanguage(null), 'en');
  assert.equal(resolveLanguage('invalid'), 'en');
  assert.equal(translations.en.skills.length, 4);
  assert.equal(translations.es.skills.length, 4);
  for (let i = 0; i < 4; i++) {
    assert.equal(translations.en.skills[i].items.length, translations.es.skills[i].items.length);
  }
  for (const copy of Object.values(translations)) {
    assert.equal(copy.projects.length, 4);
    assert.equal(copy.summaries.length, 4);
    assert.deepEqual(copy.sections.map(s => s.id), ['home', 'about', 'projects', 'skills', 'experience', 'contact']);
    assert.ok(Object.values(copy.ui).every(value => value.trim()));
    for (const summary of copy.summaries) assert.equal(summary.match(/[.!?](?:\s|$)/g)?.length, 2, summary);
  }
  assert.equal(translations.es.ui.about, 'Sobre mí');
});

test('every named technology has an icon or a deliberate generic symbol', () => {
  for (const copy of Object.values(translations)) {
    const technologies = new Set([...copy.skills.slice(0, 3).flatMap(s => s.items), ...copy.projects.flatMap(p => p.technologies)]);
    for (const name of technologies) assert.ok(techIcons[name] || genericIcons.has(name), name);
  }
});

test('R1 positioning, IFF server rack, UADE progress, skills, and project accuracy hold in EN and ES', () => {
  for (const [lang, copy] of Object.entries(translations)) {
    assert.match(copy.profile.title, /infrastructure|infraestructura/i, lang);
    assert.match(copy.profile.title, /cybersecurity|ciberseguridad/i, lang);
    assert.match(copy.experience.details.join(' '), /server rack|racks? de servidores/i, lang);
    assert.match(copy.experience.details.join(' '), /enterprise operating systems|sistemas operativos empresariales/i, lang);
    assert.match(copy.education.status, /36\/49.*74%/, lang);
    const allSkills = copy.skills.flatMap(group => group.items);
    for (const required of ['TypeScript', 'Linux', 'Windows', 'BSD', 'Docker', 'BSD Jails', 'NAS']) {
      assert.ok(allSkills.includes(required), `${lang} missing ${required}`);
    }
    assert.ok(allSkills.includes(lang === 'en' ? 'Virtualization' : 'Virtualización'), lang);
    assert.match(allSkills.join(' '), /networking|redes/i, lang);
    assert.match(allSkills.join(' '), /security|seguridad/i, lang);
    assert.match(allSkills.join(' '), /UML/, lang);

    assert.ok(!copy.projects.some(p => /plataforma de eventos/i.test(p.title)), lang);
    const cultureClub = copy.projects[3];
    assert.equal(cultureClub.title, 'CultureClub');
    assert.ok(!cultureClub.technologies.includes('JavaScript'), `${lang} CultureClub must not tag JavaScript`);
    const cultureClubText = [cultureClub.description, cultureClub.detail, ...cultureClub.highlights, copy.summaries[3]].join(' ');
    assert.doesNotMatch(cultureClubText, /javascript/i, lang);
  }
});

test('R1 exclusions, contact identity, PDF resumes, quick wins, and R2 CR corner mark are preserved', () => {
  assert.equal(translations.en.profile.linkedin, 'https://www.linkedin.com/in/franbottazzini');
  assert.equal(translations.en.profile.email, 'franbottazzini@hotmail.com');

  const root = fileURLToPath(new URL('..', import.meta.url));
  const filesToScan = [
    `${root}index.html`,
    ...readdirSync(`${root}src`).filter(f => /\.(ts|tsx|css)$/.test(f)).map(f => `${root}src/${f}`),
  ];
  for (const file of filesToScan) {
    const content = readFileSync(file, 'utf8');
    assert.doesNotMatch(content, /Pita Paradise|Ferias Entre Vecinos/i, file);
    assert.doesNotMatch(content, /\+54\s*9|\b11[-\s]?\d{4}[-\s]?\d{4}\b|\bB1642\b|\b1642\b/i, file);
  }

  const enPdf = readFileSync(`${root}public/resume/Francisco-Bottazzini-Resume-EN.pdf`);
  const esPdf = readFileSync(`${root}public/resume/Francisco-Bottazzini-CV-ES.pdf`);
  assert.ok(enPdf.subarray(0, 5).toString('ascii') === '%PDF-', 'EN resume is a valid PDF');
  assert.ok(esPdf.subarray(0, 5).toString('ascii') === '%PDF-', 'ES resume is a valid PDF');
  const resumeScript = readFileSync(`${root}scripts/build-resumes.py`, 'utf8');
  assert.match(resumeScript, /Development, Infrastructure & Cybersecurity/);
  assert.match(resumeScript, /Desarrollo, Infraestructura y Ciberseguridad/);
  assert.match(resumeScript, /BSD Jails/);
  assert.match(resumeScript, /36\/49/);

  const appTsx = readFileSync(`${root}src/App.tsx`, 'utf8');
  const stylesCss = readFileSync(`${root}src/styles.css`, 'utf8');
  assert.match(appTsx, /className="corner-mark"[^>]*href="#home"/);
  assert.match(appTsx, /id="cr-stripes"/);
  assert.match(appTsx, /className="project-close"/);
  assert.match(appTsx, /activeResume\.path/);
  assert.match(stylesCss, /\.corner-mark\s*\{/);
});
