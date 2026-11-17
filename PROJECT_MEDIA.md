# Project media audit

Media should show the actual project. The four projects in `src/data.ts` were checked against local source or their linked GitHub repositories. No sample screen is presented as a live capture.

The delivered lab and statistics clips are integrated into their project detail dialogs. Media mounts when the dialog opens; each video has native controls, a poster, `preload="none"`, and no autoplay. App Claw and CultureClub have source-backed architecture diagrams in their detail dialogs.

| Featured project | Decision and placement | Status |
| --- | --- | --- |
| Numerical Modeling & Simulation Lab | Use the 12-second Newton–Raphson clip in the project detail view, next to the numerical-methods explanation. | Captured from the running local Streamlit application. It shows real input, result, and iteration states in sequence; it is not a continuous cursor recording. |
| App Statistics | Use the 12-second TUI clip in the project detail view, with its poster, native controls, and `preload="none"`. Do not autoplay. | Existing authentic sequence of three real Textual states: blank form, loaded example, edited α. It is a state sequence rather than a continuous interaction recording; text is small, so a later browser-UI recapture would be worthwhile. |
| App Claw | Show its frontend → Supabase services → PostgreSQL diagram in the project detail view. A 10–20-second portrait workflow clip would also be worthwhile. | Diagram delivered. The linked Expo source calls Supabase directly; it does not include a separate application server. No live clip yet because a safe Supabase test environment is unavailable. |
| CultureClub | Show its client → Spring Boot REST API → MySQL diagram in the project detail view. Prefer one still of a real data-backed event or API response if media is added later. | Diagram delivered. The linked source verifies the backend and database, but contains no frontend implementation; the diagram labels the client as unverified. |

## Delivered files

| File | Source | Duration | Dimensions | Frame rate | Size |
| --- | --- | ---: | ---: | ---: | ---: |
| `public/projects/numerical-modeling-simulation-lab/workflow.mp4` | Running Streamlit Newton example (`f(x)=x^3-x-4`, `x₀=1`): actual input, result, and six iteration states. H.264, no audio. | 12 s | 1280×720 | 30 fps | 192,442 bytes |
| `public/projects/numerical-modeling-simulation-lab/poster.webp` | Result state from the same Streamlit application. | — | 1280×720 | — | 29,892 bytes |
| `public/projects/numerical-modeling-simulation-lab/newton.webp` | Earlier still from the same app; retained as an optional screenshot. | — | 1164×655 | — | 16,836 bytes |
| `public/projects/app-statistics/workflow.mp4` | Existing Textual test-driver capture of the project's sample confidence-interval calculation, before and after changing α. H.264, no audio. | 12 s | 1920×1080 | 30 fps | 210,290 bytes |
| `public/projects/app-statistics/poster.webp` | Loaded example from the same Textual application. | — | 1920×1080 | — | 65,490 bytes |

The statistics example uses the repository's sample data. Loading it gives a 99% confidence interval of 13.0127–16.9873; changing α to 0.05 yields 13.4879–16.5121 at 95% confidence.

## Capture plans for missing featured projects

- **App Claw:** obtain the linked Expo checkout and a disposable Supabase project with synthetic players and teams. Run it in a phone simulator, record tournament creation through match organization at 720×1280 and 30 fps, trim to 10–20 seconds, remove audio, then export a WebP poster from a representative frame. Avoid real account or player data.
- **CultureClub:** obtain the Spring Boot checkout and local MySQL database, seed synthetic event data, and verify an API response. Capture that response or a real frontend if its separate repository is supplied. Do not create a substitute UI. The linked repository alone does not verify the portfolio's JavaScript/frontend description.

## Quick check of other workspace projects

| Project | Recommend the same media treatment? | Reason |
| --- | --- | --- |
| `KG` / Nuclear Numerical Lab | **Yes, still first.** | A numerical ODE comparison is best understood from a real graph plus model controls. Label it as the repository does: fictional and educational, not reactor control. |
| `customArch` / Arch Settings | **Yes, short clip.** | The native GTK navigation and Lua search are interaction-heavy; a 10–20-second clip with a safe fixture would show them well. It is read-only. |
| `resisst` / windowcmd | **Yes, short clip.** | Its main value is a live command-palette workflow in Hyprland. Capture search and one reversible window action. |
| `Declutter` | **Yes, still.** | A redacted sample audit report communicates the tool faster than a terminal video. Avoid publishing local paths, processes, or package inventory. |
| `Unitree` | **No, for now.** | This workspace contains simulation/SDK material; the quick check did not establish a distinct authored project to feature. |
| `textual` | **No.** | Its Git remote is `Textualize/textual`; it is an upstream dependency/source checkout, not a separate portfolio project. |

These are recommendations only. The other projects were not added to `src/data.ts`, and no media for them is presented as completed.
