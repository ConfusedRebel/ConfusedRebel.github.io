import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Check, Code2, Database, Download, GraduationCap, MapPin, MoonStar, Route, Sparkles, Sun, Terminal, BriefcaseBusiness, Github, Linkedin, X } from 'lucide-react';
import { resumes, sections, type Project, type ProjectArchitecture as Architecture } from './data';
import { translations, resolveLanguage, type Language } from './translations';
import { Technology } from './components/Technology';
import { externalLinks, resolveTheme, type Theme } from './preferences';
import { ChaltenLandscape, ChubutLandscape, IberaLandscape, MendozaLandscape, MisionesLandscape, PampaLandscape } from './components/Landscapes';

const CopyContext = createContext(translations.en);
function useCopy() { return useContext(CopyContext); }

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => resolveTheme(document.documentElement.dataset.theme ?? null, matchMedia('(prefers-color-scheme: dark)').matches));
  const manual = useRef(false);
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    try { manual.current = ['light', 'dark'].includes(localStorage.getItem('portfolio-theme') ?? ''); } catch { /* System preference remains available when storage is blocked. */ }
    const onChange = () => { if (!manual.current) setTheme(media.matches ? 'dark' : 'light'); };
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'portfolio-theme' || event.key === null) {
        manual.current = event.newValue === 'dark' || event.newValue === 'light';
        setTheme(resolveTheme(event.newValue, media.matches));
      }
    };
    media.addEventListener('change', onChange);
    window.addEventListener('storage', onStorage);
    return () => { media.removeEventListener('change', onChange); window.removeEventListener('storage', onStorage); };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#14251f' : '#f8f9f3');
  }, [theme]);
  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    manual.current = true;
    setTheme(next);
    try { localStorage.setItem('portfolio-theme', next); } catch { /* Theme still works for this visit. */ }
  }
  return { theme, toggle };
}
function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.innerHeight * .35;
      const current = sections.filter(({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= marker).at(-1);
      setActive(current?.id ?? 'home');
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return active;
}
function useLandscapeParallax() {
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const scenes = [...document.querySelectorAll<HTMLElement>('.portfolio-section')];
    let frame = 0;
    const update = () => {
      frame = 0;
      for (const scene of scenes) {
        const bounds = scene.getBoundingClientRect();
        const shift = media.matches ? 0 : Math.max(-72, Math.min(72, (window.innerHeight / 2 - bounds.top - bounds.height / 2) * .16));
        scene.style.setProperty('--scene-shift', `${shift}px`);
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      media.removeEventListener('change', schedule);
      scenes.forEach(scene => scene.style.removeProperty('--scene-shift'));
    };
  }, []);
}
function JourneyIndicator({ active }: { active: string }) {
  const { sections, ui } = useCopy();
  return <nav className="journey-indicator" aria-label={ui.navigation}><div className="journey-track">{sections.map(section => <a key={section.id} className={active === section.id ? 'active' : ''} href={`#${section.id}`} aria-label={section.label} aria-current={active === section.id ? 'location' : undefined}><span className="journey-tooltip">{section.label}</span><span className="journey-dot"/></a>)}</div></nav>;
}
function SectionHeading({ title, description }: { title: string; description?: string }) {
  return <div className="section-heading"><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
function Section({ id, className, children }: { id: string; className: string; children: ReactNode }) {
  const { sections } = useCopy();
  return <section id={id} className={`portfolio-section ${className}`} aria-label={sections.find(section => section.id === id)?.label}><svg className="landscape-bridge" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 65Q180 12 380 55T790 48T1140 45T1440 60V100H0Z" fill="currentColor"/></svg>{children}</section>;
}
function ResumeLinks() {
  const { ui } = useCopy();
  return <div id="resume" className="resume-downloads"><div className="resume-options">{resumes.map(resume => <a key={resume.lang} className="resume-link" href={`${import.meta.env.BASE_URL}${resume.path}`} download hrefLang={resume.lang} lang={resume.lang} aria-label={resume.lang === 'en' ? ui.downloadEn : ui.downloadEs}><Download size={18}/>{resume.lang === 'en' ? 'Download Resume' : 'Descargar CV'}</a>)}</div></div>;
}
function ProjectLinks({ project }: { project: Project }) {
  const { ui } = useCopy();
  return <div className="project-links">{externalLinks(project).map(link => <a className="code-button" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label === 'View Code' ? ui.code : ui.demo}<ArrowUpRight size={14}/></a>)}</div>;
}
function ProjectArchitecture({ architecture }: { architecture: Architecture }) {
  const { ui } = useCopy();
  return <figure className="project-architecture">
    <figcaption>{ui.architectureTitle}</figcaption>
    <div className="architecture-flow">{architecture.nodes.flatMap((node, index) => [
      <div className="architecture-node" key={`node-${index}`}>
        <span className="architecture-layer">{node.layer}</span>
        <strong>{node.title}</strong>
        <span>{node.detail}</span>
      </div>,
      ...(index < architecture.connections.length ? [<div className="architecture-connection" key={`connection-${index}`}><ArrowRight size={18} aria-hidden="true"/><span>{architecture.connections[index]}</span></div>] : []),
    ])}</div>
    <p className="architecture-note">{architecture.note}</p>
  </figure>;
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ui, summaries } = useCopy();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const Icon = [Sparkles, Terminal, Code2, Database][index];
  useEffect(() => {
    if (!open) return;
    const element = dialog.current!;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = previousOverflow; };
  }, [open]);
  return <article className="project-card">
    <div className="project-card-top"><span className="project-icon"><Icon size={23} strokeWidth={1.4}/></span><span className="project-year">{project.year}</span></div>
    <p className="project-category">{project.category}</p><h3><button className="project-card-trigger" onClick={() => setOpen(true)} aria-haspopup="dialog">{project.title}</button></h3>
    <p className="project-description">{summaries[index]}</p>
    <ul className="technology-list">{project.technologies.map(technology => <li key={technology}><Technology name={technology}/></li>)}</ul>
    <div className="project-card-footer"><ProjectLinks project={project}/><span className="project-more" aria-hidden="true">{ui.details}<ArrowRight size={14}/></span></div>
    <dialog ref={dialog} className="project-dialog" aria-labelledby={`project-title-${index}`} onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="project-page">
        <header className="project-page-header"><span>{project.category} · {project.year}</span><button type="button" className="project-close" onClick={() => dialog.current?.close()} aria-label={ui.closeProject}><X size={15}/><span>{ui.close}</span></button></header>
        <h2 id={`project-title-${index}`} tabIndex={-1} autoFocus>{project.title}</h2>
        {open && project.media && <figure className="project-media">
          {project.media.kind === 'video'
            ? <video controls playsInline preload="none" poster={`${import.meta.env.BASE_URL}${project.media.poster}`} aria-label={project.media.alt}><source src={`${import.meta.env.BASE_URL}${project.media.src}`} type="video/mp4"/></video>
            : <img src={`${import.meta.env.BASE_URL}${project.media.src}`} alt={project.media.alt} decoding="async"/>}
        </figure>}
        <div className="project-full-description"><p>{project.description}</p><p>{project.detail}</p></div>
        {project.architecture && <ProjectArchitecture architecture={project.architecture}/>}
        <ul className="project-highlights">{project.highlights.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul>
        <ul className="technology-list">{project.technologies.map(technology => <li key={technology}><Technology name={technology}/></li>)}</ul>
        <ProjectLinks project={project}/>
      </div>
    </dialog>
  </article>;
}
export default function App() {
  const [language, setLanguage] = useState<Language>(() => { try { return resolveLanguage(localStorage.getItem('portfolio-language')); } catch { return 'en'; } });
  const copy = translations[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${copy.profile.name} — ${copy.profile.title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.profile.introduction);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.profile.introduction);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'es' ? 'es_AR' : 'en_US');
    try { localStorage.setItem('portfolio-language', language); } catch { /* Switching still works without browser storage. */ }
  }, [language, copy]);
  return <CopyContext.Provider value={copy}><Portfolio language={language} setLanguage={setLanguage}/></CopyContext.Provider>;
}
function Portfolio({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void })  {
  const { profile, projects, skills, experience, education, ui } = useCopy();
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  useLandscapeParallax();
  const skillIcons = [Code2, Database, Terminal, Route];
  const activeResume = resumes.find(resume => resume.lang === language) ?? resumes[0];
  return <>
    <a className="skip-link" href="#main">{ui.skip}</a>
    <a className="corner-mark" href="#home" aria-label={ui.back}>
      <svg viewBox="0 0 104 56" aria-hidden="true" focusable="false"><defs><mask id="cr-stripes"><rect width="104" height="56" fill="white"/>{[7,14,21,28,35,42,49].map(y => <rect key={y} y={y} width="104" height="2.6" fill="black"/>)}</mask></defs><g mask="url(#cr-stripes)" fill="currentColor"><path d="M46 0H15L0 12V44L15 56H46V39H33V43H21L15 38V18L21 13H33V17H46Z"/><path fillRule="evenodd" d="M54 0H88L102 11V27L91 35L104 56H86L73 36H69V44H75V56H51V44H55V12H51V0ZM69 12V24H84L88 21V15L84 12Z"/></g></svg>
    </a>
    <div className="top-controls"><div className="language-switch" role="group" aria-label={ui.language}><button lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button><button lang="es" aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>Español</button></div><button className="top-theme" onClick={toggle} aria-label={theme === 'light' ? ui.switchDark : ui.switchLight}>{theme === 'light' ? <Sun size={18}/> : <MoonStar size={18}/>}<span>{theme === 'light' ? ui.dark : ui.light}</span></button></div>
    <JourneyIndicator active={active}/>
    <main id="main" tabIndex={-1}>
      <Section id="home" className="hero">
        <div className="container hero-content"><div className="hero-eyebrow"><span/> {ui.eyebrow}</div><h1>{ui.greeting}<span>.</span></h1><p className="hero-title">{profile.title}</p><p className="hero-introduction">{profile.introduction}</p><p className="hero-location"><MapPin size={14}/>{ui.based} {profile.location}.</p><div className="hero-buttons"><a className="button button-primary" href="#projects">{ui.explore}<ArrowUpRight size={17}/></a><a className="button button-secondary" href="#contact">{ui.contact}<ArrowRight size={17}/></a><a className="button button-secondary" href={`${import.meta.env.BASE_URL}${activeResume.path}`} download hrefLang={activeResume.lang} lang={activeResume.lang} aria-label={language === 'en' ? ui.downloadEn : ui.downloadEs}><Download size={16}/>{ui.resume}</a></div></div>
        <MisionesLandscape/>
        
      </Section>
      <Section id="about" className="about-section">
        <div className="container section-content"><SectionHeading title={ui.about}/><div className="about-grid"><div><div className="about-copy">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div><div className="about-side"><ul className="strengths">{profile.strengths.map(item => <li key={item}><span/>{item}</li>)}</ul><div className="languages">{profile.languages.map(language => <div key={language.name}><span>{language.name}</span><span>{language.level}</span></div>)}</div></div></div></div>
        <IberaLandscape/>
      </Section>
      <Section id="projects" className="projects-section">
        <div className="container section-content"><div className="projects-heading"><SectionHeading title={ui.work} description={ui.workDescription}/></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index}/>)}</div></div><ChubutLandscape/>
      </Section>
      <Section id="skills" className="skills-section">
        <div className="container section-content"><SectionHeading title={ui.skills} description={ui.skillsDescription}/><div className="skills-grid">{skills.map((category, index) => { const Icon = skillIcons[index]; return <div className="skill-group" key={category.title}><Icon size={21} strokeWidth={1.5}/><h3>{category.title}</h3><ul>{category.items.map(item => <li key={item}>{index === 3 ? item : <Technology name={item}/>}</li>)}</ul></div>; })}</div></div><MendozaLandscape/>
      </Section>
      <Section id="experience" className="experience-section">
        <div className="container section-content"><SectionHeading title={ui.journey} description={ui.journeyDescription}/><div className="experience-grid"><div className="timeline"><article className="timeline-entry"><span className="timeline-icon"><BriefcaseBusiness size={18}/></span><p className="timeline-date">{experience.dates}<span className="current-badge">{ui.current}</span></p><h3>{experience.role}</h3><p className="timeline-organization">{experience.company}</p><ul>{experience.details.map(detail => <li key={detail}>{detail}</li>)}</ul></article><article className="timeline-entry"><span className="timeline-icon"><GraduationCap size={19}/></span><p className="timeline-date">{education.dates}</p><h3>{education.degree}</h3><p className="timeline-organization">{education.school}</p><p>{education.status}</p><p>{education.description}</p></article></div></div></div><PampaLandscape/>
      </Section>
      <Section id="contact" className="contact-section">
        <div className="container section-content"><SectionHeading title={language === 'en' ? 'Contact' : 'Contacto'}/><div className="contact-content"><h2>{ui.contactTitle}<br/><span>{ui.contactTogether}</span></h2><p>{ui.contactDescription}</p><p className="contact-invite">{ui.invite}</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22}/></a><div className="contact-socials">{profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/>GitHub</a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/>LinkedIn</a>}</div><span className="contact-location"><MapPin size={13}/>{profile.location}</span></div></div><ChaltenLandscape/>
        <div className="container contact-downloads"><ResumeLinks/></div>
      </Section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><div><a href="#home" className="footer-name">{profile.name}<span>.</span></a><p>{profile.title}</p></div><div className="footer-right"><p>{ui.built}</p><p>© {new Date().getFullYear()} Francisco Bottazzini</p></div></div></footer>
  </>;
}
