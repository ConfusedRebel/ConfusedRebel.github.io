export const profile = {
  name: 'Francisco Bottazzini',
  title: 'Software Engineering Student · Development, Infrastructure & Cybersecurity',
  email: 'franbottazzini@hotmail.com',
  location: 'Buenos Aires, Argentina',
  introduction: 'I build practical software and manage resilient systems, combining software engineering with hands-on infrastructure and cybersecurity fundamentals.',
  github: 'https://github.com/ConfusedRebel',
  linkedin: 'https://www.linkedin.com/in/franbottazzini',
  about: [
    "I'm a Software Engineering student at Universidad Argentina de la Empresa (UADE) (Jan 2022 – Dec 2027 expected), having completed 36 of 49 courses (74%).",
    'My experience combines plant IT and infrastructure support at IFF—spanning server rack maintenance, enterprise OS configuration, and user diagnostics—with software projects across backend APIs, mobile apps, and numerical tools.',
    'I focus on understanding how software, operating systems, and networks work together in practice, from Linux and BSD environments with containerization and virtualization to well-structured application code.',
    'Across every project and operational task, I prioritize clarity, reliability, and sound security fundamentals to build maintainable, verifiable systems.',
  ],
  strengths: ['Analytical Thinking', 'Problem-Solving', 'Adaptability', 'Collaboration'],
  languages: [{ name: 'Spanish', level: 'Native' }, { name: 'English', level: 'Advanced' }],
};
export const sections = [
  { id: 'home', label: 'Introduction', region: 'Misiones' },
  { id: 'about', label: 'About', region: 'Esteros del Iberá' },
  { id: 'projects', label: 'Projects', region: 'Punta Pirámide' },
  { id: 'skills', label: 'Skills', region: 'Mendoza' },
  { id: 'experience', label: 'Experience', region: 'La Pampa' },
  { id: 'contact', label: 'Contact', region: 'El Chaltén' },
];
export const skills = [
  { title: 'Languages & Frameworks', items: ['Java', 'Spring Boot', 'Python', 'JavaScript', 'TypeScript', 'React', 'React Native'] },
  { title: 'Databases & Data', items: ['SQL', 'MySQL', 'MongoDB', 'Redis', 'NumPy', 'Pandas'] },
  { title: 'Systems, Infrastructure & Tools', items: ['Linux', 'Windows', 'BSD', 'Docker', 'BSD Jails', 'Virtualization', 'NAS', 'Git', 'GitHub', 'Postman', 'REST APIs'] },
  { title: 'Networking, Security & Engineering', items: ['Networking Fundamentals', 'Information Security Fundamentals', 'Software Engineering & UML', 'Data Structures & Algorithms', 'Data Analysis', 'Software Testing'] },
];
export const experience = {
  role: 'Digital Technology Support Intern — Plant Team',
  company: 'International Flavors & Fragrances (IFF)',
  dates: 'March 2026 — Present',
  details: [
    'Provide technical support to plant users, performing hardware and software diagnostics and resolving support tickets.',
    'Install, configure, and maintain enterprise operating systems and plant workstations.',
    'Manage and maintain server racks alongside IT equipment lifecycle and inventory tracking.',
    'Compile operational reporting and technical tracking records using Excel.',
  ],
};
export const education = {
  degree: 'Software Engineering', school: 'Universidad Argentina de la Empresa (UADE)',
  dates: 'Jan 2022 — Dec 2027 (Expected)', status: '36/49 courses completed (74%).',
  description: 'Focus on software development, operating systems, algorithms, networking, and information security foundations.',
};
export type ProjectMedia =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster: string; alt: string };
export type ProjectArchitecture = {
  nodes: { layer: string; title: string; detail: string }[];
  connections: string[];
  note: string;
};
export type Project = { title: string; year: string; category: string; technologies: string[]; description: string; detail: string; highlights: string[]; code?: string; demo?: string; media?: ProjectMedia; architecture?: ProjectArchitecture };
export const projects: Project[] = [
  { code: 'https://github.com/ConfusedRebel/laboratorio_modelado_simulacion', title: 'Numerical Modeling & Simulation Lab', year: '2026', category: 'NUMERICAL COMPUTING', technologies: ['Python', 'Streamlit', 'NumPy', 'SymPy', 'Pandas', 'Plotly', 'Pytest'], description: 'An educational application for exploring numerical methods, including root finding, interpolation, differentiation, and integration.', detail: 'Built with a modular core and methods architecture, safe SymPy expression parsing without eval(), interactive Plotly charts, 11 pytest test modules, and GitHub Actions CI.', highlights: ['Modular software architecture', 'Safe SymPy parsing without eval()', '11 pytest modules & GitHub Actions CI', 'Interactive Plotly visualizations'], media: { kind: 'video', src: 'projects/numerical-modeling-simulation-lab/workflow.mp4', poster: 'projects/numerical-modeling-simulation-lab/poster.webp', alt: 'Newton–Raphson example: input, computed root, and successive tangent views' } },
  { code: 'https://github.com/ConfusedRebel/App-Statistics', title: 'App Statistics', year: '2026', category: 'STATISTICAL ANALYSIS', technologies: ['Python', 'NumPy', 'SciPy', 'Textual', 'REST APIs'], description: 'An applied statistics application covering estimation, confidence intervals, sample-size calculations, and hypothesis testing.', detail: 'Pairs a Textual terminal interface with a local stdlib HTTP JSON API bound to 127.0.0.1 with request payload bounds, backed by unittest API and async TUI tests.', highlights: ['Shared statistical computation domain', 'Textual terminal user interface', 'Bounded local HTTP JSON API (127.0.0.1)', 'unittest API & async TUI coverage'], media: { kind: 'video', src: 'projects/app-statistics/workflow.mp4', poster: 'projects/app-statistics/poster.webp', alt: 'App Statistics recalculating a confidence interval in its terminal interface' } },
  { code: 'https://github.com/ConfusedRebel/torneos-app', title: 'App Claw', year: '2025', category: 'MOBILE DEVELOPMENT', technologies: ['TypeScript', 'React Native', 'Supabase'], description: 'A TypeScript and React Native mobile application for organizing padel and tennis tournaments.', detail: 'Supports authentication flows, validated forms, player and team management, and match tracking directly against Supabase.', highlights: ['TypeScript & React Native app', 'Authentication & form validation', 'Tournament & match management', 'Direct Supabase integration'], architecture: { nodes: [
    { layer: 'Frontend', title: 'Expo / React Native', detail: 'Screens and tournament providers' },
    { layer: 'Backend service', title: 'Supabase', detail: 'Authentication and table API' },
    { layer: 'Database', title: 'PostgreSQL', detail: 'Tournaments, teams, and matches' },
  ], connections: ['Supabase client requests', 'Reads and writes'], note: 'The mobile app calls Supabase directly; the linked source has no separate application server.' } },
  { code: 'https://github.com/ConfusedRebel/CultureClub', title: 'CultureClub', year: '2024–2025', category: 'UNIVERSITY PROJECT', technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Postman'], description: 'A university backend project implementing a layered REST API and relational database schema.', detail: 'Built with Java 17 and Spring Boot over a MySQL cclub schema, accompanied by a PlantUML class diagram and Postman API test collection.', highlights: ['Layered Spring Boot REST API', 'MySQL relational schema (JPA)', 'Postman collection & PlantUML diagram'], architecture: { nodes: [
    { layer: 'Client', title: 'Frontend', detail: 'Source not in linked repository' },
    { layer: 'Backend', title: 'Spring Boot REST API', detail: 'Controllers → services → JPA' },
    { layer: 'Database', title: 'MySQL', detail: 'cclub schema' },
  ], connections: ['HTTP requests and responses', 'JPA queries'], note: 'The linked repository verifies the backend API and MySQL database schema; the frontend source is not included.' } },
];
export const resumes = [
  { language: 'English', lang: 'en', path: 'resume/Francisco-Bottazzini-Resume-EN.pdf' },
  { language: 'Español', lang: 'es', path: 'resume/Francisco-Bottazzini-CV-ES.pdf' },
];
