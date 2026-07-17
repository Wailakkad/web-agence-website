import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Code2,
  Cpu,
  Bot,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  Search,
  CheckCircle2,
  Calendar,
  Lock,
  ChevronRight,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Check,
  HelpCircle,
  MessageSquare,
  Activity,
  Workflow,
  MousePointerClick
} from "lucide-react";
import { Highlight } from "./ui/Highlight";
import { TagPills } from "./ui/TagPills";
import { ProgressCircle } from "./ui/ProgressCircle";
import { ChecklistItem } from "./ui/ChecklistItem";

// Types for the services details
interface ServiceDetail {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  whatsIncluded: string[];
  benefits: string[];
  deliverables: string[];
  timeline: string;
  ctaText: string;
}

const SERVICES_DETAILS: ServiceDetail[] = [
  {
    id: "website-building",
    badge: "Development",
    title: "Website Building & Rebuild",
    headline: "New Websites & Performance Rebuilds That Drive Results",
    description: "Whether you need a brand new website from scratch or an existing site that needs a complete performance and design overhaul, we deliver fast, responsive, SEO-optimized websites. Every build is mobile-first, accessibility-minded, and engineered to convert visitors into customers.",
    whatsIncluded: [
      "New website build from scratch",
      "Full website rebuild & performance upgrade",
      "Responsive mobile-first design",
      "SEO optimization & meta tags",
      "Contact form & lead capture integration",
      "Speed optimization — 90+ Lighthouse"
    ],
    benefits: [
      "Launch a modern, fast-loading web presence",
      "Rebuild existing sites without losing SEO equity",
      "Sub-second page load times on all devices",
      "Perfect Core Web Vitals scores out of the box"
    ],
    deliverables: [
      "Production-ready website codebase",
      "Responsive design across all breakpoints",
      "SEO-optimized sitemap & metadata",
      "Deployment & hosting configuration"
    ],
    timeline: "5 - 14 Days",
    ctaText: "Start My Website"
  },
  {
    id: "ai-chatbot-rag",
    badge: "AI & Automation",
    title: "AI Chatbot & RAG Agent",
    headline: "Intelligent Automation That Scales Your Business 24/7",
    description: "Deploy AI-powered chatbots that handle customer inquiries, qualify leads, and provide instant support. Or build RAG (Retrieval-Augmented Generation) agents that pull answers from your knowledge base, documents, and data — giving your customers accurate, contextual responses at any hour.",
    whatsIncluded: [
      "Custom AI chatbot development",
      "RAG agent with knowledge base integration",
      "Lead qualification & capture flows",
      "Multi-platform deployment (web, WhatsApp)",
      "Custom training on your business data",
      "Analytics & conversation logging"
    ],
    benefits: [
      "Automate customer support 24/7 without hiring",
      "Qualify and capture leads automatically",
      "Reduce response time from hours to seconds",
      "Scale customer service without scaling headcount"
    ],
    deliverables: [
      "Deployed AI chatbot or RAG agent",
      "Trained knowledge base integration",
      "Admin dashboard for monitoring",
      "Integration guide & documentation"
    ],
    timeline: "5 - 14 Days",
    ctaText: "Build My AI Agent"
  },
  {
    id: "web-design",
    badge: "Design",
    title: "Web Design & Branding",
    headline: "Pixel-Perfect Design Systems That Build Trust",
    description: "Great design is the difference between a visitor and a customer. We craft beautiful, conversion-focused web designs paired with complete brand identity systems — logos, color palettes, typography, and brand guidelines that make your business look professional and trustworthy from day one.",
    whatsIncluded: [
      "Custom web design (UI/UX)",
      "Logo design & brand identity",
      "Color palette & typography selection",
      "Full brand kit with guidelines",
      "Figma design files & prototypes",
      "Social media brand assets"
    ],
    benefits: [
      "Stand out with a unique, professional brand identity",
      "Consistent visual presence across all platforms",
      "Higher trust and credibility with polished design",
      "Design systems that scale with your business"
    ],
    deliverables: [
      "Complete Figma design files",
      "Brand identity guide (logo, colors, fonts)",
      "Full brand kit package",
      "Social media template assets"
    ],
    timeline: "5 - 10 Days",
    ctaText: "Request Design"
  },
  {
    id: "social-media-templates",
    badge: "Content",
    title: "Social Media Marketing & Template Customization",
    headline: "Scroll-Stopping Visuals & Polished Templates",
    description: "Get consistent, professional social media marketing images designed to grow your brand presence. Plus, we customize any template — bought or existing — to match your brand perfectly, with fast turnaround and pro-level polish.",
    whatsIncluded: [
      "Social media image design packs",
      "Ad creative & promotional graphics",
      "Template customization & brand tailoring",
      "Content calendar graphics",
      "Brand consistency review",
      "Fast turnaround delivery"
    ],
    benefits: [
      "Save hours with ready-to-post professional designs",
      "Maintain consistent brand aesthetics across platforms",
      "Launch customized templates without starting from zero",
      "Professional look without hiring a full-time designer"
    ],
    deliverables: [
      "Social media image pack (JPEG/PNG)",
      "Customized template codebase",
      "Brand style guide for social posts",
      "Source files for future edits"
    ],
    timeline: "3 - 7 Days",
    ctaText: "Get My Visuals"
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("website-building");
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const activeService = SERVICES_DETAILS.find((s) => s.id === activeTab) || SERVICES_DETAILS[0];

  const caseStudies = [
    {
      title: "LocalBizAI — Website Rebuild + AI Chatbot",
      before: { speed: "5.2s", conv: "0.8%", bounce: "62%" },
      after: { speed: "0.6s", conv: "4.2%", bounce: "22%" },
      metric: "+425% Leads",
      description: "We rebuilt LocalBizAI's slow legacy site into a modern, fast-loading website and deployed an AI chatbot that captures and qualifies leads 24/7 — cutting response time from hours to seconds."
    },
    {
      title: "BrightBrand Co. — Full Branding & Social",
      before: { speed: "3.8s", conv: "1.5%", bounce: "48%" },
      after: { speed: "0.5s", conv: "5.1%", bounce: "19%" },
      metric: "+240% Engagement",
      description: "BrightBrand needed a full identity overhaul. We delivered a complete brand kit (logo, colors, fonts), redesigned their website, and created a 30-day social media image pack that tripled their Instagram engagement."
    }
  ];

  const servicesFaqs = [
    {
      id: 1,
      q: "How does your pricing work?",
      a: "We work on flat, project-based pricing. Plans start at $500 for a Starter package and go up to $1,500 for a full Pro build. You'll receive a locked, guaranteed proposal before any work begins — no hidden fees, no hourly surprises."
    },
    {
      id: 2,
      q: "What's the difference between website building and website rebuild?",
      a: "Website building is a brand new site from scratch. A website rebuild is for businesses that already have a website but want to upgrade its design, speed, and functionality. We improve what you have without losing your SEO equity."
    },
    {
      id: 3,
      q: "What is a RAG agent and how is it different from a chatbot?",
      a: "A chatbot handles conversations using predefined flows or AI. A RAG (Retrieval-Augmented Generation) agent goes further — it searches your knowledge base, documents, or database to retrieve accurate information and answer complex questions. Think of a chatbot as a receptionist and a RAG agent as a librarian with instant recall."
    },
    {
      id: 4,
      q: "Can you design social media content for my specific platforms?",
      a: "Yes. We create custom social media marketing image packs tailored to your brand and optimized for each platform — Instagram, Facebook, LinkedIn, TikTok, and more. Sizes, formats, and styles are all platform-specific."
    },
    {
      id: 5,
      q: "Do you offer branding design separately?",
      a: "Absolutely. You can get a logo, color palette, typography, and full brand kit as a standalone service, or bundled with any of our web or marketing packages."
    },
    {
      id: 6,
      q: "Do you offer post-launch maintenance and support?",
      a: "Yes. Every project includes post-launch support — 7 days for Starter, 14 days for Growth, and 30 days for Pro plans. Ongoing maintenance and content update plans are available."
    }
  ];

  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen pt-24 pb-12 overflow-hidden selection:bg-violet-100 selection:text-violet-900 font-sans">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-20 left-1/10 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-1/10 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-violet-50/40 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION 1 — HERO */}
      <section className="relative py-16 sm:py-24 md:py-28 overflow-hidden border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-50 text-violet-700 text-xs font-bold tracking-widest uppercase rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Full-Service Digital Agency
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-[0.95] text-gray-950 text-balance">
                Websites. AI. Branding. Design. <span className="text-violet-600">All in One Place.</span>
              </h1>
              
              <p className="text-gray-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance">
                We build websites, AI chatbots, RAG agents, brand identities, and social media visuals — everything your business needs to look professional, automate growth, and scale online.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <a
                  href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300 cursor-pointer"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  onClick={() => {
                    const el = document.getElementById("results_section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-950 font-bold text-sm px-6 py-3.5 hover:bg-gray-50 rounded-full transition-all duration-300 cursor-pointer"
                >
                  View Live Results
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">100+</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Projects Delivered</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">8 Services</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Under One Roof</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-[#fff7ed] text-orange-500 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">$500</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Starting Price</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">3-21 Days</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Fast Delivery</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Visual Design Panel */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 select-none">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Simulated Web Application Canvas with perspective */}
                <div className="aspect-[4/4.5] rounded-3xl overflow-hidden border border-gray-100 bg-white/50 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-6 relative flex flex-col justify-between">
                  
                  {/* Top Bar Indicators */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase font-bold bg-gray-50 px-3 py-1 rounded-full border border-gray-100">framelab.io/services</span>
                    <Lock className="w-3.5 h-3.5 text-gray-300" />
                  </div>

                  {/* Dynamic Interactive Panel */}
                  <div className="my-6 space-y-4">
                    <div className="flex justify-between items-center bg-violet-50/40 p-4 rounded-2xl border border-violet-100/50">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#0a0a0a] flex items-center justify-center shrink-0 text-white">
                          <Code2 className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Website Build & Rebuild</div>
                          <div className="text-[10px] text-violet-600 font-bold font-mono">Fast, Responsive, SEO</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">POPULAR</span>
                    </div>

                    <div className="flex justify-between items-center bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                          <Bot className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">AI Chatbot & RAG Agent</div>
                          <div className="text-[10px] text-gray-400 font-bold">24/7 Automation</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-violet-600">NEW</span>
                    </div>

                    <div className="bg-gray-50/40 p-4 rounded-2xl border border-gray-100/50">
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider mb-2">
                        <span>Design & Branding</span>
                        <span className="text-violet-500 font-black">Logo + Brand Kit</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-gradient-to-r from-violet-500 to-fuchsia-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-[10px] text-gray-400 font-mono font-semibold">
                    <span>⚡ 8 SERVICES, 1 AGENCY</span>
                    <span>$500 - $1,500</span>
                  </div>

                </div>

                {/* Absolutely positioned floating visual card */}
                <div className="absolute -right-6 -bottom-6 bg-slate-950 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-[200px] z-20">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-black tracking-tight">8 Services</div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400">One Agency</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES OVERVIEW */}
      <section className="py-20 bg-gray-50/50 border-b border-gray-100/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              Agency Services
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Full-Service Digital Agency. No Overhead.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              From websites and AI to branding and social media — every service is designed to work together and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service card 1 - Website Building & Rebuild */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">Website Building & Rebuild</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Fast, modern websites built from scratch or existing sites rebuilt for performance and design.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    New Website Build
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    Website Rebuild & Upgrade
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    SEO & Speed Optimized
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("website-building");
                  const el = document.getElementById("detailed_services_block_section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer group"
              >
                Explore Service
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service card 2 - AI Chatbot & RAG Agent */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">AI Chatbot & RAG Agent</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Intelligent chatbots and knowledge-retrieval agents that automate support and capture leads 24/7.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    AI Chatbot Development
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    RAG Agent with Knowledge Base
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    Lead Qualification Automation
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("ai-chatbot-rag");
                  const el = document.getElementById("detailed_services_block_section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer group"
              >
                Explore Service
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service card 3 - Web Design & Branding */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] text-orange-500 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">Web Design & Branding</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Beautiful web designs paired with complete brand identity systems — logos, colors, and fonts.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Custom Web Design (UI/UX)
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Logo & Brand Identity
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Full Brand Kit & Guidelines
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("web-design");
                  const el = document.getElementById("detailed_services_block_section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer group"
              >
                Explore Service
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service card 4 - Social Media & Templates */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">Social Media & Template Customization</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Scroll-stopping social media visuals and template customization tailored to your brand.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Social Media Image Design
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Template Customization
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Content Calendar Graphics
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("social-media-templates");
                  const el = document.getElementById("detailed_services_block_section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer group"
              >
                Explore Service
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST SECTION */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-gray-400 font-bold font-mono text-[10px] uppercase tracking-widest bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-md">
                Full-Service Agency
              </span>
              <p className="text-xs text-gray-500 font-semibold">
                Websites. AI. Design. Branding. Social. All in one place.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-8 gap-y-4 opacity-50 shrink-1">
              <span className="font-sans font-black text-base text-gray-900 tracking-tight">Websites</span>
              <span className="font-mono font-bold text-sm text-gray-900">AI CHATBOT</span>
              <span className="font-sans font-black text-base text-gray-900">RAG//AGENT</span>
              <span className="font-mono font-bold text-sm text-gray-900">BRANDING</span>
              <span className="font-sans font-black text-base text-gray-900 tracking-tight">Design</span>
              <span className="font-mono font-bold text-sm text-gray-900">SOCIAL</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED SERVICE */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-gray-100/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] bg-gradient-to-br from-violet-50/20 to-gray-50/50 p-6 sm:p-8">
                
                <div className="flex justify-between items-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-violet-600 animate-ping" />
                    <span className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wide">Website + AI Stack</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">READY</span>
                </div>

                <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative shadow-inner p-4 font-mono text-[10px] text-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                    </div>
                    <span className="text-slate-500 font-semibold text-[8px]">services.config</span>
                    <Bot className="w-3 h-3 text-slate-600" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-blue-400">const <span className="text-white">agencyServices</span> = &#123;</p>
                    <p className="pl-4 text-slate-400">website: &#123; build: <span className="text-green-300">true</span>, rebuild: <span className="text-green-300">true</span> &#125;,</p>
                    <p className="pl-4 text-slate-400">ai: &#123; chatbot: <span className="text-green-300">true</span>, ragAgent: <span className="text-green-300">true</span> &#125;,</p>
                    <p className="pl-4 text-slate-400">design: &#123; web: <span className="text-green-300">true</span>, branding: <span className="text-green-300">true</span> &#125;,</p>
                    <p className="pl-4 text-slate-400">marketing: &#123; socialMedia: <span className="text-green-300">true</span>, templates: <span className="text-green-300">true</span> &#125;</p>
                    <p className="text-blue-400">&#125;;</p>
                    <p className="text-slate-500">// Full-service agency — everything under one roof</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-xs">
                    <span className="block font-mono font-bold text-[10px] text-gray-400 uppercase tracking-wider">Websites</span>
                    <span className="font-sans font-black text-lg text-emerald-500">Build & Rebuild</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-xs">
                    <span className="block font-mono font-bold text-[10px] text-gray-400 uppercase tracking-wider">AI Solutions</span>
                    <span className="font-sans font-black text-lg text-violet-600">Chatbots & RAG</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-xs">
                    <span className="block font-mono font-bold text-[10px] text-gray-400 uppercase tracking-wider">Design</span>
                    <span className="font-sans font-black text-lg text-blue-600">Branding & Visuals</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fff7ed] text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                Full-Service Agency
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-[1] text-gray-950 text-balance">
                One Agency. All Your Digital Needs.
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed antialiased">
                Stop juggling multiple freelancers and agencies. We handle everything — from building and rebuilding websites to deploying AI chatbots and RAG agents, designing brand identities, creating scroll-stopping social media visuals, and customizing templates. One team, one workflow, one standard of excellence.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Websites That Convert</h4>
                    <p className="text-xs text-gray-400">New builds or rebuilds — fast, responsive, and optimized for search from day one.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">AI That Works 24/7</h4>
                    <p className="text-xs text-gray-400">Chatbots and RAG agents that automate support, qualify leads, and scale your business.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Design That Stands Out</h4>
                    <p className="text-xs text-gray-400">Brand identities, web designs, and social media visuals that make your business unforgettable.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-md hover:translate-y-[-1px] transition-all cursor-pointer"
                >
                  Book free consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — ALL SERVICES DETAIL BLOCKS */}
      <section id="detailed_services_block_section" className="py-20 md:py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              Service Explorer
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Explore Each Service
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Select a service below to explore what's included, deliverables, timelines, and key benefits.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" id="services_interactive_tabs">
            {SERVICES_DETAILS.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-5 py-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  activeTab === service.id
                    ? "bg-[#0a0a0a] text-white border-transparent shadow-md"
                    : "bg-white text-gray-500 border-gray-100 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Tab Details Box with AnimatePresence */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Left col - Narrative block */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 text-[10px] font-bold tracking-widest uppercase rounded-full w-fit font-mono border border-violet-100">
                    Category: {activeService.badge}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-sans font-black text-gray-950 leading-tight">
                    {activeService.headline}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                    {activeService.description}
                  </p>

                  {/* What's Included list */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono">What is Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeService.whatsIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 font-semibold font-sans">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" strokeWidth={3} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables list */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono">Core Deliverables:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeService.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 font-semibold font-mono bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right col - Meta stats, Timeline and CTAs */}
                <div className="lg:col-span-5 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-6">
                    
                    {/* Benefits panel */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono">Key Benefits:</h4>
                      <div className="space-y-2">
                        {activeService.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 leading-normal">
                            <span className="text-violet-600 font-bold mt-0.5 font-mono">✔</span>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline box */}
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200/50">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-violet-600" />
                        <span className="text-xs font-bold text-gray-900 font-sans">Project Timeline:</span>
                      </div>
                      <span className="text-xs font-black font-mono text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                        {activeService.timeline}
                      </span>
                    </div>

                  </div>

                  {/* Pricing transparency notice */}
                  <div className="space-y-4">
                    <p className="text-[10px] text-gray-400 font-mono leading-normal">
                      * All prices are flat-rate and transparently quoted upon project scope sign-off. Work is backed by complimentary post-launch support.
                    </p>

                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-bold text-xs px-6 py-4 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      {activeService.ctaText}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 6 — PROCESS */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              The Blueprint
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Our Agency Process
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              From your first brief to final delivery — a streamlined process that works across websites, AI, design, and marketing.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 relative">
            
            {/* Horizontal Line connector (Desktop only) */}
            <div className="hidden xl:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-gray-100 z-0" />

            {/* Step 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 relative z-10 hover:shadow-md transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-mono font-black text-violet-600/30">01</span>
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <Search className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm text-gray-950 mb-1 leading-snug">01. Discovery</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Exhaustive research of competitor landscapes, target user behaviors, and key product goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 relative z-10 hover:shadow-md transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-mono font-black text-violet-600/30">02</span>
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm text-gray-950 mb-1 leading-snug">02. Strategy</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Designing content maps, call to action grids, URL wireframes, and technical setups.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 relative z-10 hover:shadow-md transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-mono font-black text-violet-600/30">03</span>
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm text-gray-950 mb-1 leading-snug">03. Design</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Constructing high-fidelity UI layout boards in Figma with responsive guidelines.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 relative z-10 hover:shadow-md transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-mono font-black text-violet-600/30">04</span>
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm text-gray-950 mb-1 leading-snug">04. Development</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Hand-coding components in React/TypeScript, ensuring scalable class structures.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 relative z-10 hover:shadow-md transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-mono font-black text-violet-600/30">05</span>
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm text-gray-950 mb-1 leading-snug">05. Testing</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Exhaustive validation on iOS, Android, Safari, and Chrome with speed adjustments.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 relative z-10 hover:shadow-md transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-mono font-black text-violet-600/30">06</span>
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm text-gray-950 mb-1 leading-snug">06. Launch</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Pushing static payloads to global edge servers and configuring DNS redirections.
              </p>
            </div>

            {/* Step 7 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 relative z-10 hover:shadow-md transition-all duration-300">
              <span className="absolute top-4 right-4 text-xs font-mono font-black text-violet-600/30">07</span>
              <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm text-gray-950 mb-1 leading-snug">07. Optimize</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Auditing user interaction logs, performing minor edits, and checking search gains.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — WHY CHOOSE US */}
      <section className="py-20 md:py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              Core Pillars
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Why Businesses Choose FrameLab
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              One agency for everything digital — websites, AI, branding, and social media. No middlemen, no complexity, just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Benefit 1 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">One Agency, All Services</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                No need to coordinate between different freelancers. We handle websites, AI, branding, and social media in one seamless workflow.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">AI-Powered Automation</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                From chatbots that qualify leads to RAG agents that answer from your knowledge base — we make AI work for your business.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">Full Brand Identity</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Logos, color palettes, typography, and brand kits — we create cohesive visual identities that make your business unforgettable.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">Social Media Ready</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Scroll-stopping social media marketing images and ad creative that keeps your brand consistent across every platform.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — RESULTS (Case Studies with Metrics Slider/Toggle) */}
      <section id="results_section" className="py-20 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              Real Performance Outcomes
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Metrics That Drive Growth
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Real results from real projects — see how our services drive measurable growth.
            </p>
          </div>

          {/* Case study selector buttons */}
          <div className="flex justify-center gap-3 mb-10" id="case_study_toggles">
            {caseStudies.map((cs, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCase(idx)}
                className={`px-4 py-2.5 text-xs font-mono font-bold rounded-full border transition-all cursor-pointer ${
                  selectedCase === idx
                    ? "bg-[#0a0a0a] text-white border-transparent"
                    : "bg-gray-50 text-gray-500 border-gray-100 hover:text-gray-900"
                }`}
              >
                {cs.title}
              </button>
            ))}
          </div>

          {/* Metrics display card */}
          <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">Active Campaign Audit</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-black text-gray-950 tracking-tight leading-tight">
                  {caseStudies[selectedCase].title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                  {caseStudies[selectedCase].description}
                </p>

                {/* Big Metric Badge highlight */}
                <div className="inline-flex items-center gap-2 bg-[#f0fdf4] text-emerald-700 px-4 py-3.5 rounded-xl border border-emerald-100 shadow-sm">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="font-sans font-black text-base sm:text-lg leading-none">{caseStudies[selectedCase].metric}</span>
                  <span className="text-xs font-medium text-emerald-600/80">Commercial Improvement</span>
                </div>

              </div>

              {/* Before/After visual comparison details */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                
                {/* Before parameters */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl space-y-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-400" />
                  <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-full border border-red-100">BEFORE NEXTCRAFT</span>
                  
                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-mono font-bold">PAGE LOAD SPEED:</span>
                      <span className="text-xl font-sans font-black text-gray-900">{caseStudies[selectedCase].before.speed}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-mono font-bold">CONVERSION RATE:</span>
                      <span className="text-xl font-sans font-black text-gray-900">{caseStudies[selectedCase].before.conv}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-mono font-bold">BOUNCE RATE:</span>
                      <span className="text-xl font-sans font-black text-gray-900">{caseStudies[selectedCase].before.bounce}</span>
                    </div>
                  </div>
                </div>

                {/* After parameters */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl space-y-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-emerald-500" />
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">AFTER NEXTCRAFT</span>
                  
                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-mono font-bold">PAGE LOAD SPEED:</span>
                      <span className="text-xl font-sans font-black text-emerald-500 flex items-center gap-1">
                        {caseStudies[selectedCase].after.speed}
                        <span className="text-[9px] font-mono font-bold text-emerald-600">(-90%)</span>
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-mono font-bold">CONVERSION RATE:</span>
                      <span className="text-xl font-sans font-black text-emerald-500 flex items-center gap-1">
                        {caseStudies[selectedCase].after.conv}
                        <span className="text-[9px] font-mono font-bold text-emerald-600">(x4.5)</span>
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-mono font-bold">BOUNCE RATE:</span>
                      <span className="text-xl font-sans font-black text-emerald-500">
                        {caseStudies[selectedCase].after.bounce}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-20 md:py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              Clear Support
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Got questions about our services, pricing, or process? Here are clear answers.
            </p>
          </div>

          {/* Accordion Component with schema structure */}
          <div className="space-y-4" id="services_faq_accordion">
            {servicesFaqs.map((faq) => {
              const isOpen = faqOpen === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group focus:outline-none"
                  >
                    <span className={`font-sans font-bold text-sm sm:text-base transition-colors ${
                      isOpen ? "text-violet-600" : "text-gray-900 group-hover:text-violet-600"
                    }`}>
                      {faq.q}
                    </span>
                    
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen ? "bg-violet-600 text-white border-transparent rotate-45" : "bg-gray-50 text-gray-500 border-gray-100"
                    }`}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-500 text-xs sm:text-sm leading-relaxed border-t border-gray-100/50 mt-1 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 10 — CTA */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="bg-[#0a0a0a] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col gap-6 items-center">
            
            {/* Background glowing highlights */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Let&apos;s Build Together
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-none text-white max-w-2xl text-balance">
              Ready to Grow Your Business?
            </h2>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Partner with FrameLab for websites that convert, AI that automates, branding that stands out, and social media that engages.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 relative z-10">
              <a
                href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-950 font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                Book a Call
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-slate-700 hover:border-white font-bold text-xs px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
              >
                Get a Proposal
              </a>
            </div>

            {/* Pulsing online booking indicator */}
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider font-semibold text-emerald-400 mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SLOTS AVAILABLE THIS MONTH
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
