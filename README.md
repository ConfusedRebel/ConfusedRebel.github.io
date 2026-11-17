# Francisco Bottazzini Portfolio

A responsive, English/Spanish developer portfolio with six Argentine landscape illustrations. Built with React, TypeScript, Vite, Tailwind CSS, Lucide, and original reusable SVG illustrations. Includes short, expandable project descriptions, consistent monochrome technology symbols, and a system-aware light/dark theme with saved manual selection and one-page English/Spanish résumé PDFs.

## Run locally

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Vite. To check a production build:

```sh
npm test
npm run build
npm run preview
```

## Edit content

- `src/data.ts`: biography, skills, experience, projects, contact details, and résumé paths.
- `src/components/Landscapes.tsx`: all six SVG illustrations.
- `src/styles.css`: responsive layout and light/dark color tokens.
- `public/resume/`: the two downloadable PDFs.
- `scripts/build-resumes.py`: editable English/Spanish résumé text and PDF layout. Requires Python with ReportLab (`python -m pip install reportlab`). Run `python scripts/build-resumes.py` to regenerate; Fontconfig fonts are optional, with Helvetica as a fallback.

GitHub profile and four public repository URLs are included. Later, populate `profile.linkedin` and add available `demo` HTTPS URLs in `src/data.ts`. Project buttons appear only for valid available URLs. No analytics, external font requests, backend, contact form, or tracking is included. Contact opens the visitor's email application.

The résumé content follows the approved brief, with March 2026 as the IFF start date. Source documents used differing dates and included other work, phone numbers, and social links; these have not been added. The Spanish résumé uses the original degree name Ingeniería Informática. Website language can be switched independently of the résumé download language.

## Deploy to GitHub Pages

1. Create or choose a GitHub repository and upload this folder's contents at the repository root, including `.github/` and `package-lock.json`. Do not upload `node_modules/`.
2. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Push to `main` or manually run **Deploy portfolio to GitHub Pages** in Actions. If your default branch differs, update `deploy.yml`.

The included workflow installs dependencies, runs tests, builds, adds the actual Pages URL to canonical/Open Graph metadata, and deploys `dist/`. Relative Vite asset paths work for both `username.github.io` and repository subpaths. This follows [Vite's GitHub Pages deployment guidance](https://vite.dev/guide/static-deploy.html#github-pages).

No repository or domain has been selected, and nothing has been published. Production URLs are generated during deployment rather than invented. For another host, build then run `SITE_URL=https://your-domain.example/ node scripts/set-site-url.mjs` before deploying `dist/`.

## Accessibility and behavior

Semantic headings and landmarks, a skip link, visible keyboard focus, a minimal CR corner link and section navigation, reduced-motion CSS, hidden decorative landscapes, and native download links. The theme uses the system preference until a visitor makes a choice, then stores that preference locally. If browser storage is unavailable, the toggle still works during the visit.

Tests use Node's built-in test runner and cover theme fallback and suppression of missing/unsafe links. Run `npm run build` for TypeScript validation and production bundling. Check both PDF downloads and both themes after content changes.

## Layout revision

Order: Introduction, About, Projects, Skills, Experience, Contact. The top navigation bar, decorative captions, region numbers, and capybaras have been removed. Résumé downloads are in the footer; the theme switch is at the top right. Landscape SVGs preserve their aspect ratio. Desktop scenery uses shorter, proportionally cropped bands; mobile layouts crop the sides rather than stretch the artwork. The CR corner mark uses an original horizontal-stripe SVG in the page palette.

## Translation and technology symbols

Edit `src/translations.ts` for English/Spanish interface copy and project summaries. Language and theme preferences are saved independently. Clicking a project card opens a native floating dialog with the full description, technology icons, and code links. Escape and Close dismiss the view and return focus to its trigger. Corrientes uses the same full-width landscape treatment as the other sections.

Selected brand SVG paths come from Simple Icons (CC0), with Lucide symbols for generic technologies. Run `node scripts/build-tech-icons.mjs` to regenerate the selected paths. All technology symbols share the same size and theme color.

## Current project selection

Modeling lab, App Statistics, App Claw (torneos-app), and CultureClub. CultureClub describes a university project using Java/Spring Boot, JavaScript, and SQL/MySQL. Geographic labels are replaced with centered section titles and translated section navigation. Other projects can be added after their repositories are published.

## Landscape continuity and project views

Scenes fade at their edges into one shared theme background. Translucent SVG ridges overlap section boundaries. Only backgrounds are masked, keeping text sharp. Project views use a native dialog with background scroll locking, a close control, and reduced-motion-aware entry animation. The empty video placeholder has been removed. Code links use compact black buttons with white text.

Project dialogs float over a dimmed, blurred page, retain an outside margin on mobile, and scroll internally. Landscape-only parallax is capped at 72px in either direction and disabled when reduced motion is requested.
