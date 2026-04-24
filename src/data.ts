import { ProjectData, ServiceData } from "./types";

export const projectsData: ProjectData[] = [
  {
    id: "premium-headless-ecommerce",
    title: "Premium Headless E-Commerce Storefront",
    description: "A high-performance headless e-commerce storefront designed for maximum commercial utility. It features a completely dynamic product filtering system and real-time total calculations for a seamless shopping experience.",
    techStack: ["Next.js", "Tailwind CSS", "Zustand", "Stripe API"],
    readmeHighlight: "The cart state logic is centralized using Zustand, allowing for a highly responsive slide-out cart that syncs instantly across tabs and optimizes re-renders during state mutations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "high-converting-saas",
    title: "High-Converting SaaS Landing Page",
    description: "A meticulously crafted B2B SaaS landing page optimized for SEO and conversion rates. It utilizes smooth scroll animations and responsive feature grids to clearly communicate product value to marketing clients.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    readmeHighlight: "An interactive Monthly/Annual pricing toggle is implemented using Framer Motion's AnimatePresence and layout animations, creating a delightful and completely smooth pricing state transition.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "local-business-booking",
    title: "Local Business Service Booking System",
    description: "A mobile-first scheduling web application tailored for service-based businesses. It provides users with a clean, interactive calendar interface and robust form validation to ensure reliable data capture.",
    techStack: ["React", "Tailwind CSS", "React-Calendar", "Zod"],
    readmeHighlight: "The complex multi-step booking flow maintains context cleanly across stages using a tightly typed state machine, ensuring that user details, selected dates, and services are preserved without messy prop-drilling.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600&h=400",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const servicesData: ServiceData[] = [
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    description: "Building fast, scalable web applications using React and Next.js. I prioritize aggressive Lighthouse performance optimization to ensure lightning-fast load times and seamless user interactions.",
    icon: "code"
  },
  {
    id: "headless-ecommerce",
    title: "Headless E-Commerce",
    description: "Developing modern, decoupled e-commerce architectures. I focus on creating high-performance custom cart states and tailored shopping experiences designed to maximize conversion rates.",
    icon: "shopping-cart"
  },
  {
    id: "saas-landing-pages",
    title: "SaaS Landing Pages",
    description: "Translating Figma designs into pixel-perfect, responsive UIs. I integrate smooth scroll animations and clear information hierarchies to craft landing pages that turn site visitors into active users.",
    icon: "layout"
  }
];
