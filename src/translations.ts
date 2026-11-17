import { profile, projects, skills, experience, education, sections } from './data.ts';
export type Language = 'en' | 'es';
export function resolveLanguage(value: string | null): Language { return value === 'es' ? 'es' : 'en'; }
const en = {
  profile, projects, skills, experience, education, sections,
  ui: {
    skip: 'Skip to content', back: 'CR — Back to introduction', navigation: 'Section navigation', language: 'Website language',
    dark: 'Dark mode', light: 'Light mode', switchDark: 'Switch to dark mode', switchLight: 'Switch to light mode',
    eyebrow: 'SOFTWARE · INFRASTRUCTURE · CYBERSECURITY', greeting: 'Hi, I’m Francisco', based: 'Based in', explore: 'Explore My Projects', contact: 'Get in Touch',
    about: 'About', work: 'Projects', workDescription: 'A selection of verified projects spanning software development, APIs, automated testing, and system architecture.',
    skills: 'Skills', skillsDescription: 'Technologies, operating systems, and infrastructure tools applied across academic engineering, systems practice, and plant IT work.',
    journey: 'Experience', journeyDescription: 'Plant IT and server rack operations combined with software engineering coursework and hands-on technical development.', current: 'CURRENT',
    contactTitle: 'Let’s Build Something', contactTogether: 'Together.', contactDescription: "I'm interested in opportunities in software development, infrastructure, and cybersecurity where I can contribute, learn, and build reliable systems.", invite: 'Feel free to reach out.',
    resume: 'Résumé', choose: 'PDF · Choose your language', built: 'Built with React & TypeScript.',
    close: 'Close', closeProject: 'Close project details', videoPlaceholder: 'Space reserved for the project video', details: 'View details', less: 'Hide details', code: 'View Code', demo: 'Live Demo', architectureTitle: 'How the pieces connect',
    downloadEn: 'Download résumé in English (PDF)', downloadEs: 'Download résumé in Spanish (PDF)',
  },
  summaries: [
    'An interactive application for learning numerical methods with modular architecture and automated testing. Features safe SymPy expression parsing without eval() and GitHub Actions CI.',
    'An applied statistics tool for estimation, confidence intervals, and hypothesis testing. Pairs a Textual terminal interface with a bounded local HTTP JSON API backed by unittest suites.',
    'A TypeScript and React Native mobile app for organizing padel and tennis tournaments. Manages players, teams, and matches directly through Supabase.',
    'A university backend project implementing a Spring Boot REST API and MySQL database schema. Includes JPA persistence, a PlantUML diagram, and a Postman test collection.',
  ],
};
const es: typeof en = {
  profile: { ...profile,
    title: 'Estudiante de Ingeniería Informática · Desarrollo, Infraestructura y Ciberseguridad',
    introduction: 'Desarrollo software práctico y administro sistemas confiables, combinando ingeniería informática con experiencia en infraestructura y fundamentos de ciberseguridad.',
    about: [
      'Soy estudiante de Ingeniería Informática en la Universidad Argentina de la Empresa (UADE) (ene 2022 – dic 2027 estimado), con 36 de 49 materias aprobadas (74%).',
      'Mi experiencia combina el soporte IT e infraestructura en planta en IFF —incluyendo mantenimiento de racks de servidores, configuración de sistemas operativos empresariales y diagnóstico técnico— con proyectos de APIs backend, aplicaciones móviles y cálculo numérico.',
      'Me interesa entender cómo interactúan en la práctica el software, los sistemas operativos y las redes, desde entornos Linux y BSD con contenedores y virtualización hasta código de aplicación bien estructurado.',
      'En cada proyecto y tarea operativa priorizo la claridad, la confiabilidad y sólidos fundamentos de seguridad para construir sistemas mantenibles y verificables.',
    ],
    strengths: ['Pensamiento analítico', 'Resolución de problemas', 'Adaptabilidad', 'Colaboración'],
    languages: [{ name: 'Español', level: 'Nativo' }, { name: 'Inglés', level: 'Avanzado' }],
  },
  projects: projects.map((p, i) => ({ ...p,
    media: p.media ? { ...p.media, alt: [
      'Ejemplo de Newton–Raphson: datos, raíz calculada y tangentes sucesivas',
      'App Statistics recalcula un intervalo de confianza en su interfaz de terminal',
    ][i] } : undefined,
    architecture: p.architecture ? (i === 2 ? {
      nodes: [
        { layer: 'Frontend', title: 'Expo / React Native', detail: 'Pantallas y proveedores de torneos' },
        { layer: 'Servicio backend', title: 'Supabase', detail: 'Autenticación y API de tablas' },
        { layer: 'Base de datos', title: 'PostgreSQL', detail: 'Torneos, equipos y partidos' },
      ],
      connections: ['Solicitudes del cliente Supabase', 'Lecturas y escrituras'],
      note: 'La aplicación móvil llama directamente a Supabase; el código enlazado no incluye un servidor de aplicación separado.',
    } : {
      nodes: [
        { layer: 'Cliente', title: 'Frontend', detail: 'Código no incluido en el repositorio enlazado' },
        { layer: 'Backend', title: 'API REST de Spring Boot', detail: 'Controladores → servicios → JPA' },
        { layer: 'Base de datos', title: 'MySQL', detail: 'Esquema cclub' },
      ],
      connections: ['Solicitudes y respuestas HTTP', 'Consultas JPA'],
      note: 'El repositorio enlazado verifica la API backend y el esquema de base de datos MySQL; el código del frontend no está incluido.',
    }) : undefined,
    title: ['Laboratorio de Modelado y Simulación', 'App Statistics', 'App Claw', 'CultureClub'][i],
    category: ['CÁLCULO NUMÉRICO', 'ANÁLISIS ESTADÍSTICO', 'DESARROLLO MÓVIL', 'PROYECTO UNIVERSITARIO'][i],
    description: [
      'Aplicación educativa para explorar métodos numéricos: búsqueda de raíces, interpolación, derivación e integración.',
      'Aplicación de estadística aplicada para estimación, intervalos de confianza, cálculo del tamaño de muestra y pruebas de hipótesis.',
      'Aplicación móvil en TypeScript y React Native para organizar torneos de pádel y tenis.',
      'Proyecto universitario de backend que implementa una API REST en capas y un esquema relacional.',
    ][i],
    detail: [
      'Construida con arquitectura modular entre núcleo y métodos, análisis seguro de expresiones con SymPy sin eval(), gráficos interactivos en Plotly, 11 módulos pytest y CI con GitHub Actions.',
      'Combina una interfaz de terminal Textual con una API HTTP JSON local en Python acotada en 127.0.0.1, respaldada por pruebas unittest de API y TUI asíncrona.',
      'Permite gestionar flujos de autenticación, formularios validados, jugadores, equipos y seguimiento de partidos directamente contra Supabase.',
      'Desarrollado con Java 17 y Spring Boot sobre el esquema cclub de MySQL, acompañado por un diagrama de clases PlantUML y colección de pruebas en Postman.',
    ][i],
    highlights: [
      ['Arquitectura modular de software', 'Análisis seguro con SymPy sin eval()', '11 módulos pytest y CI en GitHub Actions', 'Visualizaciones interactivas con Plotly'],
      ['Dominio estadístico compartido', 'Interfaz de terminal Textual', 'API HTTP JSON local acotada (127.0.0.1)', 'Pruebas unittest de API y TUI asíncrona'],
      ['App en TypeScript y React Native', 'Autenticación y validación de formularios', 'Gestión de torneos y partidos', 'Integración directa con Supabase'],
      ['API REST en capas con Spring Boot', 'Esquema relacional MySQL (JPA)', 'Colección Postman y diagrama PlantUML'],
    ][i],
  })),
  skills: skills.map((s, i) => ({ ...s,
    title: ['Lenguajes y frameworks', 'Bases de datos y datos', 'Sistemas, infraestructura y herramientas', 'Redes, seguridad e ingeniería'][i],
    items: i === 3
      ? ['Fundamentos de redes', 'Fundamentos de seguridad informática', 'Ingeniería de software y UML', 'Estructuras de datos y algoritmos', 'Análisis de datos', 'Pruebas de software']
      : i === 2
        ? s.items.map(item => (item === 'Virtualization' ? 'Virtualización' : item))
        : s.items,
  })),
  experience: { ...experience,
    role: 'Pasante de Soporte de Tecnología Digital — Equipo de Planta', dates: 'Marzo de 2026 — Actualidad',
    details: [
      'Soporte técnico a usuarios de planta, diagnóstico de fallas de hardware y software y resolución de tickets.',
      'Instalación, configuración y mantenimiento de sistemas operativos empresariales y puestos de trabajo en planta.',
      'Gestión y mantenimiento de racks de servidores junto con el ciclo de vida y control de inventario de equipamiento IT.',
      'Elaboración de reportes operativos y registros de seguimiento técnico mediante Excel.',
    ],
  },
  education: { ...education, degree: 'Ingeniería Informática', dates: 'Ene 2022 — Dic 2027 (estimado)', status: '36/49 materias aprobadas (74%).', description: 'Formación en desarrollo de software, sistemas operativos, algoritmos, redes y fundamentos de seguridad informática.' },
  sections: sections.map((s, i) => ({ ...s, label: ['Introducción', 'Sobre mí', 'Proyectos', 'Tecnologías', 'Experiencia', 'Contacto'][i] })),
  ui: {
    skip: 'Saltar al contenido', back: 'CR — Volver al inicio', navigation: 'Navegación por secciones', language: 'Idioma del sitio',
    dark: 'Modo oscuro', light: 'Modo claro', switchDark: 'Cambiar a modo oscuro', switchLight: 'Cambiar a modo claro',
    eyebrow: 'SOFTWARE · INFRAESTRUCTURA · CIBERSEGURIDAD', greeting: 'Hola, soy Francisco', based: 'Desde', explore: 'Ver mis proyectos', contact: 'Contactame',
    about: 'Sobre mí', work: 'Proyectos', workDescription: 'Una selección de proyectos verificados que abarcan desarrollo de software, APIs, pruebas automatizadas y arquitectura de sistemas.',
    skills: 'Tecnologías', skillsDescription: 'Tecnologías, sistemas operativos y herramientas de infraestructura aplicadas en formación académica, práctica de sistemas y soporte IT en planta.',
    journey: 'Experiencia', journeyDescription: 'Operación IT en planta y gestión de racks de servidores combinadas con formación en ingeniería informática y desarrollo práctico.', current: 'ACTUAL',
    contactTitle: 'Construyamos algo', contactTogether: 'juntos.', contactDescription: 'Me interesan oportunidades en desarrollo de software, infraestructura y ciberseguridad donde pueda aportar, aprender y construir sistemas confiables.', invite: 'No dudes en escribirme.',
    resume: 'Currículum', choose: 'PDF · Elegí el idioma', built: 'Desarrollado con React y TypeScript.',
    close: 'Cerrar', closeProject: 'Cerrar detalles del proyecto', videoPlaceholder: 'Espacio reservado para el video del proyecto', details: 'Ver detalles', less: 'Ocultar detalles', code: 'Ver código', demo: 'Ver demo', architectureTitle: 'Cómo se conectan las partes',
    downloadEn: 'Descargar currículum en inglés (PDF)', downloadEs: 'Descargar currículum en español (PDF)',
  },
  summaries: [
    'Aplicación interactiva para aprender métodos numéricos con arquitectura modular y pruebas automatizadas. Incluye análisis seguro de expresiones con SymPy sin eval() y CI en GitHub Actions.',
    'Herramienta de estadística aplicada para estimación, intervalos de confianza y pruebas de hipótesis. Combina una interfaz de terminal Textual con una API HTTP JSON local acotada y probada con unittest.',
    'Aplicación móvil en TypeScript y React Native para organizar torneos de pádel y tenis. Gestiona jugadores, equipos y partidos directamente con Supabase.',
    'Proyecto universitario de backend que implementa una API REST en Spring Boot y un esquema relacional en MySQL. Incluye persistencia JPA, diagrama PlantUML y colección de pruebas en Postman.',
  ],
};
export const translations = { en, es };
