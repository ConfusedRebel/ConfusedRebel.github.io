"""Regenerate the two light, text-selectable PDFs: python scripts/build-resumes.py.
Requires reportlab. Source facts follow docs/brief.md; no deferred social links.
"""
from pathlib import Path
import subprocess
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'resume'
OUT.mkdir(parents=True, exist_ok=True)
# Use installed fonts when available, or PDF's built-in Helvetica elsewhere.
try:
    for name, query in [('Body', 'sans'), ('Bold', 'sans:style=Bold')]:
        path = subprocess.check_output(['fc-match', '-f', '%{file}', query], text=True)
        pdfmetrics.registerFont(TTFont(name, path))
    BODY, BOLD = 'Body', 'Bold'
except (FileNotFoundError, subprocess.CalledProcessError):
    BODY, BOLD = 'Helvetica', 'Helvetica-Bold'

CONTENT = {
'en': {
 'file': 'Francisco-Bottazzini-Resume-EN.pdf',
 'title': 'Software Engineering Student · Development, Infrastructure & Cybersecurity',
 'profile_title': 'PROFILE',
 'profile': 'Software Engineering student at UADE (Jan 2022 – Dec 2027 expected; 36/49 courses completed, 74%). Combines plant IT and server rack support at IFF with software projects across backend APIs, mobile apps, and numerical tools, alongside hands-on Linux/BSD infrastructure and cybersecurity fundamentals.',
 'projects_title': 'SELECTED PROJECTS',
 'projects': [
  ('Numerical Modeling & Simulation Lab', '2026', 'Python · Streamlit · NumPy · SymPy · Pandas · Plotly · Pytest', 'Educational numerical methods app (root finding, interpolation, differentiation, integration) with modular architecture, safe non-eval() SymPy parsing, interactive Plotly charts, and 11 pytest suites in CI.'),
  ('App Statistics', '2026', 'Python · NumPy · SciPy · Textual · REST APIs', 'Applied statistics application for estimation, confidence intervals, sample-size calculations, and hypothesis testing, pairing a Textual TUI with a bounded local HTTP JSON API.'),
  ('App Claw', '2025', 'TypeScript · React Native · Supabase', 'Mobile application for padel and tennis tournaments with authentication, validated forms, player and team management, and match tracking against Supabase.'),
  ('CultureClub', '2024–2025', 'Java · Spring Boot · MySQL · REST APIs · Postman', 'University backend project implementing a layered Spring Boot REST API over a relational MySQL schema with JPA, PlantUML class diagram, and Postman test collection.'),
 ],
 'skills_title': 'TECHNICAL SKILLS',
 'skills': [
  ('Languages & frameworks', 'Java, Spring Boot, Python, JavaScript, TypeScript, React, React Native'),
  ('Databases & data', 'SQL, MySQL, MongoDB, Redis, NumPy, Pandas'),
  ('Systems, infrastructure & tools', 'Linux, Windows, BSD, Docker, BSD Jails, Virtualization, NAS, Git, GitHub, Postman, REST APIs'),
  ('Networking, security & engineering', 'Networking fundamentals, information security fundamentals, software engineering & UML, data structures & algorithms, software testing'),
 ],
 'experience_title': 'PROFESSIONAL EXPERIENCE',
 'role': 'Digital Technology Support Intern - Plant Team',
 'dates': 'March 2026 - Present',
 'experience': [
  'Provide technical support to plant users, performing hardware and software diagnostics and resolving support tickets.',
  'Install, configure, and maintain enterprise operating systems and plant workstations.',
  'Manage and maintain server racks alongside IT equipment lifecycle and inventory tracking.',
  'Compile operational reporting and technical tracking records using Excel.',
 ],
 'education_title': 'EDUCATION', 'degree': 'Software Engineering', 'edu_dates': 'Jan 2022 - Dec 2027 (Expected)',
 'education': 'Universidad Argentina de la Empresa (UADE) · 36/49 courses completed (74%).',
 'languages_title': 'LANGUAGES', 'languages': 'Spanish - Native   |   English - Advanced',
},
'es': {
 'file': 'Francisco-Bottazzini-CV-ES.pdf',
 'title': 'Estudiante de Ingeniería Informática · Desarrollo, Infraestructura y Ciberseguridad',
 'profile_title': 'PERFIL',
 'profile': 'Estudiante de Ingeniería Informática en UADE (ene 2022 – dic 2027 estimado; 36/49 materias aprobadas, 74%). Combina soporte IT y mantenimiento de racks de servidores en planta en IFF con proyectos de APIs backend, aplicaciones móviles y cálculo numérico, junto con infraestructura Linux/BSD y fundamentos de ciberseguridad.',
 'projects_title': 'PROYECTOS DESTACADOS',
 'projects': [
  ('Laboratorio de Modelado y Simulación', '2026', 'Python · Streamlit · NumPy · SymPy · Pandas · Plotly · Pytest', 'Aplicación educativa de métodos numéricos (raíces, interpolación, derivación e integración) con arquitectura modular, análisis seguro con SymPy sin eval(), gráficos Plotly y 11 módulos pytest en CI.'),
  ('App Statistics', '2026', 'Python · NumPy · SciPy · Textual · API REST', 'Aplicación de estadística aplicada para estimación, intervalos de confianza, tamaño de muestra y pruebas de hipótesis, con interfaz de terminal Textual y API HTTP JSON local acotada.'),
  ('App Claw', '2025', 'TypeScript · React Native · Supabase', 'Aplicación móvil para torneos de pádel y tenis con autenticación, validación de formularios, gestión de jugadores y equipos y seguimiento de partidos con Supabase.'),
  ('CultureClub', '2024–2025', 'Java · Spring Boot · MySQL · API REST · Postman', 'Proyecto universitario de backend que implementa una API REST en capas con Spring Boot sobre MySQL con JPA, diagrama de clases PlantUML y colección Postman.'),
 ],
 'skills_title': 'HABILIDADES TÉCNICAS',
 'skills': [
  ('Lenguajes y frameworks', 'Java, Spring Boot, Python, JavaScript, TypeScript, React, React Native'),
  ('Bases de datos y datos', 'SQL, MySQL, MongoDB, Redis, NumPy, Pandas'),
  ('Sistemas, infraestructura y herramientas', 'Linux, Windows, BSD, Docker, BSD Jails, Virtualización, NAS, Git, GitHub, Postman, API REST'),
  ('Redes, seguridad e ingeniería', 'Fundamentos de redes, fundamentos de seguridad informática, ingeniería de software y UML, estructuras de datos y algoritmos, pruebas de software'),
 ],
 'experience_title': 'EXPERIENCIA PROFESIONAL',
 'role': 'Pasante de Soporte de Tecnología Digital - Equipo de Planta',
 'dates': 'Marzo 2026 - Actualidad',
 'experience': [
  'Soporte técnico a usuarios de planta, diagnóstico de fallas de hardware y software y resolución de tickets.',
  'Instalación, configuración y mantenimiento de sistemas operativos empresariales y puestos de trabajo en planta.',
  'Gestión y mantenimiento de racks de servidores junto con el ciclo de vida y control de inventario de equipamiento IT.',
  'Elaboración de reportes operativos y registros de seguimiento técnico mediante Excel.',
 ],
 'education_title': 'EDUCACIÓN', 'degree': 'Ingeniería Informática', 'edu_dates': 'Ene 2022 - Dic 2027 (Estimado)',
 'education': 'Universidad Argentina de la Empresa (UADE) · 36/49 materias aprobadas (74%).',
 'languages_title': 'IDIOMAS', 'languages': 'Español - Nativo   |   Inglés - Avanzado',
}}

INK = colors.HexColor('#253c34')
MUTED = colors.HexColor('#526158')
ACCENT = colors.HexColor('#35634e')
WIDTH, HEIGHT = A4
LEFT = 43
TEXT_WIDTH = WIDTH - LEFT * 2

for lang, data in CONTENT.items():
    c = canvas.Canvas(str(OUT / data['file']), pagesize=A4)
    c.setTitle(f"Francisco Bottazzini - {'Résumé' if lang == 'en' else 'Currículum'}")
    c.setAuthor('Francisco Bottazzini')
    c.setSubject(data['title'])
    c.setCreator('Francisco Bottazzini Portfolio')
    c.setFillColor(colors.white)
    c.rect(0, 0, WIDTH, HEIGHT, fill=1, stroke=0)
    y = HEIGHT - 42
    def text(value, size=9, font=BODY, color=INK, leading=13, after=5):
        global y
        style = ParagraphStyle('body', fontName=font, fontSize=size, leading=leading, textColor=color)
        p = Paragraph(value, style)
        _, height = p.wrap(TEXT_WIDTH, HEIGHT)
        p.drawOn(c, LEFT, y-height)
        y -= height + after
    def heading(value):
        global y
        y -= 8
        text(value, 8, BOLD, ACCENT, 11, 6)
        c.setStrokeColor(colors.HexColor('#d8dfd8'))
        c.setLineWidth(.5)
        c.line(LEFT, y+3, WIDTH-LEFT, y+3)
        y -= 5
    def entry(title, date):
        global y
        # Separate date line preserves readable titles and extraction order in both languages.
        text(title, 9.4, BOLD, leading=13, after=1)
        text(date, 8, color=MUTED, leading=11, after=4)
    text('Francisco Bottazzini', 25, BOLD, leading=30, after=5)
    text(data['title'], 10.2, color=ACCENT, leading=14, after=7)
    text('Buenos Aires, Argentina · <link href="mailto:franbottazzini@hotmail.com">franbottazzini@hotmail.com</link> · <link href="https://github.com/ConfusedRebel">github.com/ConfusedRebel</link> · <link href="https://www.linkedin.com/in/franbottazzini">linkedin.com/in/franbottazzini</link>', 8.2, color=MUTED, leading=12, after=3)
    heading(data['profile_title'])
    text(data['profile'], 9, leading=13)
    heading(data['projects_title'])
    for title, year, stack, description in data['projects']:
        text(f'{title} · {year}', 9.4, BOLD, leading=13, after=2)
        text(stack, 7.8, color=ACCENT, leading=11, after=3)
        text(description, 8.6, leading=12.2, after=8)
    heading(data['skills_title'])
    for label, value in data['skills']:
        text(f'<font name="{BOLD}">{label}:</font> {value}', 8.6, leading=12.3, after=3)
    heading(data['experience_title'])
    text(data['role'], 9.3, BOLD, leading=13, after=2)
    text('International Flavors & Fragrances (IFF) · ' + data['dates'], 8, color=MUTED, leading=11, after=5)
    for bullet in data['experience']:
        text('• ' + bullet, 8.5, leading=12, after=2)
    heading(data['education_title'])
    text(data['degree'] + ' · ' + data['edu_dates'], 9, BOLD, leading=13, after=3)
    text(data['education'], 8.6, leading=12, after=2)
    heading(data['languages_title'])
    text(data['languages'], 8.6, leading=12, after=0)
    if y < 30:
        raise ValueError(f'{lang} content extends below the page margin: y={y}')
    c.save()
    print(f'{data["file"]}: one page, remaining bottom margin {y:.1f} pt')
