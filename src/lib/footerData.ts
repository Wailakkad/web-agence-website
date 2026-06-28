export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterData {
  brand: {
    name: string;
    description: string;
    email: string;
    partnerBadge: string;
    socials: SocialLink[];
  };
  columns: FooterColumn[];
  legal: FooterLink[];
  copyright: string;
  stats: {
    rating: string;
    ratingPlatforms: string;
    clientCount: string;
    clientLabel: string;
  };
}

export const footerData: FooterData = {
  brand: {
    name: "NextCraft.",
    description: "We build high-performance React & Next.js websites, sell premium templates, and help fast-growing brands launch faster, convert better, and scale smarter.",
    email: "akkadouail8@gmail.com",
    partnerBadge: "Next.js Expert Partner",
    socials: [
      { platform: "LinkedIn", href: "#", icon: "linkedin" },
      { platform: "GitHub", href: "#", icon: "github" },
      { platform: "Twitter", href: "#", icon: "twitter" },
      { platform: "Dribbble", href: "#", icon: "dribbble" },
      { platform: "Behance", href: "#", icon: "behance" },
    ]
  },
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Why Choose Us", href: "#new_why_us_section" },
        { label: "Services", href: "#services" },
        { label: "Templates", href: "#templates" },
        { label: "Contact Us", href: "#contact" },
      ]
    },
    {
      heading: "Services",
      links: [
        { label: "React Development", href: "/services/react" },
        { label: "Next.js Development", href: "/services/nextjs" },
        { label: "UI/UX Design", href: "/services/design" },
        { label: "Website Maintenance", href: "/services/maintenance" },
        { label: "SEO & Performance", href: "/services/seo" },
        { label: "Template Customization", href: "/services/customization" },
        { label: "SaaS Website Build", href: "/services/saas" },
        { label: "Landing Pages", href: "/services/landing-pages" },
      ]
    },
    {
      heading: "Solutions & Teams",
      links: [
        { label: "Marketing & Growth Teams", href: "/solutions/marketing" },
        { label: "Startups & Freelancers", href: "/solutions/startups" },
        { label: "Business & Operations", href: "/solutions/business" },
        { label: "Creative & Design Teams", href: "/solutions/creative" },
        { label: "E-Commerce Brands", href: "/solutions/ecommerce" },
        { label: "SaaS Companies", href: "/solutions/saas" },
      ]
    }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cancellation & Refund Policy", href: "/refund" },
  ],
  copyright: "© 2026 NextCraft. All Rights Reserved.",
  stats: {
    rating: "4.9",
    ratingPlatforms: "Clutch, Trustpilot",
    clientCount: "500+",
    clientLabel: "Founders & Developers"
  }
};
