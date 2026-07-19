export interface NavItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string; description?: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdownItems: [
      { label: "React & Next.js Development", href: "#services", description: "High performance bespoke applications built to scale" },
      { label: "Premium UI/UX Design", href: "#services", description: "Bespoke design interfaces engineered for high conversion" },
      { label: "SEO & Speed Audit", href: "#services", description: "Core Web Vitals optimization achieving 100/100 scores" },
    ],
  },
  {
    label: "Store",
    href: "#templates",
    dropdownItems: [
      { label: "Website Templates", href: "#templates", description: "Premium React & Next.js templates for fast launches" },
      { label: "AI Mockup Prompts", href: "#templates", description: "AI prompt packs for photorealistic device mockups" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export interface BrandLogo {
  name: string;
  size: "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl";
}

export const BRAND_LOGOS_ROW_1: BrandLogo[] = [
  { name: "TechCorp", size: "text-lg" },
  { name: "DesignHub", size: "text-xl" },
  { name: "StartupX", size: "text-base" },
  { name: "BuildCo", size: "text-lg" },
  { name: "LaunchPad", size: "text-xl" },
  { name: "ScaleUp", size: "text-base" },
  { name: "GrowthHQ", size: "text-lg" },
  { name: "PixelStudio", size: "text-2xl" },
  { name: "WebForge", size: "text-base" },
  { name: "CodeBridge", size: "text-xl" },
];

export const BRAND_LOGOS_ROW_2: BrandLogo[] = [
  { name: "PixelStudio", size: "text-2xl" },
  { name: "CodeBridge", size: "text-xl" },
  { name: "LaunchPad", size: "text-xl" },
  { name: "WebForge", size: "text-base" },
  { name: "ScaleUp", size: "text-base" },
  { name: "TechCorp", size: "text-lg" },
  { name: "DesignHub", size: "text-xl" },
  { name: "StartupX", size: "text-base" },
  { name: "GrowthHQ", size: "text-lg" },
  { name: "BuildCo", size: "text-lg" },
];

export const SERVICE_IMAGE_REACT_TEMPLATE = "https://res.cloudinary.com/dhkyla1rv/image/upload/v1781907519/first_right.jpg";
export const SERVICE_IMAGE_WEB_DEV = "https://res.cloudinary.com/dhkyla1rv/image/upload/v1781907459/thirty_right.png";
export const SERVICE_IMAGE_ANALYTICS = "/src/assets/images/analytics_dashboard_1781895597439.jpg";
