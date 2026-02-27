export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  featured: boolean;
  coverColor: string;
  description: string;
  overview: string;
  challenge: string;
  process: string;
  outcomes: string[];
  link?: string;
  codeLink?: string;
};

export const projects: Project[] = [
  {
    slug: "aether",
    title: "Aether",
    tagline: "Designing clarity into complex data.",
    category: "Product Design",
    year: "2024",
    role: "Lead Designer",
    tools: ["Figma", "Protopie", "Notion"],
    featured: true,
    coverColor: "#1A1F2E",
    description:
      "End-to-end redesign of a B2B analytics platform serving 12,000+ users. Reduced time-to-insight by 40%.",
    overview:
      "Aether is a B2B analytics platform that aggregates data from dozens of sources into a single decision-making interface. The product had grown organically over four years and accumulated significant UX debt — navigation was inconsistent, information hierarchy was unclear, and power users were spending too much time finding what they needed.",
    challenge:
      "The core challenge was balancing the needs of two distinct user types: analysts who needed deep access to raw data, and executives who needed high-level summaries without noise. A single interface had to serve both without compromise.",
    process:
      "I started with a two-week discovery phase: shadowing sessions with analysts, exit interviews with churned users, and a competitive audit. The biggest finding was that 80% of sessions started the same way — users navigating to the same 3–4 reports. I used this to anchor a new information architecture around 'home bases' rather than menus.",
    outcomes: [
      "40% reduction in time-to-insight (measured via session recordings)",
      "Nav click-depth reduced from 4.2 to 1.8 average",
      "NPS improved from 34 to 61 over two quarters post-launch",
      "Shipped in 6 weeks from kickoff to production",
    ],
  },
  {
    slug: "vessel",
    title: "Vessel",
    tagline: "A fintech app designed and built from scratch.",
    category: "Product Design · Coded",
    year: "2024",
    role: "Designer + Developer",
    tools: ["Figma", "React Native", "TypeScript", "Supabase"],
    featured: true,
    coverColor: "#0F1F1A",
    description:
      "Mobile fintech app for freelancers to track income and taxes in real time. Designed, prototyped, and shipped solo.",
    overview:
      "Vessel is a mobile app built for independent workers who struggle with the administrative overhead of self-employment — specifically tracking irregular income and estimating taxes owed in real time. I built this as a side project to solve a problem I had personally.",
    challenge:
      "The challenge was twofold: design a financial interface that felt calm (not anxiety-inducing) and build it without a backend team. I handled the full stack — design system in Figma, React Native for the app, Supabase for auth and data.",
    process:
      "Prototyped the core flow in Figma first, validated with 8 freelancer interviews, then built. The key design decision was hiding complexity — Vessel does the tax math in the background and surfaces a single 'set aside' number rather than overwhelming users with brackets and percentages.",
    outcomes: [
      "Shipped v1.0 in 10 weeks, solo",
      "120 waitlist signups before launch via a single tweet",
      "4.6 App Store rating at launch",
      "Used to validate a product hypothesis before seeking funding",
    ],
    codeLink: "https://github.com",
  },
  {
    slug: "fieldwork",
    title: "Fieldwork DS",
    tagline: "A design system built to scale across products.",
    category: "Design Systems",
    year: "2023",
    role: "Systems Designer",
    tools: ["Figma", "Storybook", "Tokens Studio", "React"],
    featured: true,
    coverColor: "#1C1A0F",
    description:
      "Designed and documented a multi-brand design system used by 3 products and a team of 12 across two continents.",
    overview:
      "Fieldwork was born out of chaos. Three products at the company shared no components, no tokens, no patterns — every new feature required designing and building from scratch. I proposed and led the creation of a unified design system over six months.",
    challenge:
      "The hardest part wasn't the design — it was alignment. Each product team had different opinions, different tech stacks, and different priorities. Building the system required as much stakeholder management as it did component design.",
    process:
      "Started with an audit: I catalogued every component in production across all three products. Found 47 distinct button variants. Used this data to make the case for standardization. Built the token layer first (color, spacing, type), then components, then documentation.",
    outcomes: [
      "3 products unified under one system in 6 months",
      "Component adoption at 94% within first quarter post-launch",
      "Reduced design-to-dev handoff time by ~3 days per sprint",
      "Team of 12 designers and engineers contributing to the system",
    ],
  },
  {
    slug: "drift",
    title: "Drift",
    tagline: "A focus tool built and shipped in 72 hours.",
    category: "Side Project · Coded",
    year: "2023",
    role: "Designer + Developer",
    tools: ["Figma", "Next.js", "Tailwind CSS", "Vercel"],
    featured: false,
    coverColor: "#1A0F1F",
    description:
      "A minimalist focus timer and ambient sound mixer. Designed, built, and deployed in a weekend.",
    overview:
      "Drift is a browser-based focus tool that combines a Pomodoro timer with a curated ambient sound mixer. The goal was to make the best-looking, simplest focus tool on the web — nothing more, nothing less.",
    challenge:
      "The constraint was the timeline — 72 hours from idea to deployed product. Every design decision had to also be a development decision. No time for anything that didn't earn its place.",
    process:
      "Spent the first 3 hours on a Figma mockup of the core interface. The next 7 hours building the Next.js app. The rest was sound curation, polish, and deployment via Vercel.",
    outcomes: [
      "Live and deployed within 72 hours",
      "Featured on Product Hunt — top 5 of the day",
      "2,400 unique visitors in the first week",
      "Zero dependencies beyond Next.js and Tailwind",
    ],
    link: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    slug: "stratum",
    title: "Stratum",
    tagline: "Brand identity for a climate infrastructure company.",
    category: "Brand · Visual Design",
    year: "2023",
    role: "Lead Designer",
    tools: ["Figma", "Illustrator", "After Effects"],
    featured: false,
    coverColor: "#0F1A1F",
    description:
      "Full brand identity system for an early-stage climate tech company — wordmark, color system, motion principles, and guidelines.",
    overview:
      "Stratum is a climate infrastructure company building software for carbon monitoring and reporting. They came to me pre-Series A needing a brand identity that could take them from startup to enterprise credibility.",
    challenge:
      "Climate tech has a visual language problem — it either looks like a green NGO or a generic SaaS product. Stratum needed to feel scientific, credible, and modern without falling into either trap.",
    process:
      "Started with a positioning workshop with the founding team. Extracted three brand pillars: precision, transparency, scale. Built the wordmark around a geometric letterform that referenced geological strata — the product's core metaphor.",
    outcomes: [
      "Brand launched alongside Series A announcement",
      "Applied across pitch decks, website, and product UI",
      "Positive reception from investors and early customers",
      "Full brand guidelines delivered for internal use",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
