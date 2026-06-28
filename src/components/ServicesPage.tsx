import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Code2,
  Cpu,
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
    id: "nextjs-development",
    badge: "Engineering",
    title: "React & Next.js Development",
    headline: "Bespoke Full-Stack Web Applications Built for Infinite Scale",
    description: "Traditional databases and clunky content management systems slow down conversions and degrade search index scores. Our engineering division compiles bespoke React environments into static HTML/JSON at build time, deploying them to global serverless edge environments that load instantly under any user traffic spike.",
    whatsIncluded: [
      "Custom React & Next.js Architecture",
      "Robust TypeScript implementation",
      "API Routing & Dynamic Serverless Actions",
      "Headless CMS Integration (Sanity / Contentful)",
      "Fully Responsive Tailwind CSS Layouts",
      "Optimal code-splitting & tree-shaking"
    ],
    benefits: [
      "Sub-second Largest Contentful Paint (LCP) times",
      "Zero server overhead or cold starts on global runs",
      "Immunity from traditional database injection attacks",
      "Perfect Lighthouse and Core Web Vitals pass rate"
    ],
    deliverables: [
      "Production-ready Next.js Github Repository",
      "Serverless deployment configuration",
      "Interactive component library in Storybook",
      "Fully integrated Headless CMS content editor dashboard"
    ],
    timeline: "3 - 5 Weeks",
    ctaText: "Start My Custom Build"
  },
  {
    id: "uiux-design",
    badge: "Aesthetics",
    title: "Premium UI/UX Design",
    headline: "High-Fidelity Interfaces Crafted to Earn Unfiltered Trust",
    description: "We don't buy generic visual themes. Our team researches user journey maps, constructs wireframe topologies, and creates distinctive display grids with big bold typography and custom micro-animations. The result is a layout that feels like an award-winning studio asset and naturally converts visitors into scheduled bookings.",
    whatsIncluded: [
      "Bespoke High-Fidelity UI Design",
      "Interactive Figma Prototypes & Wireframes",
      "Typography pairing & layout guidelines",
      "Custom Vector Illustrations & Graphics",
      "Micro-interaction & Transition Storyboards",
      "Conversion Rate Optimization (CRO) audits"
    ],
    benefits: [
      "Differentiate instantly from template-heavy competitors",
      "Build long-term brand equity with customized visual systems",
      "Provide modern touch targets (min. 44px) and fluid spacing",
      "Significantly reduce landing page visitor bounce percentages"
    ],
    deliverables: [
      "Bespoke Figma UI/UX Design System",
      "Complete Component Assets & Style Guide",
      "Interactive user journey map files",
      "Responsive layout wireframes for Mobile & Desktop"
    ],
    timeline: "2 - 4 Weeks",
    ctaText: "Request Bespoke Design"
  },
  {
    id: "seo-speed-optimization",
    badge: "Optimization",
    title: "SEO & Core Web Vitals Speed Audit",
    headline: "Multiply Organic Traffic with Sub-Second Latency Mechanics",
    description: "Search engines actively penalize slow, unoptimized pages. We perform exhaustive audits of script runtimes, eliminate layout shifts, and inject structured JSON-LD schemas. We fix what holds your search authority back, securing maximum ranking momentum for your high-value commercial search keywords.",
    whatsIncluded: [
      "Lighthouse & Core Web Vitals optimization",
      "JSON-LD Local Business & Article Schema",
      "Bundle size minimization & Next Image optimization",
      "Keyword gap & commercial intent mapping",
      "Technical indexation & crawl budget analysis",
      "Permanent 301 URL redirection mapping"
    ],
    benefits: [
      "Guaranteed Core Web Vitals Pass rating (Green scores)",
      "Higher search engine crawl efficiency and indexing",
      "Drastic reductions in paid user acquisition (CPC) costs",
      "Higher search query click-through-rates with rich snippets"
    ],
    deliverables: [
      "Interactive Speed Audit Performance Report",
      "Custom schema markup payload files",
      "Fully resolved speed improvements on live site",
      "Optimized Sitemap & Robots.txt parameters"
    ],
    timeline: "1 - 2 Weeks",
    ctaText: "Secure Speed Audit"
  },
  {
    id: "custom-template",
    badge: "Polish",
    title: "Template Customization & Relaunch",
    headline: "Turn a Bought Template Into a Premium Polished Asset",
    description: "Already purchased a visual layout or boilerplate but struggle to make it load fast and match your brand standards? We take existing Next.js codebases, refactor their core styling to fit your exact specifications, audit performance metrics, and deploy them properly in under a week.",
    whatsIncluded: [
      "Existing codebase audit & cleanup",
      "Tailoring logo assets, colors, and typefaces",
      "Component edits and responsive correction",
      "Lead collection form setup & database webhook integrations",
      "Speed optimization and build testing",
      "Clean edge host deployment setup"
    ],
    benefits: [
      "Launch a fully verified brand asset in fractions of the time",
      "Ensure template code has zero security flaws or broken links",
      "Gain custom integrations without paying full bespoke dev prices",
      "Perfect alignment with corporate visual brand guidelines"
    ],
    deliverables: [
      "Refactored high-speed Next.js repository",
      "Lead generation & webhook flow mappings",
      "Pre-launch verification checklist reports",
      "Live serverless deployed environment"
    ],
    timeline: "5 - 9 Days",
    ctaText: "Optimize My Template"
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("nextjs-development");
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const activeService = SERVICES_DETAILS.find((s) => s.id === activeTab) || SERVICES_DETAILS[0];

  const caseStudies = [
    {
      title: "Pulse SaaS Dashboard Relaunch",
      before: { speed: "4.8s", conv: "1.2%", bounce: "54%" },
      after: { speed: "0.4s", conv: "4.9%", bounce: "18%" },
      metric: "+308% Leads",
      description: "We converted Pulse's database-heavy marketing template into a headless static Next.js application, fixing mobile layout shift errors and aligning buttons with user conversion intent."
    },
    {
      title: "ScaleHQ Local Authority Campaign",
      before: { speed: "3.2s", conv: "2.1%", bounce: "42%" },
      after: { speed: "0.6s", conv: "5.8%", bounce: "15%" },
      metric: "-35% Ad Cost",
      description: "By building local location landing pages with customized JSON-LD schema markup and sub-second Largest Contentful Paint (LCP) times, ScaleHQ ranked in the Google 3-Pack for 12 local neighborhoods."
    }
  ];

  const servicesFaqs = [
    {
      id: 1,
      q: "How does project pricing work at NextCraft?",
      a: "We believe in total financial transparency. We work on flat, project-based pricing modeled on the complexity of your custom build. Standard template customization runs between $1,500 and $3,500, while bespoke full-stack React & Next.js applications range from $5,000 to $15,000 depending on integrations. You will receive a locked, guaranteed proposal before any work begins — with no hidden hourly surcharges."
    },
    {
      id: 2,
      q: "How long does a custom development cycle take?",
      a: "Bespoke projects typically span between 3 to 6 weeks from initial Discovery to final Launch. Rapid template optimizations are completed and deployed in 5 to 9 days. We prioritize absolute precision and speed, delivering scheduled status reports every 3 days so you are always in the loop."
    },
    {
      id: 3,
      q: "Can we manage the content ourselves once you launch?",
      a: "Absolutely. We integrate highly intuitive, headless content management systems like Sanity or Contentful. Your marketing team can easily publish articles, update testimonials, edit landing copy, and scale services without ever touching code or writing a developer support ticket."
    },
    {
      id: 4,
      q: "Are technical SEO features included out of the box?",
      a: "Yes, technical search engine optimization is baked into our structural DNA. Every build includes custom meta tag payloads, canonical structures, optimized XML sitemaps, robots configurations, high-performance image optimization, responsive touch optimizations, and schema markup (JSON-LD) to ensure instant, clean indexation."
    },
    {
      id: 5,
      q: "What hosting providers do you use for deployment?",
      a: "We utilize serverless edge infrastructures like Vercel, Netlify, or Google Cloud Run. This ensures your website operates at sub-second load times globally, scales to millions of concurrent visits for fractions of a penny, and maintains absolute immunity to typical database attacks."
    },
    {
      id: 6,
      q: "Do you offer post-launch maintenance and support?",
      a: "Yes. Every project includes 30 days of complimentary VIP support and technical speed tracking. Beyond that, we offer proactive monthly performance plans that include routine speed optimization audits, dependency upgrades, copy edits, and visual health tracking to keep your platform running at 100/100."
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
                Bespoke Technical Capabilities
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-[0.95] text-gray-950 text-balance">
                Next-Gen React Ecosystems Built to <span className="text-violet-600">Convert and Scale.</span>
              </h1>
              
              <p className="text-gray-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance">
                We combine award-winning visual layouts with high-performance Next.js engineering to turn passive visitors into scheduled consultation bookings. No templates. No clutter. Just pure commercial speed.
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

              {/* FLOATING STATISTICS CARDS FOR HERO */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">100+</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Projects Deployed</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">95%</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Client Satisfaction</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-[#fff7ed] text-orange-500 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">0.4s</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Avg. Load Speed</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-xl text-gray-900 leading-none">3+ Yrs</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Elite Experience</span>
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
                    <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase font-bold bg-gray-50 px-3 py-1 rounded-full border border-gray-100">nextcraft.io/capabilities</span>
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
                          <div className="text-xs font-bold text-gray-900">React Core Bundle</div>
                          <div className="text-[10px] text-violet-600 font-bold font-mono">100/100 Perfect Speed</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">PASS</span>
                    </div>

                    <div className="flex justify-between items-center bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                          <Cpu className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Tailwind Visual System</div>
                          <div className="text-[10px] text-gray-400 font-bold">Fluid Layout Topology</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-violet-600">ACTIVE</span>
                    </div>

                    {/* FCP Speed Indicator */}
                    <div className="bg-gray-50/40 p-4 rounded-2xl border border-gray-100/50">
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider mb-2">
                        <span>First Contentful Paint (FCP)</span>
                        <span className="text-emerald-500 font-black">0.4s</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Micro Footer for the Graphic */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-[10px] text-gray-400 font-mono font-semibold">
                    <span>⚡ SERVED BY VERCEL EDGE</span>
                    <span>100% SECURE</span>
                  </div>

                </div>

                {/* Absolutely positioned floating visual card */}
                <div className="absolute -right-6 -bottom-6 bg-slate-950 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-[200px] z-20">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-black tracking-tight">+300%</div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Inbound Conversions</div>
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
              Handcrafted Capabilities. Built to Scale.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Explore our core disciplines designed to deliver flawless visual brand presence, maximum loading speeds, and optimized lead generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">React & Next.js Development</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  High-speed modular structures written in TypeScript and optimized for continuous search crawl efficiency.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    Bespoke Next.js Architectures
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    TypeScript Clean Code
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    Headless CMS Setup
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("nextjs-development");
                  const el = document.getElementById("detailed_services_block_section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer group"
              >
                Explore Service
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] text-orange-500 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">Premium UI/UX Design</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Tailored user journeys, grid spacing, and elegant aesthetic designs focused purely on conversion rates.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Bespoke Figma UI/UX Design
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Interactive Wireframing
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Aesthetic Style Guidelines
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("uiux-design");
                  const el = document.getElementById("detailed_services_block_section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer group"
              >
                Explore Service
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">SEO & Core Web Vitals Speed</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Technical script auditing and layout shift elimination to hit perfect 100/100 Lighthouse scores.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    Speed Score Optimization
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    JSON-LD Schema Markup
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    On-Page Keyword Mapping
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("seo-speed-optimization");
                  const el = document.getElementById("detailed_services_block_section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer group"
              >
                Explore Service
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Service card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-black text-lg text-gray-900 leading-snug">Template customization</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Take a bought boilerplate or template and tailor it perfectly to your brand system with extreme polish.
                </p>
                <ul className="space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Tailoring Layout Colors
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Component Customization
                  </li>
                  <li className="flex items-center gap-2 text-[11px] text-gray-600 font-semibold font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Rapid Launch in Days
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveTab("custom-template");
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
                Trusted Globally
              </span>
              <p className="text-xs text-gray-500 font-semibold">
                Powering high-growth platforms with sub-second performance.
              </p>
            </div>

            {/* Scrolling list of text-based minimal agency client logos */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-8 gap-y-4 opacity-50 shrink-1">
              <span className="font-sans font-black text-base text-gray-900 tracking-tight">TechCorp</span>
              <span className="font-mono font-bold text-sm text-gray-900">DESIGN.HUB</span>
              <span className="font-sans font-black text-base text-gray-900">STARTUP//X</span>
              <span className="font-mono font-bold text-sm text-gray-900">BuildCo</span>
              <span className="font-sans font-black text-base text-gray-900 tracking-tight">LaunchPad</span>
              <span className="font-mono font-bold text-sm text-gray-900">ScaleUp</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED SERVICE */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Split layout: Left column contains high fidelity visualization of full stack setup */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-gray-100/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)] bg-gradient-to-br from-violet-50/20 to-gray-50/50 p-6 sm:p-8">
                
                {/* Visual mockup illustrating our peak bespoke Next.js capability */}
                <div className="flex justify-between items-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-violet-600 animate-ping" />
                    <span className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wide">Next.js Edge Hydration</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">ACTIVE</span>
                </div>

                <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative shadow-inner p-4 font-mono text-[10px] text-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                    </div>
                    <span className="text-slate-500 font-semibold text-[8px]">next.config.js</span>
                    <Lock className="w-3 h-3 text-slate-600" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-blue-400">const <span className="text-white">nextConfig</span> = &#123;</p>
                    <p className="pl-4 text-slate-400">reactStrictMode: <span className="text-orange-400">true</span>,</p>
                    <p className="pl-4 text-slate-400">swcMinify: <span className="text-orange-400">true</span>,</p>
                    <p className="pl-4 text-slate-400">images: &#123; formats: [<span className="text-green-300">&apos;image/avif&apos;</span>, <span className="text-green-300">&apos;image/webp&apos;</span>] &#125;,</p>
                    <p className="pl-4 text-slate-400">output: <span className="text-green-300">&apos;standalone&apos;</span></p>
                    <p className="text-blue-400">&#125;;</p>
                    <p className="text-slate-500">// Optimized bundles delivered at sub-second speeds</p>
                  </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-xs">
                    <span className="block font-mono font-bold text-[10px] text-gray-400 uppercase tracking-wider">Lighthouse</span>
                    <span className="font-sans font-black text-lg text-emerald-500">100/100</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-xs">
                    <span className="block font-mono font-bold text-[10px] text-gray-400 uppercase tracking-wider">Asset weight</span>
                    <span className="font-sans font-black text-lg text-violet-600">-64%</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-xs">
                    <span className="block font-mono font-bold text-[10px] text-gray-400 uppercase tracking-wider">Crawl budget</span>
                    <span className="font-sans font-black text-lg text-blue-600">Perfect</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Split layout: Right column contains descriptive copy */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fff7ed] text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                Highest Value Capability
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-[1] text-gray-950 text-balance">
                Bespoke Full-Stack React & Next.js Ecosystems
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed antialiased">
                For start-ups wanting maximum market differentiation, basic templating systems present a severe limitation. Our elite service delivers customized code architectures mapped specifically to your commercial sales funnels. We integrate Headless CMS infrastructures so your teams publish content in real-time, backed by the infinite performance of React edge computing.
              </p>

              {/* Bullet checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Sub-Second Largest Contentful Paint (LCP)</h4>
                    <p className="text-xs text-gray-400">Pages render instantly across any global edge host, reducing visitor drops on mobile.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Secure and Immune Edge Node Deployments</h4>
                    <p className="text-xs text-gray-400">Decoupled hosting architecture removes vulnerable SQL servers or PHP scripts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950">Integrated Headless CMS Dashboards</h4>
                    <p className="text-xs text-gray-400">Enables rapid, visual post updates and metadata controls for your non-technical teams.</p>
                  </div>
                </div>
              </div>

              {/* Call-to-action */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-md hover:translate-y-[-1px] transition-all cursor-pointer"
                >
                  Book free architecture consultation
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
              Interactive Dashboard
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Bespoke Service Details
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Select a service below to explore its comprehensive technical specifications, timelines, deliverables, and commercial outcomes.
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
                      * All prices are transparently quoted upon project scope sign-off. Work is backed by a complimentary 30-day post-launch VIP speed-tracking and adjustment warranty.
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
              Our Premium Process
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              A meticulously structured 7-step roadmap designed to coordinate every detail from research to launch with zero commercial friction.
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
              Why Leaders Select NextCraft
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              We operate at the intersection of extreme speed and beautiful aesthetics, stripping away development fluff to double startup growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Benefit 1 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">Sub-Second Load Times</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                By compiling React structures at build time, pages download on consumer browser views globally in fractions of a second.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <MousePointerClick className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">Conversion-Led UX</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Every layout line, margins, buttons, and visual element is positioned specifically to reduce bounce and collect inbound prospects.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">Future-Proof Architecture</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We write strict, componentized TypeScript codebases that easily support scale, are incredibly secure, and are simple to edit.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-black text-base text-gray-900 mb-2">SEO DNA Injected</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We write custom semantic schemas, crawl sitemaps, robots configurations, and structural metadata parameters from day one.
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
              See the direct commercial consequences of replacing database templates with high-fidelity Next.js ecosystems.
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
              Got questions about our services, pricing metrics, or development flow? Here are clear, structured insights.
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
              Let&apos;s Scale Together
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-none text-white max-w-2xl text-balance">
              Ready to Build Your Online Success Story?
            </h2>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Partner with NextCraft to secure perfect Core Web Vitals scores, custom Figma design wireframes, and high-converting Next.js engines.
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
              SLOTS AVAILABLE FOR THIS MONTIHL
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
