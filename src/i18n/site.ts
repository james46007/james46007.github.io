// Copy for the home page (the original dark design), one object per language.
// Edit text here; components only render it. Links and email live in `profile`.
import type { Locale } from "./content";

const en = {
  meta: {
    title: "Jimmy Yar | Software Engineer & Frontend Architect",
    description:
      "Portfolio of Jimmy Yar — Software Engineer specializing in modern web platforms, design systems, and scalable backend architectures.",
  },
  nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact", cta: "Get in Touch" },
  ui: { switchLang: "Español", menu: "Menu" },
  hero: {
    badge: "Software Engineer • B2B Logistics & Modern Web Platforms",
    title: "Building resilient web applications & design systems.",
    // The name and the stack words are highlighted by the component.
    leadBefore: "Hi, I'm",
    leadAfter: ". I architect modular, high-performance digital products using",
    leadStack: ["TypeScript", "React", "Next.js"],
    leadEnd: ", and distributed backend services.",
    ctaProjects: "View Projects",
    ctaLinkedin: "LinkedIn Profile",
  },
  stats: [
    { value: "4,500+", label: "GitHub Contributions" },
    { value: "Full Stack", label: "Web & Mobile" },
    { value: "Design", label: "Figma to Code" },
    { value: "Remote", label: "Timezone UTC-5" },
  ],
  mindset: {
    eyebrow: "Engineering Mindset",
    title: "What I Bring to Every Project",
    items: [
      {
        icon: "grid",
        color: "blue",
        title: "Component Systems",
        body: "Building reusable atomic primitives with Tailwind CSS, Storybook, and Radix UI. Focused on strict WCAG accessibility and design token synchronization.",
      },
      {
        icon: "server",
        color: "emerald",
        title: "Distributed Services",
        body: "Architecting robust backends using NestJS, RabbitMQ message brokers, Prisma ORM, and PostgreSQL. Prioritizing clean architecture and decoupled domains.",
      },
      {
        icon: "bolt",
        color: "purple",
        title: "Automation & Scale",
        body: "Streamlining business operations with containerized Docker deployments, n8n webhook orchestration, and automated end-to-end testing pipelines.",
      },
    ],
  },
  skills: {
    eyebrow: "Stack & Tools",
    title: "Technical Proficiency",
    groups: [
      {
        title: "Frontend & Mobile",
        items: ["TypeScript", "React 18/19", "Next.js (App Router)", "Tailwind CSS", "Storybook", "GraphQL / Apollo", "Angular 17", "Ionic 7 & Capacitor"],
      },
      {
        title: "Backend & Cloud",
        items: ["Node.js", "NestJS (Microservices)", "PostgreSQL", "Prisma ORM", "RabbitMQ (AMQP)", "Docker & Compose", "n8n Automation", "Python / Django"],
      },
    ],
  },
  projects: {
    eyebrow: "Featured Work",
    title: "Open-Source & Architectural Projects",
    items: [
      {
        tag: "Full-Stack Application",
        color: "blue",
        name: "Pita Booking Platform",
        body: "Modern booking and reservation platform built with Next.js 16, React 19, Prisma ORM, Supabase authentication, and Tailwind CSS v4.",
        stack: ["Next.js 16", "React 19", "Prisma", "Supabase"],
        url: "https://github.com/james46007/pita",
      },
      {
        tag: "Microservices Backend",
        color: "purple",
        name: "Distributed API Gateway",
        body: "Asynchronous microservices architecture communicating via RabbitMQ message queues with centralized routing and Swagger/OpenAPI docs.",
        stack: ["NestJS", "RabbitMQ", "TypeScript", "OpenAPI"],
        url: "https://github.com/james46007/api-gateway",
      },
      {
        tag: "DevOps & Automation",
        color: "emerald",
        name: "Multi-Tenant Chatbot Service",
        body: "Docker-containerized reservation workflow using n8n and Evolution API, featuring anti-ban rate limiting and webhook pipelines.",
        stack: ["Docker", "n8n", "PostgreSQL", "Evolution API"],
        url: "https://github.com/james46007/pita-chatbot-n8n",
      },
      {
        tag: "Mobile Application",
        color: "amber",
        name: "Cross-Platform Mobile App",
        body: "Mobile application for Android developed using Angular 17 and Ionic 7 with Capacitor native bridge and cloud persistence.",
        stack: ["Angular 17", "Ionic 7", "Capacitor", "Firebase"],
        url: "https://github.com/james46007/digimon",
      },
    ],
    codeLabel: "Source code on GitHub",
  },
  contact: {
    title: "Let's Build Something Exceptional",
    body: "Open to technical discussions, high-impact software engineering roles, and innovative web platform challenges.",
    email: "Send an Email",
    linkedin: "Connect on LinkedIn",
    cv: "Download Résumé",
  },
  footer: { built: "Built with Astro & Tailwind CSS." },
};

export type SiteCopy = typeof en;

const es: SiteCopy = {
  meta: {
    title: "Jimmy Yar | Ingeniero de Software y Arquitecto Frontend",
    description:
      "Portafolio de Jimmy Yar — Ingeniero de software especializado en plataformas web modernas, sistemas de diseño y arquitecturas backend escalables.",
  },
  nav: { about: "Perfil", skills: "Habilidades", projects: "Proyectos", contact: "Contacto", cta: "Contáctame" },
  ui: { switchLang: "English", menu: "Menú" },
  hero: {
    badge: "Ingeniero de Software • Logística B2B y Plataformas Web Modernas",
    title: "Construyo aplicaciones web resilientes y sistemas de diseño.",
    leadBefore: "Hola, soy",
    leadAfter: ". Diseño productos digitales modulares y de alto rendimiento con",
    leadStack: ["TypeScript", "React", "Next.js"],
    leadEnd: " y servicios backend distribuidos.",
    ctaProjects: "Ver proyectos",
    ctaLinkedin: "Perfil de LinkedIn",
  },
  stats: [
    { value: "4,500+", label: "Contribuciones en GitHub" },
    { value: "Full Stack", label: "Web y móvil" },
    { value: "Diseño", label: "De Figma a código" },
    { value: "Remoto", label: "Zona horaria UTC-5" },
  ],
  mindset: {
    eyebrow: "Mentalidad de ingeniería",
    title: "Lo que aporto a cada proyecto",
    items: [
      {
        icon: "grid",
        color: "blue",
        title: "Sistemas de componentes",
        body: "Primitivas atómicas reutilizables con Tailwind CSS, Storybook y Radix UI. Enfoque estricto en accesibilidad WCAG y sincronización de tokens de diseño.",
      },
      {
        icon: "server",
        color: "emerald",
        title: "Servicios distribuidos",
        body: "Backends robustos con NestJS, brokers de mensajería RabbitMQ, Prisma ORM y PostgreSQL. Prioridad a la arquitectura limpia y los dominios desacoplados.",
      },
      {
        icon: "bolt",
        color: "purple",
        title: "Automatización y escala",
        body: "Optimizo operaciones de negocio con despliegues en contenedores Docker, orquestación de webhooks con n8n y pipelines de pruebas end-to-end automatizadas.",
      },
    ],
  },
  skills: {
    eyebrow: "Stack y herramientas",
    title: "Dominio técnico",
    groups: [
      { title: "Frontend y móvil", items: en.skills.groups[0].items },
      { title: "Backend y nube", items: en.skills.groups[1].items },
    ],
  },
  projects: {
    eyebrow: "Trabajo destacado",
    title: "Proyectos open source y de arquitectura",
    items: [
      {
        ...en.projects.items[0],
        tag: "Aplicación full-stack",
        name: "Plataforma de reservas Pita",
        body: "Plataforma moderna de reservas construida con Next.js 16, React 19, Prisma ORM, autenticación con Supabase y Tailwind CSS v4.",
      },
      {
        ...en.projects.items[1],
        tag: "Backend de microservicios",
        name: "API Gateway distribuido",
        body: "Arquitectura asíncrona de microservicios comunicados por colas de RabbitMQ, con enrutado centralizado y documentación Swagger/OpenAPI.",
      },
      {
        ...en.projects.items[2],
        tag: "DevOps y automatización",
        name: "Servicio de chatbot multi-tenant",
        body: "Flujo de reservas en contenedores Docker con n8n y Evolution API, con límites anti-baneo y pipelines de webhooks.",
      },
      {
        ...en.projects.items[3],
        tag: "Aplicación móvil",
        name: "App móvil multiplataforma",
        body: "Aplicación Android desarrollada con Angular 17 e Ionic 7, con el puente nativo de Capacitor y persistencia en la nube.",
      },
    ],
    codeLabel: "Código fuente en GitHub",
  },
  contact: {
    title: "Construyamos algo excepcional",
    body: "Abierto a conversaciones técnicas, puestos de ingeniería de software de alto impacto y retos innovadores en plataformas web.",
    email: "Enviar un correo",
    linkedin: "Conectar en LinkedIn",
    cv: "Descargar CV",
  },
  footer: { built: "Hecho con Astro y Tailwind CSS." },
};

export const site: Record<Locale, SiteCopy> = { en, es };
