export const profile = {
  name: "Dipto Thakur",
  role: "Full-Stack Developer",
  email: "dkt.officials@gmail.com",
  about:
    "I build fast, accessible, and thoughtfully engineered web applications with a focus on performance, usability, and long-term maintainability.",
    location: "Kolkata, India",
    experience: "3+ yrs",
    available: "Active",
  links: {
    portfolio: "https://diptothakur.vercel.app/",
    linkedin: "https://www.linkedin.com/in/diptothakur",
    medium: "https://medium.com/@dkt.officials",
    x: "https://x.com/dipto_thakur",
    instagram: "https://instagram.com/diptoism",
    devto: "https://dev.to/diptothakur",
    github: "https://github.com/dipto-thakur",
  },
};

export const techGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Figma", "Framer"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "Python"],
  },
  {
    label: "Data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Git", "GitHub", "AWS", "Google Cloud", "Vercel"],
  },
];

export type Project = {
  name: string;
  url?: string;
  repo?: string;
  pre: string;
  post: string;
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    url: "https://diptothakur.vercel.app/",
    pre: "Built ",
    post: ", an editorial personal site with a canvas-based visual identity and motion-driven sections.",
  },
  {
    name: "noirnoteAI",
    url: "https://noirnote.vercel.app/",
    repo: "https://github.com/dipto-thakur/NotaBackup",
    pre: "Built ",
    post: ", an AI notepad with multi-model routing and smart-format actions.",
  },
  {
    name: "GitPad",
    url: "https://gitnote.vercel.app/",
    repo: "https://github.com/dipto-thakur/gitnote",
    pre: "Built ",
    post: ", a portable, OAuth-based editor for browsing, editing, and committing a GitHub repo file.",
  },
  {
    name: "GitMark",
    repo: "https://github.com/dipto-thakur/gitmark",
    pre: "Built ",
    post: ", a Chrome extension that saves every bookmark as a plain, portable collection inside your own repo.",
  },
  {
    name: "Slotwise",
    url: "https://mentor-track.vercel.app/",
    repo: "https://github.com/dipto-thakur/",
    pre: "Built ",
    post: " for managing tutoring sessions and income.",
  },
  {
    name: "ForgeCV",
    url: "https://forgecv-nine.vercel.app/",
    repo: "https://github.com/dipto-thakur/CVForge",
    pre: "Built ",
    post: ", an AI CV builder with multi-model routing via OpenRouter, PDF export, and JD matching.",
  },
  {
    name: "Habitrisk",
    url: "https://habitrisk.vercel.app/",
    repo: "https://github.com/dipto-thakur/Addiction-Impact-Tracker",
    pre: "Built ",
    post: ", a NestJS habit and recovery tracker with 16 habit types, AI insights, and quick share.",
  },
  {
    name: "ReviewbuzzAI",
    url: "https://reviewbuzz.vercel.app/",
    repo: "https://github.com/dipto-thakur/reviewlanding",
    pre: "Built ",
    post: ", an AI review automation tool for businesses, with SEO optimization.",
  },
];

export const resources = [
  {
    name: "College-Assignments",
    url: "https://github.com/dipto-thakur/College-Assignments",
    description: "An archive of academic assignments, lab work, and mini projects, by semester.",
  },
  {
    name: "Web_devlopment_resources",
    url: "https://github.com/dipto-thakur/Web_devlopment_resources",
    description: "A curated list of UI libraries, animation tools, icon sets, and WebGL resources.",
  },
  {
    name: "web-dev-from-zero",
    url: "https://github.com/dipto-thakur/web-dev-from-zero",
    description: "Beginner HTML, CSS, and JS lessons with hands-on implementation.",
  },
];

export const writing = [
  {
    title: "Geo Is No Longer Optional: What Google Trends Taught Me About the Future of Search",
    outlet: "Medium",
    url: "https://medium.com/@dkt.officials",
  },
];

export const moreProjectsUrl = "https://github.com/dipto-thakur?tab=repositories";
