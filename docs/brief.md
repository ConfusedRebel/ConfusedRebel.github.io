# Build My Personal Software Engineering Portfolio

## 1. Project objective

Create a complete, modern, responsive, single-page developer portfolio for **Francisco Bottazzini**.

The portfolio must present my software engineering background, technical skills, work experience, education, and featured projects.

The central design concept is a visual journey through Argentina, traveling from north to south as the user scrolls.

The website must be professional and appropriate for recruiters and engineering managers, while having a distinctive visual identity.

**Primary priorities, in order:**
1. Clear presentation of my professional profile.
2. Strong visibility of technical skills and projects.
3. Excellent readability and responsive design.
4. Minimalist visual storytelling through Argentine landscapes.
5. Smooth, subtle interactions and transitions.

Avoid sacrificing usability for visual effects.

## 2. Technology and implementation

Use:
- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide icons
- SVG illustrations built with reusable React components

Use CSS transitions and lightweight animation techniques. Avoid unnecessary animation dependencies.

The project should have:
- Reusable components
- Organized folders
- Data-driven content
- Responsive layouts
- Accessible navigation
- Semantic HTML
- SEO metadata
- Optimized loading performance

Store editable portfolio content separately from the components.

## 3. Overall visual style

**Design:** Minimalist, clean, modern, illustrated.

**Typography:** Geist or Inter.

**Colors:** Mostly neutral, with subtle palette transitions between geographical regions.

**Illustration style:**
- Flat vector shapes
- Geometric landscapes
- Simplified vegetation and wildlife
- Layered SVG scenery
- No photorealism
- No complicated textures
- No heavy shadows
- No glassmorphism
- No unnecessary decorative elements

Each scene should resemble a carefully composed minimalist landscape mockup.

Use three to five main colors per region, including neutral tones.

### Global layout

Create six main sections corresponding to six Argentine landscapes.

Each section should have:
- A clear content hierarchy
- Subtle landscape elements
- Generous whitespace
- Responsive content positioning
- A coherent transition to the next section

Not every section needs a full-screen illustration. Use landscapes as integrated background compositions where appropriate.

### Navigation

Implement:
- Minimal fixed header
- Name or initials on the left
- About, Skills, Experience, Projects, Contact links
- Small vertical Argentina journey indicator on desktop
- Minimal mobile navigation
- Smooth anchor scrolling
- Active section indication

The journey indicator should communicate progression from northern to southern Argentina without becoming visually distracting.

## 4. Section 01 — Misiones

**Purpose:** Hero / Introduction

**Landscape:** Dense subtropical forest inside a valley, with a river passing through the center.

### Landscape direction
- Forested valley slopes on both sides.
- A winding river in the middle.
- Dense forest represented through layered geometric tree silhouettes.
- Dark green and muted emerald palette.
- River serves as a visual guide into the next section.
- Maintain a clean area for the introduction.

### Content

**Eyebrow:** SOFTWARE ENGINEERING · ARGENTINA

**Headline:**
Hi, I'm Francisco.

**Professional title:**
Software Engineering Student & Developer

**Introduction:**
I build practical software solutions, combining technical problem-solving with a strong foundation in software engineering.

**Secondary line:**
Based in Buenos Aires, Argentina.

**Primary CTA:** Explore My Projects

**Secondary CTA:** Get in Touch

Include a small, understated scroll indicator.

The introductory content should be immediately readable without relying on animation.

## 5. Section 02 — Esteros del Iberá, Corrientes

**Purpose:** About Me

**Landscape:** An Argentine wetland with shallow lagoons, swamp vegetation, caimans, and capybaras.

### Landscape direction
- Calm water and floating vegetation.
- Reeds and wetland grasses.
- Small geometric capybara silhouettes near the shore.
- One subtle caiman silhouette partly submerged.
- Open sky and generous whitespace.
- Sage green, muted teal, and warm neutral colors.

Wildlife should be recognizable but simplified, using very few shapes.

### Content

**Heading:** A Little About Me

**Biography:**

I'm a Software Engineering student at Universidad Argentina de la Empresa (UADE), currently in my fourth year, with an expected graduation in 2027.

My background combines hands-on IT support experience with software development projects involving backend systems, web and mobile applications, and numerical computing.

I enjoy understanding how systems work, solving technical challenges, and developing software that is practical, maintainable, and well structured.

I'm continuously expanding my skills across different technologies while building projects that turn theoretical knowledge into working applications.

### Personal strengths

Display four compact text items:
- Analytical Thinking
- Problem-Solving
- Adaptability
- Collaboration

### Languages

Spanish — Native

English — Advanced

Keep this section concise and readable.

## 6. Section 03 — Mendoza

**Purpose:** Skills & Technologies

**Landscape:** A long mountain path crossing Mendoza, framed by massive cliffs.

### Landscape direction
- Large geometric cliff walls.
- A road or path extending into the distance.
- Strong perspective with a clear central opening.
- Muted earth, stone, slate, and mountain blue tones.
- Minimal landscape detail so that technical content remains prominent.

### Content

**Heading:** Technologies & Skills

**Description:**
Technologies and tools I've worked with through academic projects, independent development, and professional experience.

Organize technologies into four simple categories.

**Languages & Frameworks**
- Java
- Spring Boot
- Python
- JavaScript
- React
- React Native

**Databases & Data**
- SQL
- MySQL
- MongoDB
- Redis
- NumPy
- Pandas

**Development Tools**
- Git
- GitHub
- Postman
- REST APIs
- Windows
- Linux

**Additional Knowledge**
- Software Engineering Fundamentals
- Data Structures & Algorithms
- Networking Fundamentals
- Information Security Fundamentals
- Data Analysis
- Software Testing

Use compact technology labels or understated icons.

Avoid skill percentage bars, arbitrary proficiency scores, large logo collections, and unsupported expertise claims.

## 7. Section 04 — La Pampa

**Purpose:** Professional Experience & Education

**Landscape:** Flat plains with the Camino del Desierto extending toward the horizon.

### Landscape direction
- Large empty sky.
- Flat warm grasslands.
- A thin, long road with a distant vanishing point.
- Very restrained vegetation.
- Cream, warm sand, muted olive, and terracotta.

This should be the least visually busy section.

### Content

**Heading:** My Journey

**Description:**
A combination of professional experience, academic learning, and hands-on software development.

### Experience entry

**Digital Technology Support Intern — Plant Team**

International Flavors & Fragrances (IFF)

March 2026 — Present

- Provide technical support to plant users, troubleshooting hardware and software issues.
- Resolve support tickets and assist with Windows installation and configuration.
- Support IT equipment management, inventory tracking, and operational organization.
- Use Excel to organize, monitor, and analyze technical and operational information.

### Education entry

**Software Engineering**

Universidad Argentina de la Empresa (UADE)

2022 — Expected 2027

Currently in fourth year.

Focus on software development, computer systems, programming, algorithms, networking, and software engineering foundations.

### Layout

Use a minimal vertical timeline.

Professional experience should be presented first, followed by education.

Do not add unrelated work experience merely to fill the timeline.

## 8. Section 05 — Punta Pirámide, Chubut

**Purpose:** Featured Projects

**Landscape:** Coastal cliffs at Punta Pirámide with sea lions and whales.

### Landscape direction
- Geometric coastal cliffs overlooking the Atlantic Ocean.
- Small sea lion silhouettes resting on shore or rocks.
- Subtle whale silhouettes or a whale tail emerging from the sea.
- Muted sandstone and ocean blues.
- Open horizontal composition.

The wildlife should support the regional identity without distracting from project cards.

### Content

**Heading:** Selected Work

**Description:**
A selection of projects where I've applied software engineering concepts to practical problems.

### Project 01 — Numerical Modeling & Simulation Lab

**Year:** 2026

**Technologies:** Python, Streamlit, NumPy, SymPy, Pandas, Plotly, Pytest

**Description:**
An educational application for exploring numerical methods, including root finding, interpolation, differentiation, and integration.

Built with a modular architecture, interactive visualizations, and automated tests to support experimentation and learning.

**Highlights:**
- Numerical computation
- Interactive data visualization
- Modular software architecture
- Automated testing

**Actions:**
View Code — link placeholder
Live Demo — only if available

### Project 02 — App Statistics

**Year:** 2026

**Technologies:** Python, NumPy, SciPy, Textual

**Description:**
An applied statistics application covering estimation, confidence intervals, sample-size calculations, and hypothesis testing.

Includes a terminal user interface and an HTTP API for interacting with statistical functionality.

**Highlights:**
- Statistical computation
- Terminal user interface
- HTTP API
- Practical statistical analysis

**Actions:**
View Code — link placeholder
Live Demo — only if available

### Project 03 — App Claw

**Year:** 2025

**Technologies:** React Native, Supabase

**Description:**
A mobile application for organizing padel and tennis tournaments.

Supports player and team management, match organization, and real-time data handling.

**Highlights:**
- Mobile application development
- Tournament management
- Real-time data
- Backend integration

**Actions:**
View Code — only if available
Live Demo — only if available

### Project card design

Each card should contain:
- Project title
- Year
- Short description
- Technologies
- Two to four relevant highlights
- Available external links

Use clean, simple cards with light borders and minimal decoration.

Project preview images are optional. Do not use random stock images or invented screenshots.

The project section should prioritize content quality over visual effects.

## 9. Section 06 — El Chaltén, Santa Cruz

**Purpose:** Contact & Footer

**Landscape:** A frozen Patagonian environment with snow-covered ground, snowy forests, and distant mountains.

### Landscape direction
- Wide frozen ground or lake.
- Smooth snow covering the foreground like a continuous carpet.
- Minimal snow-covered pine forests around the sides.
- Distant angular mountains on the horizon.
- Pale blue, white, muted steel blue, and deep navy.
- Spacious and serene composition.

The landscape should convey a natural end to the geographical journey.

### Content

**Heading:** Let's Build Something Together.

**Description:**
I'm always interested in opportunities to learn, collaborate, and contribute to meaningful software projects.

Feel free to reach out.

**Contact links:**

Email: franbottazzini@hotmail.com

GitHub: [ADD GITHUB PROFILE URL]

LinkedIn: [ADD LINKEDIN PROFILE URL]

### Footer

Francisco Bottazzini

Software Engineering Student & Developer

Built with React & TypeScript.

Include a simple copyright notice using the current year.

## 10. Interactions

Add restrained interactions:
- Smooth section navigation
- Subtle active-section indicator
- Gentle SVG landscape movement where appropriate
- Lightweight hover feedback on project cards
- Minimal button transitions
- Soft landscape transitions between sections

Avoid:
- Excessive parallax
- Scroll hijacking
- Long entrance animations
- Complex particle effects
- Constantly moving wildlife
- Heavy animation libraries

Respect reduced-motion accessibility preferences.

## 11. Responsive design

The portfolio must work on:
- Desktop
- Tablets
- Mobile devices

On mobile:
- Simplify landscape compositions.
- Preserve readable typography.
- Stack project cards vertically.
- Remove or simplify the journey indicator.
- Avoid horizontal overflow.
- Ensure all navigation and project links remain accessible.

## 12. Accessibility and performance

Requirements:
- Semantic HTML
- Clear heading hierarchy
- Keyboard-accessible navigation
- Visible focus states
- Accessible color contrast
- Meaningful labels for interactive elements
- Decorative SVGs hidden from screen readers
- Reduced-motion support
- Optimized SVG rendering
- Avoid unnecessary assets and JavaScript

Include standard SEO metadata and Open Graph information.

## 13. Project architecture

Use a maintainable component structure.

Suggested components:
- Header
- JourneyIndicator
- SectionLayout
- MisionesLandscape
- IberaLandscape
- MendozaLandscape
- PampaLandscape
- ChubutLandscape
- ChaltenLandscape
- SkillsGrid
- ExperienceTimeline
- ProjectCard
- ContactLinks
- Footer

Keep portfolio information in a separate data file so text, skills, links, and projects can be updated easily.

## 14. Important constraints

- Do not invent achievements, metrics, employers, technologies, certifications, or project capabilities.
- Do not invent GitHub repositories, demo URLs, or LinkedIn links.
- Do not display empty links as working buttons.
- Do not create fictitious project screenshots.
- Do not add testimonials or meaningless filler sections.
- Do not exaggerate my professional experience.
- Keep the site entirely in English.
- Use my exact professional and project information from this specification.
- Do not include phone numbers or a home address.
- Prioritize software development rather than making the portfolio look primarily IT-support-oriented.

## 15. Final expected result

Deliver a complete, working, responsive personal portfolio with all six sections implemented.

The Argentina journey must be recognizable, but the interface must remain clean, minimal, and professional.

The final result should feel like a sophisticated developer portfolio with carefully crafted geographic details, not a tourism website, illustration gallery, or overly animated showcase.

Implement the actual website, not just a static mockup. Include setup instructions and verify that the project builds successfully.