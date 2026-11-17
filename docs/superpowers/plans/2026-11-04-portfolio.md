# Portfolio Implementation Plan

**Goal:** Deliver Francisco's six-region portfolio and two downloadable résumés.
**Architecture:** Static React page with editable data, reusable SVG scenes, CSS theme tokens, and native anchor navigation. No backend or invented external links.
**Tech stack:** React, TypeScript, Vite, Tailwind, Lucide; ReportLab for PDFs.
**Spec:** ../../brief.md plus approved English/Spanish light PDFs and system-aware light/dark website toggle.

## Tasks
- [x] Create the Vite project and editable content in src/data.ts; keep all unavailable external URLs absent.
- [x] Build six reusable SVG landscapes in src/components/Landscapes.tsx and compose the semantic page in src/App.tsx. Style responsive layouts and both palettes in src/styles.css.
- [x] Add persistent theme selection, mobile navigation with Escape/anchor closing, active-section navigation, reduced-motion behavior, and accessible PDF downloads. Verify theme fallback and URL filtering with Node's built-in test runner.
- [x] Generate English and Spanish one-page PDFs from the approved facts using scripts/build-resumes.py. Extract text and render both pages to inspect typography and overflow.
- [x] Add GitHub Pages workflow, relative deployment paths, metadata, and setup/editing instructions. Run npm test and npm run build.
- [x] Preview desktop/mobile and both themes, exercise navigation/downloads, check overflow and keyboard focus, and package the source without node_modules.

## Verification
Behavior tests: valid stored theme overrides system preference; invalid theme follows system; unavailable/unsafe project links do not render. Production build includes both PDFs and all assets. Browser checks cover mobile menu, theme persistence, anchor navigation, responsive overflow, and reduced motion. PDF checks require one page per language and no private contact details beyond the approved email and city.
