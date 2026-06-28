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
    label: "Templates",
    href: "#templates",
    dropdownItems: [
      { label: "SaaS Boilerplates", href: "#templates", description: "Complete launchpads for modern startups and apps" },
      { label: "Agency & Portfolio", href: "#templates", description: "Elegant showcases for creative studios" },
      { label: "E-Commerce Themes", href: "#templates", description: "Blazing-fast digital storefronts" },
    ],
  },
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
