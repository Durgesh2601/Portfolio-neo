export const siteConfig = {
  name: "Durgesh Kumar Singh",
  shortName: "Durgesh",
  title: "Frontend Engineer building performant, conversion-focused web experiences.",
  description:
    "Portfolio of Durgesh Kumar Singh, a Bengaluru-based Frontend Engineer specializing in React, TypeScript, Next.js, UI engineering, and high-performance product experiences.",
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
    heading: "Designing fast, modern interfaces that feel polished at every scroll.",
    summary:
      "I build product experiences with a strong UI sensibility, clean engineering foundations, and a constant focus on speed, clarity, and conversion.",
    primaryCta: {
      label: "Start a conversation",
      href: "mailto:dk829445@gmail.com"
    },
    secondaryCta: {
      label: "View projects",
      href: "#projects"
    },
    stats: [
      { value: "3+", label: "years building web products" },
      { value: "2", label: "featured shipped side projects" },
      { value: "React", label: "ecosystem focus area" }
    ]
  },
  experience: [
    {
      title: "SDE-2",
      company: "WizCommerce",
      period: "May 2022 - Present",
      description:
        "Building scalable frontends with a strong emphasis on maintainability, responsiveness, and user experience for commerce-focused products.",
      highlights: [
        "Shipping polished experiences with React, TypeScript, and Next.js",
        "Transforming complex workflows into simpler, user-friendly interfaces",
        "Working closely with teams in fast-moving product environments"
      ]
    }
  ],
  projects: [
    {
      name: "Best Buddy",
      description:
        "A real-estate platform focused on effortless property discovery, management, and personalized recommendations.",
      impact:
        "Built a cleaner browsing experience around search, discovery, and management flows for users exploring their next home.",
      stack: ["React", "Node", "ExpressJS", "Bootstrap"],
      liveUrl: "https://best-buddy-app.netlify.app",
      codeUrl: "https://github.com/Durgesh2601/best-buddy"
    },
    {
      name: "DevExplorer",
      description:
        "A TypeScript-first GitHub explorer for browsing developer profiles, repositories, and key account information.",
      impact:
        "Focused on a fast information architecture and a smoother profile exploration flow for developer discovery.",
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
    "I am a passionate and results-driven Frontend Engineer with more than three years of experience building scalable, performant web applications using React, TypeScript, and Next.js.",
    "My work blends clean code, strong collaboration, and deep attention to interaction quality so that complex products feel intuitive and reliable.",
    "I care about delivering interfaces that are not only visually refined but also measurable in performance, accessibility, and business impact."
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
