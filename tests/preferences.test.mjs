import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveTheme, externalLinks } from '../src/preferences.ts';
test('theme respects a saved choice and falls back to the system', () => {
  assert.equal(resolveTheme('light', true), 'light');
  assert.equal(resolveTheme('dark', false), 'dark');
  assert.equal(resolveTheme(null, true), 'dark');
  assert.equal(resolveTheme('invalid', false), 'light');
});
test('unavailable and unsafe links never become actions', () => {
  assert.deepEqual(externalLinks({ code: '', demo: undefined }), []);
  assert.deepEqual(externalLinks({ code: 'javascript:alert(1)', demo: '#' }), []);
  assert.deepEqual(externalLinks({ code: 'https://example.com/repo' }), [{ label: 'View Code', href: 'https://example.com/repo' }]);
});
