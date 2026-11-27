// All copy for the site and the CV lives here, one object per language.
// Edit text here; components only render it.

export type Locale = "en" | "es";

export const profile = {
  name: "Jimmy Yar",
  fullName: "Jimmy Saúl Yar Carvajal",
  // TODO: replace with the new address once it exists.
  email: "jimmy1817@hotmail.com",
  github: "https://github.com/james46007",
  linkedin: "https://www.linkedin.com/in/jimmy-yar/",
  site: "https://james46007.github.io",
  // Set to e.g. "/photo.jpg" (file in /public) once you have a photo.
  photo: null as string | null,
  pita: {
    repo: "https://github.com/james46007/pita",
    botRepo: "https://github.com/james46007/pita-chatbot-n8n",
    // Live demo is down (404). Put the URL back once it's redeployed.
    demo: null as string | null,
    // Short demo video, e.g. "/pita-demo.mp4" in /public.
    video: null as string | null,
  },
};

const en = {
  meta: {
    title: "Jimmy Yar — Full-stack Engineer",
    description:
      "Full-stack software engineer with a frontend edge: design systems, real-time interfaces and complete products, from database to UI. Based in Ecuador, working remotely.",
  },
  nav: { work: "Work", experience: "Experience", about: "About", contact: "Contact", cv: "Résumé" },
  hero: {
    eyebrow: "Full-stack engineer · Frontend & design systems",
    titleA: "I build complete products,",
    titleB: "from the database to the last pixel.",
    lead:
      "I'm Jimmy, a software engineer from Ecuador. At Airpals I build design systems and real-time logistics interfaces with Next.js, React and GraphQL. On my own, I ship full products end to end.",
    ctaWork: "See the work",
    ctaCv: "Download résumé",
    facts: [
      { value: "7+ years", label: "building for the web" },
      { value: "M.Sc.", label: "Web Applications · VIU" },
      { value: "Airpals", label: "current role" },
      { value: "UTC−5", label: "remote-ready" },
    ],
  },
  pita: {
    eyebrow: "Case study",
    title: "Pita",
    subtitle: "A multi-tenant booking platform for sports courts, with a WhatsApp assistant.",
    problem: {
      title: "The problem",
      body:
        "Court owners in Ecuador take bookings by hand over WhatsApp and confirm bank transfers one screenshot at a time. Double bookings and lost payments are common.",
    },
    solution: {
      title: "What I built",
      body:
        "A SaaS where each sports complex gets its own isolated space: courts, schedules, staff and bank accounts. Players book from the web or simply chat on WhatsApp; an AI assistant checks real availability, books the slot and collects the payment receipt.",
    },
    highlights: [
      "Multi-tenant data isolation: every query is scoped to its complex, cross-tenant access returns 403.",
      "Atomic booking: slot and reservation change state in one transaction, so a slot can't be sold twice.",
      "WhatsApp assistant with Gemini function calling. It can only answer with real availability, prices and bank accounts.",
      "Anti-ban messaging layer in n8n: read delays, typing presence and jittered send times.",
      "Payment-proof flow, automated reminders and weekly reports via scheduled jobs and email.",
    ],
    role: "Solo project · product, design, frontend, backend and infrastructure",
    diagramTitle: "How it fits together",
    diagramCaption: "A booking request travels from WhatsApp or the web to the database and back.",
    links: { repo: "Web app code", bot: "Chatbot code", demo: "Live demo" },
  },
  diagram: {
    player: "Player",
    whatsapp: "WhatsApp",
    web: "Web / PWA",
    evolution: "Evolution API",
    n8n: "n8n bot service",
    n8nNote: "anti-ban · routing",
    api: "Next.js API",
    apiNote: "tenants · bookings",
    llm: "Gemini",
    llmNote: "function calling",
    db: "PostgreSQL",
    dbNote: "Prisma · Supabase",
    storage: "Receipts",
    storageNote: "Supabase Storage",
    jobs: "Scheduled jobs",
    jobsNote: "reminders · reports",
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked",
    present: "Present",
    jobs: [
      {
        company: "Airpals Workplace Logistics",
        role: "Software Engineer",
        period: "Sep 2024 — Present",
        place: "Ibarra, Ecuador",
        points: [
          "Build high-performance frontends in an enterprise Turborepo monorepo with Next.js, React and TypeScript.",
          "Built a centralized, accessible component library with Storybook and Tailwind, with design tokens synced from Figma.",
          "Implemented low-latency, real-time tracking and telemetry using GraphQL subscriptions (Apollo Client, WebSockets).",
          "Integrated secure payments and recurring billing with Stripe.",
          "Wrote end-to-end regression suites in Cypress that protect critical delivery flows on every release.",
        ],
        stack: ["Next.js", "React", "TypeScript", "GraphQL", "Storybook", "Stripe", "Cypress"],
      },
      {
        company: "Fortaleza Brokers",
        role: "Software Developer · Contract",
        period: "Nov 2024 — Jan 2025",
        place: "Ibarra, Ecuador",
        points: [],
        stack: [],
      },
      {
        company: "Papagayo Dev",
        role: "Full-stack Developer",
        period: "May 2021 — Sep 2024",
        place: "Quito, Ecuador",
        points: [],
        stack: [],
      },
    ],
    earlier: {
      period: "2018 — 2021",
      text: "Full-stack developer at Prendia, DevCloud Solutions, Duragas Abastible, ITEmpresarial and Sindicato de Choferes Tulcán.",
    },
  },
  projects: {
    eyebrow: "More work",
    title: "Other projects",
    items: [
      {
        name: "Distributed API Gateway",
        year: "2021",
        body: "NestJS microservices talking over RabbitMQ, with a single gateway for routing and OpenAPI docs.",
        stack: ["NestJS", "RabbitMQ", "TypeScript"],
        url: "https://github.com/james46007/api-gateway",
      },
      {
        name: "Digimon mobile app",
        year: "2024",
        body: "Android app built with Angular 17, Ionic 7 and Capacitor, with cloud persistence.",
        stack: ["Angular", "Ionic", "Capacitor", "Firebase"],
        url: "https://github.com/james46007/digimon",
      },
    ],
    viewCode: "Code",
  },
  about: {
    eyebrow: "About",
    title: "A bit more about me",
    body: [
      "I care about the parts users never see as much as the ones they do: a clean data model, a predictable API, a component that works with a keyboard.",
      "I like owning a problem from the first sketch in Figma to the last deploy, and I'm happiest on small teams that ship often.",
    ],
    photoAlt: "Portrait of Jimmy Yar",
    educationTitle: "Education",
    education: [
      { school: "Universidad Internacional de Valencia (VIU)", degree: "M.Sc. Web Application & Services Development", period: "2022 — 2023" },
      { school: "Pontificia Universidad Católica del Ecuador", degree: "Systems Engineering", period: "2015 — 2020" },
    ],
    certsTitle: "Certifications",
    certs: ["AWS Cloud Quest: Cloud Practitioner", "Scrum Fundamentals Certified (SFC)"],
    skillsTitle: "Tools I use every day",
    skills: {
      Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Storybook", "Radix UI", "Angular", "Ionic"],
      Backend: ["Node.js", "NestJS", "GraphQL", "PostgreSQL", "Prisma", "RabbitMQ"],
      "Quality & ops": ["Cypress", "Jest", "Docker", "CI/CD", "n8n", "Figma"],
    } as Record<string, string[]>,
  },
  contact: {
    title: "Let's build something together.",
    body: "I'm open to full-time remote roles as a full-stack or frontend engineer. The fastest way to reach me is email.",
    email: "Email me",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: { built: "Built with Astro & Tailwind CSS." },
  ui: { switchLang: "Español", theme: "Toggle dark mode", menu: "Menu", close: "Close" },
  cv: {
    summaryTitle: "Summary",
    summary:
      "Full-stack software engineer with 7+ years of experience and a frontend focus: design systems, real-time interfaces and complete web products. Currently at Airpals building a component library and real-time logistics tools with Next.js, React, TypeScript and GraphQL.",
    experienceTitle: "Experience",
    projectTitle: "Selected project",
    projectBody:
      "Pita — multi-tenant SaaS for booking sports courts. Next.js, Prisma, PostgreSQL (Supabase), a WhatsApp assistant with Gemini function calling and an n8n messaging service in Docker.",
    educationTitle: "Education",
    certsTitle: "Certifications",
    skillsTitle: "Skills",
    earlierTitle: "Earlier roles",
  },
};

export type Content = typeof en;

const es: Content = {
  meta: {
    title: "Jimmy Yar — Ingeniero Full-stack",
    description:
      "Ingeniero de software full-stack con enfoque en frontend: sistemas de diseño, interfaces en tiempo real y productos completos, de la base de datos a la interfaz. Desde Ecuador, en remoto.",
  },
  nav: { work: "Trabajo", experience: "Experiencia", about: "Sobre mí", contact: "Contacto", cv: "CV" },
  hero: {
    eyebrow: "Ingeniero full-stack · Frontend y sistemas de diseño",
    titleA: "Construyo productos completos,",
    titleB: "de la base de datos al último píxel.",
    lead:
      "Soy Jimmy, ingeniero de software en Ecuador. En Airpals construyo sistemas de diseño e interfaces logísticas en tiempo real con Next.js, React y GraphQL. Por mi cuenta, llevo productos completos de principio a fin.",
    ctaWork: "Ver el trabajo",
    ctaCv: "Descargar CV",
    facts: [
      { value: "7+ años", label: "construyendo para la web" },
      { value: "Máster", label: "Aplicaciones Web · VIU" },
      { value: "Airpals", label: "puesto actual" },
      { value: "UTC−5", label: "listo para remoto" },
    ],
  },
  pita: {
    eyebrow: "Caso de estudio",
    title: "Pita",
    subtitle: "Una plataforma multi-tenant de reservas de canchas, con asistente de WhatsApp.",
    problem: {
      title: "El problema",
      body:
        "Los dueños de canchas en Ecuador toman reservas a mano por WhatsApp y confirman transferencias captura por captura. Las reservas dobles y los pagos perdidos son frecuentes.",
    },
    solution: {
      title: "Lo que construí",
      body:
        "Un SaaS donde cada complejo deportivo tiene su propio espacio aislado: canchas, horarios, personal y cuentas bancarias. Los jugadores reservan desde la web o simplemente escriben por WhatsApp; un asistente con IA consulta la disponibilidad real, reserva y recibe el comprobante de pago.",
    },
    highlights: [
      "Aislamiento de datos multi-tenant: cada consulta se limita a su complejo y el acceso cruzado devuelve 403.",
      "Reserva atómica: el horario y la reserva cambian de estado en una sola transacción, así un horario no se vende dos veces.",
      "Asistente de WhatsApp con function calling de Gemini. Solo puede responder con disponibilidad, precios y cuentas reales.",
      "Capa de mensajería anti-baneo en n8n: tiempos de lectura, estado «escribiendo» y envíos con variación aleatoria.",
      "Flujo de comprobantes de pago, recordatorios automáticos y reportes semanales con tareas programadas y correo.",
    ],
    role: "Proyecto individual · producto, diseño, frontend, backend e infraestructura",
    diagramTitle: "Cómo encaja todo",
    diagramCaption: "Una reserva viaja desde WhatsApp o la web hasta la base de datos, y de vuelta.",
    links: { repo: "Código de la app web", bot: "Código del chatbot", demo: "Demo en vivo" },
  },
  diagram: {
    player: "Jugador",
    whatsapp: "WhatsApp",
    web: "Web / PWA",
    evolution: "Evolution API",
    n8n: "Servicio bot n8n",
    n8nNote: "anti-baneo · enrutado",
    api: "API Next.js",
    apiNote: "tenants · reservas",
    llm: "Gemini",
    llmNote: "function calling",
    db: "PostgreSQL",
    dbNote: "Prisma · Supabase",
    storage: "Comprobantes",
    storageNote: "Supabase Storage",
    jobs: "Tareas programadas",
    jobsNote: "recordatorios · reportes",
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde he trabajado",
    present: "Actualidad",
    jobs: [
      {
        company: "Airpals Workplace Logistics",
        role: "Software Engineer",
        period: "sep 2024 — actualidad",
        place: "Ibarra, Ecuador",
        points: [
          "Desarrollo frontends de alto rendimiento en un monorepo empresarial con Turborepo, Next.js, React y TypeScript.",
          "Creé una biblioteca de componentes centralizada y accesible con Storybook y Tailwind, con tokens de diseño sincronizados desde Figma.",
          "Implementé seguimiento y telemetría en tiempo real de baja latencia con suscripciones GraphQL (Apollo Client, WebSockets).",
          "Integré pagos seguros y facturación recurrente con Stripe.",
          "Escribí suites de regresión end-to-end en Cypress que protegen los flujos críticos de distribución en cada versión.",
        ],
        stack: ["Next.js", "React", "TypeScript", "GraphQL", "Storybook", "Stripe", "Cypress"],
      },
      {
        company: "Fortaleza Brokers",
        role: "Desarrollador de software · Contrato",
        period: "nov 2024 — ene 2025",
        place: "Ibarra, Ecuador",
        points: [],
        stack: [],
      },
      {
        company: "Papagayo Dev",
        role: "Full-stack Developer",
        period: "may 2021 — sep 2024",
        place: "Quito, Ecuador",
        points: [],
        stack: [],
      },
    ],
    earlier: {
      period: "2018 — 2021",
      text: "Desarrollador full-stack en Prendia, DevCloud Solutions, Duragas Abastible, ITEmpresarial y Sindicato de Choferes Tulcán.",
    },
  },
  projects: {
    eyebrow: "Más trabajo",
    title: "Otros proyectos",
    items: [
      {
        name: "API Gateway distribuido",
        year: "2021",
        body: "Microservicios en NestJS comunicados por RabbitMQ, con un gateway único para enrutado y documentación OpenAPI.",
        stack: ["NestJS", "RabbitMQ", "TypeScript"],
        url: "https://github.com/james46007/api-gateway",
      },
      {
        name: "App móvil Digimon",
        year: "2024",
        body: "App Android con Angular 17, Ionic 7 y Capacitor, con persistencia en la nube.",
        stack: ["Angular", "Ionic", "Capacitor", "Firebase"],
        url: "https://github.com/james46007/digimon",
      },
    ],
    viewCode: "Código",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Un poco más sobre mí",
    body: [
      "Me importan tanto las partes que el usuario nunca ve como las que sí: un modelo de datos limpio, una API predecible, un componente que funciona con teclado.",
      "Me gusta hacerme cargo de un problema desde el primer boceto en Figma hasta el último despliegue, y disfruto más en equipos pequeños que entregan seguido.",
    ],
    photoAlt: "Retrato de Jimmy Yar",
    educationTitle: "Educación",
    education: [
      { school: "Universidad Internacional de Valencia (VIU)", degree: "Máster en Desarrollo de Aplicaciones y Servicios Web", period: "2022 — 2023" },
      { school: "Pontificia Universidad Católica del Ecuador", degree: "Ingeniería de Sistemas", period: "2015 — 2020" },
    ],
    certsTitle: "Certificaciones",
    certs: ["AWS Cloud Quest: Cloud Practitioner", "Scrum Fundamentals Certified (SFC)"],
    skillsTitle: "Herramientas que uso a diario",
    skills: {
      Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Storybook", "Radix UI", "Angular", "Ionic"],
      Backend: ["Node.js", "NestJS", "GraphQL", "PostgreSQL", "Prisma", "RabbitMQ"],
      "Calidad y operación": ["Cypress", "Jest", "Docker", "CI/CD", "n8n", "Figma"],
    },
  },
  contact: {
    title: "Construyamos algo juntos.",
    body: "Estoy abierto a puestos remotos a tiempo completo como ingeniero full-stack o frontend. La forma más rápida de contactarme es por correo.",
    email: "Escríbeme",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: { built: "Hecho con Astro y Tailwind CSS." },
  ui: { switchLang: "English", theme: "Cambiar modo oscuro", menu: "Menú", close: "Cerrar" },
  cv: {
    summaryTitle: "Perfil",
    summary:
      "Ingeniero de software full-stack con más de 7 años de experiencia y enfoque en frontend: sistemas de diseño, interfaces en tiempo real y productos web completos. Actualmente en Airpals, construyendo una biblioteca de componentes y herramientas logísticas en tiempo real con Next.js, React, TypeScript y GraphQL.",
    experienceTitle: "Experiencia",
    projectTitle: "Proyecto destacado",
    projectBody:
      "Pita — SaaS multi-tenant de reservas de canchas deportivas. Next.js, Prisma, PostgreSQL (Supabase), asistente de WhatsApp con function calling de Gemini y servicio de mensajería n8n en Docker.",
    educationTitle: "Educación",
    certsTitle: "Certificaciones",
    skillsTitle: "Habilidades",
    earlierTitle: "Puestos anteriores",
  },
};

export const content: Record<Locale, Content> = { en, es };

export const paths: Record<Locale, { home: string; cvPdf: string }> = {
  en: { home: "/", cvPdf: "/cv/jimmy-yar-cv-en.pdf" },
  es: { home: "/es/", cvPdf: "/cv/jimmy-yar-cv-es.pdf" },
};
