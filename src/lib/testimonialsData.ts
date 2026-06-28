export interface Testimonial {
  id: number;
  quote: string;
  fullQuote: string;
  name: string;
  title: string;
  company: string;
  location: string;
  avatar: string;
  avatarPlaceholder: string; // gradient fallback
  platform: string; // "Clutch" | "Upwork" | "LinkedIn" | "Direct"
  rating: number;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote: "Timely delivery and exceptional quality. NextCraft built our SaaS dashboard in React and it performs flawlessly. They understood our vision immediately and execut...",
    fullQuote: "Timely delivery and exceptional quality. NextCraft built our SaaS dashboard in React and it performs flawlessly. They understood our vision immediately and executed with precision. Will definitely work with them again.",
    name: "Alex Morrison",
    title: "CEO",
    company: "TechLaunch",
    location: "United States",
    avatar: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058955/Generador_de_Fotos_Profesionales_AI___Cientos_de_Fotos_Profesionales_en_HD_en_15_Minutos.jpg",
    avatarPlaceholder: "from-blue-400 to-blue-600",
    platform: "Clutch",
    rating: 5
  },
  {
    id: 2,
    quote: "NextCraft and their team have been outstanding to work with. They delivered a pixel-perfect Next.js website that exceeded expectations. Their React expertise and attention to detail in...",
    fullQuote: "NextCraft and their team have been outstanding to work with. They delivered a pixel-perfect Next.js website that exceeded expectations. Their React expertise and attention to detail is unmatched.",
    name: "Luca Romano",
    title: "Founder",
    company: "DigitalStudio",
    location: "Italy",
    avatar: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058956/Portrait_of_a_confident_young_smart_looking_man___Premium_AI-generated_image.jpg",
    avatarPlaceholder: "from-orange-400 to-red-500",
    platform: "Upwork",
    rating: 5
  },
  {
    id: 3,
    quote: "Incredible developer — their expertise in React and Next.js is truly praiseworthy. Whenever we had a technical challenge or needed a custom component, they delivered beyond expect...",
    fullQuote: "Incredible developer — their expertise in React and Next.js is truly praiseworthy. Whenever we had a technical challenge or needed a custom component, they delivered beyond expectations every time.",
    name: "Sarah Mitchell",
    title: "Product Manager",
    company: "ScaleUp",
    location: "United Kingdom",
    avatar: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058953/Cada_detalhe_comunica___Um_bom_posicionamento_n%C3%A3o.jpg",
    avatarPlaceholder: "from-pink-400 to-purple-500",
    platform: "LinkedIn",
    rating: 5
  },
  {
    id: 4,
    quote: "We purchased a Next.js template from NextCraft and had it customized to our brand. The process was seamless, fast, and the result was stunning. Our conversion rate jumped 40% after...",
    fullQuote: "We purchased a Next.js template from NextCraft and had it customized to our brand. The process was seamless, fast, and the result was stunning. Our conversion rate jumped 40% after launch.",
    name: "James Park",
    title: "Marketing Director",
    company: "GrowthHQ",
    location: "Canada",
    avatar: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058954/Indian_Guy_On_Grey_Sweatshirt_And_Tab.jpg",
    avatarPlaceholder: "from-teal-400 to-cyan-500",
    platform: "Direct",
    rating: 5
  },
  {
    id: 5,
    quote: "The React template we bought was worth every penny. Clean code, perfect documentation, and when we needed help customizing it, the support was instant and professional...",
    fullQuote: "The React template we bought was worth every penny. Clean code, perfect documentation, and when we needed help customizing it, the support was instant and professional. 10/10 would recommend.",
    name: "Nina Schmidt",
    title: "Startup Founder",
    company: "LaunchPad",
    location: "Germany",
    avatar: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058956/576742296075234124.jpg",
    avatarPlaceholder: "from-violet-400 to-indigo-500",
    platform: "Clutch",
    rating: 5
  },
  {
    id: 6,
    quote: "Best investment we made for our web presence. NextCraft built our entire website in Next.js from scratch — blazing fast, SEO optimized, and looks absolutely premium...",
    fullQuote: "Best investment we made for our web presence. NextCraft built our entire website in Next.js from scratch — blazing fast, SEO optimized, and looks absolutely premium. Our organic traffic grew 3x.",
    name: "Omar Hassan",
    title: "E-commerce Owner",
    company: "StoreKit",
    location: "UAE",
    avatar: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058956/hamo_artist.jpg",
    avatarPlaceholder: "from-emerald-400 to-green-500",
    platform: "Upwork",
    rating: 5
  },
  {
    id: 7,
    quote: "Working with NextCraft was a game-changer. They took our outdated site and rebuilt it in React with animations that wow every visitor. Professional, communicative, and talented...",
    fullQuote: "Working with NextCraft was a game-changer. They took our outdated site and rebuilt it in React with animations that wow every visitor. Professional, communicative, and talented team.",
    name: "Priya Sharma",
    title: "Brand Manager",
    company: "PixelStudio",
    location: "India",
    avatar: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058954/Neon_Reflection__Strength_in_Thought.jpg",
    avatarPlaceholder: "from-rose-400 to-pink-500",
    platform: "LinkedIn",
    rating: 5
  }
];
