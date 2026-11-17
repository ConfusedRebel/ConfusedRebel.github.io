# Repository Guidelines

## Project Structure & Module Organization

This is a bilingual React and TypeScript portfolio built with Vite. `src/App.tsx` assembles the page; `src/data.ts` holds profile and project content; `src/translations.ts` holds English and Spanish copy. Reusable UI and landscape SVGs live in `src/components/`, while theme tokens and responsive rules live in `src/styles.css`. Static files, including résumé PDFs, are in `public/`. Node tests are in `tests/`; asset and deployment helpers are in `scripts/`. The GitHub Pages workflow is `.github/workflows/deploy.yml`.

## Build, Test, and Development Commands

Use Node.js 24 and npm. Run `npm ci` to install locked dependencies, then `npm run dev` for the local Vite server. Run `npm test` for the Node test suite and `npm run build` for strict TypeScript checking and a production bundle in `dist/`. `npm run preview` serves that bundle locally. After changing résumé text in `scripts/build-resumes.py`, run `python scripts/build-resumes.py` with ReportLab installed. Run `node scripts/build-tech-icons.mjs` when regenerating technology icon paths.

## Coding Style & Naming Conventions

Follow the existing two-space indentation in TypeScript and tests. Use PascalCase for React components and types, camelCase for functions and values, and descriptive kebab-case CSS classes. Keep page content in `data.ts`, translated interface text in `translations.ts`, and shared colors in the CSS theme variables. TypeScript is configured with `strict: true`. No separate formatter or linter is configured; match nearby style and use `npm run build` for type validation.

## Testing Guidelines

Tests use `node:test` and `node:assert/strict`, with filenames ending in `.test.mjs`. Add focused tests for behavior that can be checked without a browser, especially preferences, translations, links, and deployment metadata. Run `npm test` before submitting changes. For visual or content changes, also check both languages, light and dark themes, mobile layout, and both résumé downloads in a browser. No coverage threshold is configured.

## Commit & Pull Request Guidelines

This checkout contains no Git history, so an established commit format cannot be verified. Use short, imperative subjects such as `Update project translations`. In pull requests, describe the change and its reason, list the commands run, link a relevant issue when one exists, and include before and after screenshots for visual changes. Keep generated `dist/` and `node_modules/` out of commits.
