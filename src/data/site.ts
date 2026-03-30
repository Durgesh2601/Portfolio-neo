export const siteConfig = {
  name: "Durgesh Kumar Singh",
  shortName: "Durgesh",
  title: "Frontend Engineer building scalable, high-performance product experiences.",
  description:
    "Portfolio of Durgesh Kumar Singh, a Bengaluru-based Frontend Engineer specializing in React, TypeScript, Next.js, scalable UI systems, and high-performance product experiences.",
  role: "SDE-2 at WizCommerce",
  timeframe: "May 2022 - Present",
  location: "Bengaluru, Karnataka, India",
  email: "dk829445@gmail.com",
  phone: "+91-8787020752",
  companyUrl: "https://www.wizcommerce.com/",
  mapUrl: "https://maps.app.goo.gl/CFx7B6gNKaYTSYf26",
  githubUrl: "https://github.com/Durgesh2601",
  siteUrl: "https://portfolio-durgesh.vercel.app",
  keywords: [
    "Durgesh Kumar Singh",
    "Frontend Engineer",
    "Next.js developer",
    "React developer",
    "TypeScript portfolio",
    "UI Engineer India"
  ],
  hero: {
    eyebrow: "Frontend Engineer • React • Next.js • TypeScript",
    heading: "Building fast, scalable interfaces that stay polished under real product complexity.",
    summary:
      "I work across frontend architecture, performance, testing, and interaction design to ship production-grade experiences that are intuitive for users and reliable for teams.",
    primaryCta: {
      label: "Start a conversation",
      href: "mailto:dk829445@gmail.com"
    },
    secondaryCta: {
      label: "View projects",
      href: "#projects"
    },
    stats: [
      { value: "4", label: "years in frontend engineering" },
      { value: "7+", label: "payment gateways integrated" },
      { value: "70K+", label: "records handled in data-heavy UIs" }
    ]
  },
  experience: [
    {
      title: "SDE-2",
      company: "WizCommerce",
      period: "May 2022 - Present",
      description:
        "Working across large-scale React and TypeScript applications for enterprise commerce workflows, with a focus on modular architecture, frontend performance, and production reliability.",
      highlights: [
        "Migrated 3 production applications from CRA to Vite, cutting build times from roughly 10 to 12 minutes down to about 2.5 minutes and improving CI reliability",
        "Led frontend performance improvements including React 17 to 18 migration, memoization, render optimization, and API caching, helping reduce page load times by 15%",
        "Designed data-intensive dashboards with Ag-Grid SSRM to support 70K+ records with server-side pagination, sorting, and filtering",
        "Integrated and secured 7+ enterprise payment gateways with tokenization and detokenization flows for payment, refund, and subscription journeys",
        "Built SEO and slug-management tooling for customer-facing pages and contributed to stronger metadata control across products",
        "Wrote unit, integration, and E2E coverage with React Testing Library and Cypress while mentoring junior engineers and maintaining frontend quality standards"
      ]
    }
  ],
  projects: [
    {
      name: "Best Buddy",
      description:
        "A MERN real-estate platform centered on role-based property discovery, management workflows, and personalized recommendations.",
      impact:
        "Built a responsive experience around listing discovery, management, and recommendation flows with a stronger emphasis on usability and clarity.",
      stack: ["React", "Node", "ExpressJS", "Bootstrap"],
      liveUrl: "https://best-buddy-app.netlify.app",
      codeUrl: "https://github.com/Durgesh2601/best-buddy"
    },
    {
      name: "DevExplorer",
      description:
        "A TypeScript-powered GitHub explorer for browsing developer profiles, repositories, and key account information.",
      impact:
        "Focused on a cleaner information hierarchy and smoother developer exploration flow for quickly surfacing profile details.",
      stack: ["React", "TypeScript", "Material UI"],
      liveUrl: "https://dev-explorer.vercel.app",
      codeUrl: "https://github.com/Durgesh2601/DevExplorer"
    }
  ],
  skills: [
    "Next.js",
    "TypeScript",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Redux",
    "Node.js",
    "ExpressJS",
    "MongoDB",
    "Git",
    "Vercel"
  ],
  about: [
    "I am a frontend engineer with 4 years of experience building production-grade applications using React, TypeScript, and modern frontend tooling.",
    "A lot of my recent work has involved shared-code systems, performance tuning, payment workflows, large datasets, and the kind of UI complexity that needs both strong architecture and careful product thinking.",
    "I care about building interfaces that feel crisp and intuitive, while still being maintainable, accessible, and measurable in performance."
  ],
  contact: {
    heading: "Let us build something sharp, fast, and memorable.",
    blurb:
      "If you are building a product that needs polished UI, thoughtful interactions, and strong frontend execution, I would love to connect."
  },
  theme: {
    light: {
      background: "#f4efe8",
      surface: "#fffaf4",
      surfaceAlt: "#ede2d5",
      foreground: "#16120f",
      muted: "#665b52",
      border: "rgba(22, 18, 15, 0.12)",
      accent: "#b65424",
      accentSoft: "rgba(182, 84, 36, 0.14)"
    },
    dark: {
      background: "#0f1115",
      surface: "#171a20",
      surfaceAlt: "#1f242d",
      foreground: "#f5f2ed",
      muted: "#9ea6b3",
      border: "rgba(255, 255, 255, 0.09)",
      accent: "#f19b61",
      accentSoft: "rgba(241, 155, 97, 0.16)"
    }
  }
} as const;

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];
