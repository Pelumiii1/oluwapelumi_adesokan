// Mock data for portfolio - UPDATE THIS WITH YOUR ACTUAL DATA LATER

type SocialLinks = {
  github: string;
  linkedin: string;
  portfolio: string;
};

type PersonalInfo = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  cvLink: string;
  social: SocialLinks;
};

type Experience = {
  current: string;
  years: string;
  focus: string[];
};

type SkillGroup = {
  category: string;
  technologies: string[];
};

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  isLive?: boolean;
};

export const personalInfo: PersonalInfo = {
  name: "Oluwapelumi Adesokan",
  title: "Fullstack Developer",
  tagline: "Building scalable web applications with modern technologies",
  summary:
    "Fullstack Developer with 3+ years of experience building scalable web applications using Next.js, React, TypeScript, Node.js, Express, and PostgreSQL (with Prisma ORM). Expert in secure JWT authentication, role-based access control, API integration, and owning production systems in fintech/e-commerce environments. Strong ownership mindset, proven debugging skills, and quick adaptation to scaling startups — currently at Motopay (hybrid).",
  email: "adesokanpelumi14@gmail.com",
  cvLink: "/path-to-your-cv.pdf", // UPDATE with actual CV link
  social: {
    github: "https://github.com/Pelumiii1",
    linkedin: "https://www.linkedin.com/in/adesokanoluwapelumi/",
    portfolio: "https://oluwapelumi-adesokan.vercel.app",
  },
};

export const experience: Experience = {
  current: "Motopay (Hybrid)",
  years: "3+",
  focus: ["Fintech", "E-commerce", "Production Systems"],
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "NestJS", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis"],
  },
  {
    category: "Authentication & Security",
    technologies: ["JWT", "OAuth", "Session Management"],
  },
  {
    category: "DevOps & Tools",
    technologies: ["Git", "Docker", "CI/CD", "AWS", "Vercel"],
  },
  {
    category: "Other",
    technologies: [
      "API Integration",
      "Payment Systems",
      "WebSockets",
      "Testing",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 6,
    title: "Cultured API",
    description:
      "NestJS backend for a cultural platform, featuring JWT auth, Flutterwave payments, file storage workflows, background jobs, and PostgreSQL persistence. Currently not live.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "BullMQ",
      "AWS S3",
      "Flutterwave",
    ],
    image: "/cultured.png",
    liveUrl: "https://culturedapp.vercel.app/",
    githubUrl: "https://github.com/THECULTUREDAPP/cultured-api",
    isLive: false,
  },

  {
    id: 2,
    title: "Rafiki X",
    description:
      "AI-assisted platform built with SvelteKit and Vite, combining Tailwind CSS styling, markdown rendering, and API-driven workflows for a fast, modern user experience.",
    technologies: [
      "SvelteKit",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Axios",
    ],
    image: "/rafiki-x.png",
    liveUrl: "https://rafikigen.ai/",
    githubUrl: "https://github.com/SKILL2RURAL/rafiki-x-frontend",
    isLive: true,
  },

  {
    id: 1,
    title: "Skill2Rural",
    description:
      "Education and workforce platform built with Next.js 14, React, and Tailwind CSS, featuring authentication, data-driven dashboards, and modern UI components for a polished learning experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "React Query",
    ],
    image: "/skill2rural.png",
    liveUrl: "https://skill2rural.org/",
    githubUrl: "https://github.com/Preshy-Jones/skill2rural-web",
    isLive: true,
  },

  {
    id: 4,
    title: "Motobills Admin",
    description:
      "Admin dashboard built with Next.js and Ant Design, featuring analytics, table-driven workflows, role-based access, and production-ready tooling for billing operations.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Ant Design",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    image: "/motobills-admin.png",
    liveUrl: "https://motobillsadmin.motobills.com",
    githubUrl:
      "https://github.com/Homewin-Nigeria-Ltd/motobills-admin-dashboard-new",
  },
  {
    id: 5,
    title: "Grinders",
    description:
      "Next.js 16 platform with real-time features, maps, and analytics, supported by an Express backend alongside React Query data flows and Socket.IO updates for a responsive user experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Socket.IO",
      "Express",
      "Paystack",
    ],
    image: "/grinders.png",
    liveUrl: "https://grinders.ng/",
    githubUrl: "https://github.com/Pelumiii1/grinders-frontend",
  },

  {
    id: 3,
    title: "Gated Landing Page",
    description:
      "SvelteKit marketing landing page with animated sections and carousel-driven layouts, styled with Tailwind CSS. Currently not live.",
    technologies: [
      "SvelteKit",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "GSAP",
    ],
    image: "/gated.png",
    liveUrl: "https://gated-landing-page.vercel.app/",
    githubUrl: "https://github.com/Pelumiii1/gated-landingPage",
    isLive: false,
  },
];
