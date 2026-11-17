# Project demo media brief

Create project demo media for the developer portfolio at `/home/yogurt/Projects/portfolio`. Prioritize fast loading, clear UI text, and accurate representation of the projects.

First inspect `src/data.ts`, `TODO.md`, and the linked project repositories. Local source projects are available at `/home/yogurt/Projects/laboratorio_modelado_simulacion` and `/home/yogurt/Projects/Estadistica Aplicada APP`. Decide which projects benefit from a short video and which are better shown with a still screenshot. Do not make a video merely to give every project one.

For each selected project:

- Capture the real application running. Show one meaningful workflow or feature in 10–20 seconds, with a 30-second maximum.
- Do not invent screens, results, features, metrics, or user activity. Use safe sample data and remove personal or sensitive information.
- Make the action understandable without audio. Avoid decorative intros, transitions, and long loading sequences.
- Export an H.264 MP4 at 30 fps. Start at 1280×720 for landscape UI or 720×1280 for portrait mobile UI. Use 1080p only if important text is unreadable at 720p. Do not export at 60 fps unless the demonstrated feature requires it.
- Remove the audio track if it adds no information. Create a representative, optimized poster image for each video.

Keep the files small while preserving readable text. Save proposed assets under `/home/yogurt/Projects/portfolio/public/projects/<project-slug>/` and report each file’s duration, dimensions, frame rate, and size. For App Claw and CultureClub, use their linked repositories only if you can run and verify them. If you cannot run or verify any project, explain the blocker and provide an authentic screenshot or capture plan instead of fabricating footage.

Deliver the media and a short recommendation for where each clip or screenshot should appear on the portfolio. Do not add autoplay. If you integrate a video into the site, use native controls, a poster image, and `preload="none"` so it downloads when a visitor chooses to play it.
