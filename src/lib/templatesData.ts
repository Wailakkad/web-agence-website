export interface Template {
  id: string;
  name: string;
  category: string;
  style: string[];
  price: number;
  isFree: boolean;
  gradient: string;
  accentColor: string;        // hex color for preview section bg
  description: string;        // short description
  longDescription: string;    // full paragraph for product page
  tags: string[];
  previewUrl: string;
  buyUrl: string;
  image?: string;
  
  // Product page specific
  features: string[];         // checklist items
  includedPages: string[];    // numbered page list
  supportLinks: {
    label: string;
    href: string;
  }[];
  sections: {               // description sections
    title: string;
    content: string;         // highlighted text sections
  }[];
  mockupImages: {           // 3 preview mockups
    gradient: string;
    pageTitle: string;
    src?: string;
  }[];
  techStack: string[];       // React, Next.js, Tailwind etc
}

export const templates: Template[] = [
  {
    id: "dwize-flow",
    name: "YourBrand",
    category: "AI Automation Agency",
    style: ["Lime", "Modern", "Clean"],
    price: 39,
    isFree: false,
    gradient: "from-lime-400 via-emerald-500 to-indigo-600",
    accentColor: "#D4FF4F",
    description: "A premium, production-ready website template for AI automation agencies, web agencies, and digital service businesses.",
    longDescription: "YourBrand is a premium, production-ready website template for AI automation agencies, web agencies, and digital service businesses. Built with React 19 + Vite 6, Tailwind CSS v4, and Framer Motion, it features 9 fully coded pages, custom SPA routing, interactive contact forms, and beautiful responsive dashboard visualizers.",
    tags: ["React 19", "Vite 6", "Tailwind CSS v4", "TypeScript"],
    previewUrl: "https://ai-strategy-consulting-nine.vercel.app/",
    buyUrl: "https://payhip.com/b/vsolf",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340627/project_6.jpg",
    features: [
      "React 19 + Vite 6 Framework",
      "Tailwind CSS v4 Utility Styling",
      "Custom SPA Router (Zero Dependencies)",
      "Buttery-smooth Framer Motion Animations",
      "9 Comprehensive Pages Included",
      "Pill-shaped CTA Buttons",
      "Custom Dashboard Stat Mockups",
      "Responsive SVG Chart Atoms",
      "Typed Data Arrays Content Control",
      "100% Production Ready & Deployable"
    ],
    includedPages: [
      "Homepage (/) - Complete",
      "About (/about) - Complete",
      "Services Hub (/services) - Complete",
      "Service Detail (/services/[slug]) - Complete",
      "Pricing (/pricing) - Complete",
      "Case Studies (/case-studies) - Complete",
      "Case Study Detail (/case-studies/[slug]) - Complete",
      "Blog Listing (/blog) - Complete",
      "Blog Detail (/blog/[slug]) - Complete",
      "Contact (/contact) - Complete"
    ],
    supportLinks: [
      { label: "1. Brand Name Customization Guide", href: "#" },
      { label: "2. Content Control via Typed Arrays", href: "#" },
      { label: "3. Colors & Theme Configuration in CSS", href: "#" },
      { label: "4. Contact Form Integration Guide", href: "#" }
    ],
    sections: [
      {
        title: "YourBrand Design System:",
        content: "Features a modern premium visual style utilizing a Lime Accent (#D4FF4F), Blue Accent (#5EA8E8), deep dark sections (zinc-900 / black), white bases, rounded-2xl border radius, and pill-shaped action buttons with circular arrow badges."
      },
      {
        title: "Shared Components & Modules:",
        content: "Includes reusable components such as CtaButton, Eyebrow labels, StatMockup dashboard controls, compact CTA banners, and a rich library of inline SVG chart atoms (Line, Bar, Radar, and Donut charts)."
      },
      {
        title: "Fully Optimized Static Production Builds:",
        content: "Ready to deploy in seconds. Run npm run build and deploy the compiled high-performance dist/ directory straight to Vercel, Netlify, Cloudflare Pages, AWS S3, or any preferred hosting service."
      }
    ],
    mockupImages: [
      { gradient: "from-amber-100 to-rose-200", pageTitle: "Case Studies Feed", src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782387442/Ultra-realistic_editorial_product_mockup_photograph_202606152222.jpg" },
      { gradient: "from-pink-500 to-indigo-600", pageTitle: "Hero Landing Stage", src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782387442/STRICT_RULE__The_laptop_screen_202606151919_1.jpg" },
      { gradient: "from-slate-50 to-white", pageTitle: "Services Stack", src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782387442/GLOBAL_RULES___MOCKUP_IMAGE_202606151917.jpg" }
    ],
    techStack: ["React 19", "Vite 6", "Tailwind v4", "TypeScript", "Framer Motion", "Lucide React"]
  },
  {
    id: "aigent-flow",
    name: "AI Agency Landing Page",
    category: "Landing Page",
    style: ["Dark", "Modern", "Cinematic"],
    price: 99,
    isFree: false,
    gradient: "from-cyan-500 via-blue-600 to-indigo-950",
    accentColor: "#00c6ff",
    description: "A dark, cinematic landing page for AI and digital agencies.",
    longDescription: "AI Agency Landing Page is a premium, dark, cinematic landing page template for AI and digital agencies. Features a full-screen video background, glassmorphism UI widgets, scroll-driven parallax, character-level text animations, and a complete set of agency sections.",
    tags: ["React 19", "Vite 6", "Tailwind CSS v4", "TypeScript 5.8"],
    previewUrl: "https://new-ai-agency-llanding-page.vercel.app/",
    buyUrl: "https://payhip.com/b/Kamg3",
    image: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782340631/project_1.jpg",
    features: [
      "Cinematic hero with video bg & overlay grids",
      "Premium custom easing scroll reveals & split text",
      "Scroll-driven parallax motion on cards & elements",
      "Interactive nav with animated spring physics indicator",
      "15+ custom agency sections & interactive carousels",
      "Responsive glassmorphism panels & ambient glows",
      "4 fully functional responsive modal overlays",
      "Testimonial slider with directional transitions",
      "Interactive project filter with layout animations",
      "Full Tailwind CSS v4 support & custom index themes"
    ],
    includedPages: [
      "Navigation Menu Component",
      "Hero (video + headline + CTAs)",
      "Right Sidebar Widgets",
      "Floating Stat Cards",
      "Team Intro Section",
      "Services Section",
      "Featured Project Case Study",
      "Founder Bio Section",
      "Achievements & Milestones",
      "Creative Expandable Team Cards",
      "Testimonial Slider Carousel",
      "Pricing Plans",
      "Contact Form & Footer",
      "Pricing, Services, Booking & Projects Modals"
    ],
    supportLinks: [
      { label: "1. Colors & Theme Customization (#00c6ff)", href: "#" },
      { label: "2. Managing Dynamic Content Arrays", href: "#" },
      { label: "3. Video Background Setup Guides", href: "#" },
      { label: "4. Image and Media Link Replacements", href: "#" }
    ],
    sections: [
      {
        title: "Dark, Cinematic Atmosphere:",
        content: "Styled with glassmorphism panels, deep dark canvas gradients (#080808, #000005, #14141e), frosted headers, and a vibrant cyan accent (#00c6ff) providing striking visual rhythm."
      },
      {
        title: "Advanced Framer Motion Easing:",
        content: "Leverages a customized spring easing curve [0.16, 1, 0.3, 1] for ultra-premium character-level splits, word blurs, and parallax scrolling transformations."
      },
      {
        title: "Modals & Multi-purpose Triggers:",
        content: "Equipped with interactive pricing, services, project, and booking modals designed for maximum touch-target compliance and high-performance engagement rates."
      }
    ],
    mockupImages: [
      { gradient: "from-slate-950 via-zinc-900 to-black", pageTitle: "Cinematic Product View", src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782387187/Hyperrealistic_CGI_product_photography__Octane_202606241215.jpg" },
      { gradient: "from-slate-900 to-zinc-950", pageTitle: "Premium Octane Detail", src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782387187/Hyperrealistic_CGI_product_photography__Octane_202606241215_2.jpg" },
      { gradient: "from-zinc-950 via-cyan-950/20 to-black", pageTitle: "Mobile View Layout", src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782387187/Use_the_exact_uploaded_mobile_202606241740_1.jpg" }
    ],
    techStack: ["React 19", "Vite 6", "Tailwind v4", "TypeScript 5.8", "Framer Motion", "Lucide React"]
  }
];

export const categories = [
  "Agency",
  "Agriculture",
  "App",
  "Blog",
  "E-Commerce",
  "Education",
  "Finance",
  "Healthcare",
  "Home Service",
  "Landing Page",
  "Portfolio",
  "SaaS",
  "Startup",
  "Technology",
  "Transport"
];

export const styles = [
  "Creative",
  "Clean",
  "Minimal",
  "Modern",
  "Casual",
  "Dark"
];
