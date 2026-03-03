export type Lang = 'es' | 'en';

export const translations = {
  es: {
    // Page
    'page.skip': 'Saltar al contenido',

    // Navbar
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.certificates': 'Certificados',
    'nav.contact': 'Contacto',
    'nav.menu.open': 'Abrir menú de navegación',
    'nav.lang.toggle': 'EN',
    'nav.lang.toggle.aria': 'Cambiar idioma a inglés',

    // Hero
    'hero.available': 'Disponible para trabajar',
    'hero.role': 'Ingeniero en Computación & Informática',
    'hero.greeting': 'Hola, soy',
    'hero.bio':
      'Developer enfocado en sistemas backend con <strong style="color: var(--color-text); font-weight: 600;">Python</strong>, <strong style="color: var(--color-text); font-weight: 600;">Docker</strong> y <strong style="color: var(--color-text); font-weight: 600;">AWS</strong> — actualmente aprendiendo <strong style="color: var(--color-text); font-weight: 600;">Ciberseguridad</strong>, <strong style="color: var(--color-text); font-weight: 600;">Escalabilidad Cloud</strong> y <strong style="color: var(--color-text); font-weight: 600;">DevOps</strong>.',
    'hero.education': 'Egresado · Universidad Andrés Bello',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contacto',
    'hero.cta.cv': 'Ver CV',
    'hero.photo.alt': 'Fotografía de Benjamín Núñez',

    // About
    'about.tag': 'Sobre mí',
    'about.headline':
      'Aprender no es un hábito,<br/><span style="color: var(--color-accent);">es la forma en que trabajo.</span>',
    'about.p1':
      'Soy un desarrollador backend que no se queda quieto. Me nutro de documentación oficial, cursos y, sobre todo, de construir proyectos propios donde puedo experimentar sin red de seguridad. Cada problema nuevo es una excusa para entender mejor cómo funcionan las cosas por dentro.',
    'about.p2':
      'Mi foco principal está en APIs y sistemas backend con Python, Docker y AWS — pero cada vez me adentro más en territorios que se conectan directamente con ese trabajo: <strong style="color: var(--color-text); font-weight: 600;">DevOps</strong>, <strong style="color: var(--color-text); font-weight: 600;">optimización de bases de datos</strong>, <strong style="color: var(--color-text); font-weight: 600;">ciberseguridad</strong> y <strong style="color: var(--color-text); font-weight: 600;">redes</strong>. No para ser experto en todo, sino para tomar mejores decisiones en lo que construyo.',
    'about.area.devops': 'DevOps',
    'about.area.devops.desc': 'CI/CD, infraestructura como código, automatización de despliegues.',
    'about.area.databases': 'Bases de datos',
    'about.area.databases.desc': 'Indexación, query optimization, modelos relacionales y NoSQL.',
    'about.area.security': 'Ciberseguridad',
    'about.area.security.desc': 'Seguridad en APIs, OWASP, hardening y buenas prácticas.',
    'about.area.networking': 'Redes',
    'about.area.networking.desc': 'Protocolos, arquitecturas distribuidas y comunicación entre servicios.',

    // Projects
    'projects.tag': 'Proyectos',
    'projects.experience': '1 año de experiencia',
    'projects.view': 'Ver proyecto →',
    'banubot.subtitle': 'Robótica educativa · Educación inclusiva',
    'banubot.description':
      'Robot educativo basado en Escornabot, modificado para entregar retroalimentación con luces, sonidos y movimiento. Los niños responden preguntas en una plataforma web y el robot avanza en tiempo real sobre mapas físicos temáticos — convirtiendo la comprensión lectora en una experiencia concreta para estudiantes con necesidades educativas especiales.',
    'banubot.feature1': 'Control manual y automático del robot vía WebSocket',
    'banubot.feature2': 'Plataforma web para gestión de preguntas y progreso',
    'banubot.feature3': 'App móvil Android para interacción en aula',
    'edurun.subtitle': 'LTI 1.3 · Evaluación de código segura',
    'edurun.description':
      'Herramienta LTI 1.3 integrada con Canvas LMS para la evaluación de código Python con integridad académica. Cada keystroke, pausa y modificación queda registrada — evaluando el proceso de pensamiento del estudiante, no solo el resultado final.',
    'edurun.feature1': 'Trazabilidad completa: teclas, tiempo y cambios en tiempo real',
    'edurun.feature2': 'Ejecución aislada en contenedores Docker efímeros',
    'edurun.feature3': 'Detección automática de copy-paste y cambios de pestaña',

    // Skills
    'skills.tag': 'Stack Técnico',
    'skills.subtitle': 'Tecnologías y herramientas que utilizo',
    'skills.cat.languages': 'Lenguajes',
    'skills.cat.frameworks': 'Frameworks & Librerías',
    'skills.cat.tools': 'Herramientas & Plataformas',

    // Certificates
    'certs.tag': 'Certificaciones',
    'certs.subtitle': 'Credenciales y certificaciones profesionales',
    'certs.view': 'Ver Certificado',
    'cert.fcc.name': 'Python (Algorithms and Data Structures)',
    'cert.fcc.date': 'Marzo 2026',
    'cert.redes.name': 'Conceptos Básicos de Redes',
    'cert.redes.date': 'Abril 2025',
    'cert.cyber.date': 'Mayo 2020',
    'cert.ibm.date': '2024',
    'cert.mongo.date': 'Mayo 2025',
    'cert.python.name': 'Python for Data Science, AI & Development',
    'cert.python.date': 'Marzo 2025',
    'cert.toeic.date': 'Junio 2023',

    // Contact
    'contact.tag': 'Contacto',
    'contact.headline.a': 'Trabajemos',
    'contact.headline.b': 'Juntos',
    'contact.subtitle':
      'Estoy disponible para proyectos freelance y oportunidades laborales. No dudes en contactarme.',
    'contact.name': 'Nombre',
    'contact.name.placeholder': 'Tu nombre…',
    'contact.message': 'Mensaje',
    'contact.message.placeholder': 'Cuéntame sobre tu proyecto…',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando…',
    'contact.form.required': 'Por favor completa todos los campos.',
    'contact.form.success': '¡Mensaje enviado! Te responderé pronto.',
    'contact.form.error': 'Hubo un error al enviar. Esríbeme directo a benjamin.nunez.beat@gmail.com',

    // Footer
    'footer.tagline': 'Backend developer construyendo APIs robustas con Python, Docker y AWS.',
    'footer.cta': '¿Trabajamos juntos? →',
    'footer.nav': 'Navegación',
    'footer.social': 'Contacto',
    'footer.copyright': 'Todos los derechos reservados.',
    'footer.made': 'Hecho con Astro & Tailwind CSS',
  },
  en: {
    // Page
    'page.skip': 'Skip to content',

    // Navbar
    'nav.about': 'About me',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Open navigation menu',
    'nav.lang.toggle': 'ES',
    'nav.lang.toggle.aria': 'Switch language to Spanish',

    // Hero
    'hero.available': 'Available for work',
    'hero.role': 'Computer & Information Engineer',
    'hero.greeting': "Hello, I'm",
    'hero.bio':
      'Developer focused on backend systems with <strong style="color: var(--color-text); font-weight: 600;">Python</strong>, <strong style="color: var(--color-text); font-weight: 600;">Docker</strong> and <strong style="color: var(--color-text); font-weight: 600;">AWS</strong> — currently learning <strong style="color: var(--color-text); font-weight: 600;">cybersecurity</strong>, <strong style="color: var(--color-text); font-weight: 600;">cloud scalability</strong> and <strong style="color: var(--color-text); font-weight: 600;">DevOps</strong>.',
    'hero.education': 'Graduate · Universidad Andrés Bello',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Contact',
    'hero.cta.cv': 'View CV',
    'hero.photo.alt': 'Photo of Benjamín Núñez',

    // About
    'about.tag': 'About me',
    'about.headline':
      "Learning isn't a habit,<br/><span style=\"color: var(--color-accent);\">it's the way I work.</span>",
    'about.p1':
      "I'm a backend developer who never stands still. I feed on official documentation, courses and, above all, building my own projects where I can experiment without a safety net. Every new problem is an excuse to better understand how things work under the hood.",
    'about.p2':
      "My main focus is on APIs and backend systems with Python, Docker and AWS — but I'm increasingly venturing into areas that connect directly to that work: <strong style=\"color: var(--color-text); font-weight: 600;\">DevOps</strong>, <strong style=\"color: var(--color-text); font-weight: 600;\">database optimization</strong>, <strong style=\"color: var(--color-text); font-weight: 600;\">cybersecurity</strong> and <strong style=\"color: var(--color-text); font-weight: 600;\">networking</strong>. Not to be an expert in everything, but to make better decisions in what I build.",
    'about.area.devops': 'DevOps',
    'about.area.devops.desc': 'CI/CD, infrastructure as code, deployment automation.',
    'about.area.databases': 'Databases',
    'about.area.databases.desc': 'Indexing, query optimization, relational and NoSQL models.',
    'about.area.security': 'Cybersecurity',
    'about.area.security.desc': 'API security, OWASP, hardening and best practices.',
    'about.area.networking': 'Networking',
    'about.area.networking.desc': 'Protocols, distributed architectures and service communication.',

    // Projects
    'projects.tag': 'Projects',
    'projects.experience': '1 year of experience',
    'projects.view': 'View project →',
    'banubot.subtitle': 'Educational robotics · Inclusive education',
    'banubot.description':
      'Educational robot based on Escornabot, modified to provide feedback with lights, sounds and movement. Children answer questions on a web platform and the robot advances in real time on themed physical maps — turning reading comprehension into a tangible experience for students with special educational needs.',
    'banubot.feature1': 'Manual and automatic robot control via WebSocket',
    'banubot.feature2': 'Web platform for question and progress management',
    'banubot.feature3': 'Android mobile app for classroom interaction',
    'edurun.subtitle': 'LTI 1.3 · Secure code evaluation',
    'edurun.description':
      "LTI 1.3 tool integrated with Canvas LMS for Python code evaluation with academic integrity. Every keystroke, pause and modification is recorded — evaluating the student's thought process, not just the final result.",
    'edurun.feature1': 'Full traceability: keystrokes, time and real-time changes',
    'edurun.feature2': 'Isolated execution in ephemeral Docker containers',
    'edurun.feature3': 'Automatic detection of copy-paste and tab switching',

    // Skills
    'skills.tag': 'Tech Stack',
    'skills.subtitle': 'Technologies and tools I use',
    'skills.cat.languages': 'Languages',
    'skills.cat.frameworks': 'Frameworks & Libraries',
    'skills.cat.tools': 'Tools & Platforms',

    // Certificates
    'certs.tag': 'Certifications',
    'certs.subtitle': 'Professional credentials and certifications',
    'certs.view': 'View Certificate',
    'cert.fcc.name': 'Python (Algorithms and Data Structures)',
    'cert.fcc.date': 'March 2026',
    'cert.redes.name': 'Networking Basics',
    'cert.redes.date': 'April 2025',
    'cert.cyber.date': 'May 2020',
    'cert.ibm.date': '2024',
    'cert.mongo.date': 'May 2025',
    'cert.python.name': 'Python for Data Science, AI & Development',
    'cert.python.date': 'March 2025',
    'cert.toeic.date': 'June 2023',

    // Contact
    'contact.tag': 'Contact',
    'contact.headline.a': "Let's Work",
    'contact.headline.b': 'Together',
    'contact.subtitle':
      "I'm available for freelance projects and job opportunities. Feel free to reach out.",
    'contact.name': 'Name',
    'contact.name.placeholder': 'Your name…',
    'contact.message': 'Message',
    'contact.message.placeholder': 'Tell me about your project…',
    'contact.send': 'Send message',
    'contact.sending': 'Sending…',
    'contact.form.required': 'Please fill in all fields.',
    'contact.form.success': "Message sent! I'll get back to you soon.",
    'contact.form.error': 'There was an error sending. Write to me at benjamin.nunez.beat@gmail.com',

    // Footer
    'footer.tagline': 'Backend developer building robust APIs with Python, Docker and AWS.',
    'footer.cta': "Let's work together →",
    'footer.nav': 'Navigation',
    'footer.social': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.made': 'Made with Astro & Tailwind CSS',
  },
} as const;

export type TranslationKey = keyof typeof translations.es;
