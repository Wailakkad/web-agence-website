export interface MockupProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  devices: string[];
  promptCount: number;
  previewImage: string;
  buyUrl: string;
  features: string[];
  whatsIncluded: string[];
  techStack: string[];
  sections: { title: string; content: string }[];
  mockupImages: { gradient: string; pageTitle: string; src?: string }[];
}

export const mockupProducts: MockupProduct[] = [
  {
    id: "premium-ai-mockup-prompt-pack",
    name: "Premium AI Mockup Prompt Pack — 23 AI Mockup Prompts for Web Designers & Agencies",
    category: "All Devices",
    description: "23 ultra-professional AI mockup prompts for web designers & agencies — laptop, desktop, mobile, marketing, and case study covers. No Photoshop needed.",
    longDescription: "Stop paying for mockup designers. This is a plug-and-play AI mockup prompt pack built for web designers, developers, and agencies who need premium, professional mockups in seconds — not hours.\n\n23 ultra-professional AI mockup prompts covering every device and use case:\n\n✅ Laptop & desktop mockup prompts (floating, studio, pedestal, editorial styles)\n✅ Mobile mockup prompts (hand-held, floating, lifestyle, outdoor shots)\n✅ Marketing & branding image prompts (social media covers, portfolio banners)\n✅ Bonus: Case study cover prompts for Behance-style project presentations\n\nCompatible with Midjourney, GPT Image (ChatGPT), Sora Image, and other AI image generation tools that support image uploads. Just copy the prompt, upload your website or app UI screenshot, and generate — no Photoshop, no design skills, no waiting on a freelance mockup designer.\n\nPerfect for:\n- Freelance web designers & developers building a premium portfolio\n- Web design and branding agencies needing constant client-ready content\n- No-code builders (Framer, Webflow, Bubble) who need fast, polished presentation\n- Anyone tired of flat screenshots that don't do their work justice\n\nOne-time purchase. Unlimited use on every project, forever.\n\nInstant PDF download after purchase.",
    price: 15,
    devices: ["Laptop", "Desktop", "Mobile"],
    promptCount: 23,
    previewImage: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1784467003/first-product-cover-img.jpg",
    buyUrl: "https://payhip.com/b/rPRzZ",
    features: [
      "23 Ultra-Professional AI Mockup Prompts",
      "Covers Laptop, Desktop & Mobile Devices",
      "Marketing & Branding Image Prompts",
      "Case Study Cover Prompts Included",
      "Compatible with Midjourney, GPT Image & Sora",
      "No Photoshop or Design Skills Needed",
      "One-Time Purchase, Unlimited Use",
      "Instant PDF Download"
    ],
    whatsIncluded: [
      "23 AI mockup prompts in organized categories",
      "Laptop & desktop prompts (floating, studio, pedestal, editorial)",
      "Mobile prompts (hand-held, floating, lifestyle, outdoor)",
      "Marketing & branding image prompts",
      "Case study cover prompts for Behance-style presentations"
    ],
    techStack: ["Midjourney", "GPT Image (ChatGPT)", "Sora Image"],
    sections: [
      {
        title: "What Makes This Pack Different:",
        content: "Stop paying for mockup designers. This is a plug-and-play AI mockup prompt pack built for web designers, developers, and agencies who need premium, professional mockups in seconds — not hours. Just copy the prompt, upload your website or app UI screenshot, and generate — no Photoshop, no design skills, no waiting on a freelance mockup designer."
      },
      {
        title: "Perfect For:",
        content: "Freelance web designers & developers building a premium portfolio. Web design and branding agencies needing constant client-ready content. No-code builders (Framer, Webflow, Bubble) who need fast, polished presentation. Anyone tired of flat screenshots that don't do their work justice."
      },
      {
        title: "Compatible Platforms:",
        content: "Works with Midjourney, GPT Image (ChatGPT), Sora Image, and other AI image generation tools that support image uploads. One-time purchase. Unlimited use on every project, forever. Instant PDF download after purchase."
      }
    ],
    mockupImages: [
      { gradient: "from-slate-900 to-zinc-800", pageTitle: "Laptop & Desktop Mockups" },
      { gradient: "from-zinc-100 to-white", pageTitle: "Mobile Device Mockups" },
      { gradient: "from-violet-900 to-zinc-900", pageTitle: "Marketing & Branding Images" }
    ]
  }
];
