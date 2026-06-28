export interface Project {
  id: number;
  name: string;
  category: string;
  industry: string;
  image?: string;
  placeholderGradient: string;
  tools: string[];
  featured: boolean;
  link: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    name: "Skoop",
    category: "SaaS Platform",
    industry: "Advertising Services",
    placeholderGradient: "from-blue-600 via-indigo-600 to-violet-700",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340631/project_1.jpg",
    tools: ["react", "nextjs", "tailwind"],
    featured: true,
    link: "#"
  },
  {
    id: 2,
    name: "WestgateChildcare",
    category: "E-Learning",
    industry: "Education",
    placeholderGradient: "from-cyan-500 via-blue-500 to-indigo-600",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340625/project_2.jpg",
    tools: ["react", "tailwind", "typescript"],
    featured: false,
    link: "#"
  },
  {
    id: 3,
    name: "Dock2UK",
    category: "Healthcare App",
    industry: "Health Care",
    placeholderGradient: "from-emerald-400 via-teal-500 to-blue-600",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340632/project_3.jpg",
    tools: ["nextjs", "typescript", "gsap"],
    featured: false,
    link: "#"
  },
  {
    id: 4,
    name: "CircleDNA",
    category: "Fintech Dashboard",
    industry: "Health Care",
    placeholderGradient: "from-amber-400 via-orange-500 to-rose-600",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340635/project_4.jpg",
    tools: ["react", "gsap", "framer"],
    featured: false,
    link: "#"
  },
  {
    id: 5,
    name: "StoreKit",
    category: "E-Commerce Template",
    industry: "Retail & Commerce",
    placeholderGradient: "from-teal-400 via-cyan-500 to-blue-500",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340631/project_5.jpg",
    tools: ["nextjs", "tailwind", "typescript"],
    featured: false,
    link: "#"
  },
  {
    id: 6,
    name: "AgencyPro",
    category: "Agency Website",
    industry: "Creative Agency",
    placeholderGradient: "from-violet-500 via-purple-600 to-pink-600",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340627/project_6.jpg",
    tools: ["react", "framer", "tailwind"],
    featured: false,
    link: "#"
  }
];
