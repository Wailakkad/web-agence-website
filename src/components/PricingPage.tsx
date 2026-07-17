import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  HelpCircle,
  ChevronRight,
  Send,
  Clock,
  Bot,
  Award,
  Star,
  CheckCircle2,
  TrendingUp,
  Layers,
  Code2,
  Cpu
} from "lucide-react";

interface PricingPlan {
  name: string;
  badge: string;
  desc: string;
  price: string;
  unit: string;
  interval: string;
  popular: boolean;
  features: string[];
  highlight?: string;
  cta: string;
}

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    badge: "Essential",
    desc: "Perfect for new businesses — a clean single-page website with template customization and social media visuals to get you online fast.",
    price: "500",
    unit: "$",
    interval: "flat",
    popular: false,
    highlight: "Ideal for freelancers & new startups",
    cta: "Start Essential",
    features: [
      "Web design (1 page)",
      "Template customization",
      "Social media marketing images (5 designs)",
      "1 revision round",
      "7 days delivery",
      "Basic SEO setup"
    ]
  },
  {
    name: "Growth",
    badge: "Most Popular",
    desc: "For growing brands — a multi-page website or rebuild with full branding, web design, and expanded social media content.",
    price: "900",
    unit: "$",
    interval: "flat",
    popular: true,
    highlight: "Perfect for growing businesses & established brands",
    cta: "Start Growth Plan",
    features: [
      "Website building up to 3 pages OR website rebuild",
      "Web design (full site)",
      "Branding design (logo + color palette + fonts)",
      "Social media marketing images (10 designs)",
      "Template customization",
      "2 revision rounds",
      "14 days delivery"
    ]
  },
  {
    name: "Pro",
    badge: "Best Value",
    desc: "The complete package — a full website, AI chatbot or RAG agent, premium branding, and everything you need to scale.",
    price: "1,500",
    unit: "$",
    interval: "flat",
    popular: false,
    highlight: "Best for ambitious projects & high-growth brands",
    cta: "Start Pro Build",
    features: [
      "Website building up to 5 pages OR website rebuild",
      "Web design (full site)",
      "Branding design (full brand kit)",
      "AI chatbot building OR RAG agent building",
      "Social media marketing images (15 designs)",
      "Template customization",
      "3 revision rounds",
      "21 days delivery + 30 days support"
    ]
  }
];

const FAQS = [
  {
    q: "How does your flat-rate pricing work?",
    a: "We quote every project based on its specific scope, complexity, and technical requirements. Once you approve the proposal, the price is locked — no hourly billing, no surprise overages. If requirements change mid-project, we'll transparently discuss any adjustments before proceeding."
  },
  {
    q: "What's the difference between website building and website rebuild?",
    a: "Website building is a fresh build from the ground up. A website rebuild is for businesses that already have a site but want to upgrade its design, speed, and functionality without starting completely from scratch. Both options are available across our plans."
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We typically structure payments in milestones: 50% upfront to begin, 25% on design approval, and 25% on launch. For larger projects, we can customize a payment schedule that works for your cash flow."
  },
  {
    q: "How long does a typical project take?",
    a: "Starter builds are delivered in 7 days. Growth projects take about 14 days. Pro builds range from 21 days depending on complexity. All timelines are scoped during the discovery phase."
  },
  {
    q: "Can I add both an AI chatbot AND a RAG agent to my project?",
    a: "Absolutely. The Pro plan includes one of the two, but you can add both as an upsell. AI chatbots handle customer support and lead qualification, while RAG agents retrieve information from your knowledge base to answer complex queries."
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. If you start with a Starter build and need to scale, we can transition you to a Growth or Pro plan. We'll handle the migration seamlessly and credit any work already completed toward your new plan."
  }
];



export default function PricingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen pt-24 pb-12 overflow-hidden selection:bg-violet-100 selection:text-violet-900 font-sans relative">

      <div className="absolute top-20 left-1/10 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] right-1/10 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-violet-50/40 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION 1 — HERO */}
      <section className="relative py-16 sm:py-24 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-50 text-violet-700 text-xs font-bold tracking-widest uppercase rounded-full w-fit"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Simple, Transparent Pricing
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-[0.95] text-gray-950 text-balance"
              >
                Fixed Price.<br />Clear Scope. <span className="text-violet-600">Fast Delivery.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance"
              >
                Every project is quoted with a locked flat rate before any work begins. No hourly billing, no hidden fees — from websites and AI chatbots to branding and social media design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4 items-center mt-2"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById("pricing_cards_section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-950 font-bold text-sm px-6 py-3.5 hover:bg-gray-50 rounded-full transition-all duration-300 cursor-pointer"
                >
                  View Plans
                </button>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-lg text-gray-900 leading-none">Flat-Rate</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Guaranteed Price</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-lg text-gray-900 leading-none">7-21 Days</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Delivery Time</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-lg text-gray-900 leading-none">AI Ready</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Chatbots & RAG Agents</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-lg text-gray-900 leading-none">30-Day</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Support Warranty</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0 select-none">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-[4/4.5] rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-violet-50/20 to-gray-50/50 shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-6 sm:p-8 relative flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase font-bold bg-gray-50 px-3 py-1 rounded-full border border-gray-100">framelab.io/pricing</span>
                  </div>

                  <div className="my-6 space-y-4">
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gray-900">Starter</span>
                        <span className="text-xs font-mono font-black text-violet-600">$500</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[20%] h-full bg-violet-500 rounded-full" />
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gray-900">Growth</span>
                        <span className="text-xs font-mono font-black text-emerald-600">$900</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[45%] h-full bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gray-900">Pro</span>
                        <span className="text-xs font-mono font-black text-amber-600">$1,500</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[75%] h-full bg-amber-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-[10px] text-gray-400 font-mono font-semibold">
                    <span>⚡ FLAT-RATE GUARANTEED</span>
                    <span>NO HIDDEN FEES</span>
                  </div>
                </div>

                <div className="absolute -right-6 -bottom-6 bg-slate-950 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-[200px] z-20">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black tracking-tight">100%</div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PRICING CARDS */}
      <section id="pricing_cards_section" className="py-20 md:py-24 bg-gray-50/30 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              Choose Your Plan
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Invest in Your Growth
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Pick the plan that fits your needs, or contact us for a fully custom proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANS.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`relative bg-white border rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-gray-200 ${
                  plan.popular ? "border-violet-200 shadow-md shadow-violet-100/50 ring-1 ring-violet-200" : "border-gray-100 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full shadow-lg shadow-violet-500/20 z-10">
                    Most Popular
                  </div>
                )}

                <div className="mb-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-violet-600 uppercase bg-violet-50 px-2.5 py-0.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>

                <h3 className="font-sans font-black text-xl text-gray-950 mt-3 mb-2">{plan.name}</h3>

                <p className="text-gray-500 text-xs leading-relaxed mb-5 min-h-[40px]">{plan.desc}</p>

                <div className="mb-6">
                  {plan.price === "Custom" ? (
                    <span className="font-sans font-black text-3xl text-gray-950">Custom</span>
                  ) : (
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-sans font-black text-4xl text-gray-950">{plan.unit}{plan.price}</span>
                      <span className="text-gray-400 text-xs font-medium ml-1">/{plan.interval}</span>
                    </div>
                  )}
                </div>

                {plan.highlight && (
                  <p className="text-[10px] text-violet-600 font-semibold mb-4 flex items-center gap-1.5">
                    <Star className="w-3 h-3" />
                    {plan.highlight}
                  </p>
                )}

                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded-xl transition-all mb-6 ${
                    plan.popular
                      ? "bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <ul className="space-y-3 mt-auto">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-xs">
              * All prices are starting ranges. Final quotes depend on project scope, complexity, and integrations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="py-20 md:py-24 bg-gray-50/30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              The Process
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              From Quote to Launch
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              A transparent, milestone-driven process that keeps you informed at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <Send className="w-5 h-5" />, title: "Submit Brief", desc: "Tell us about your project goals — website build, redesign, AI chatbot, branding, or social media." },
              { step: "02", icon: <Code2 className="w-5 h-5" />, title: "Get Your Quote", desc: "We review your requirements and deliver a locked flat-rate proposal within 24 hours." },
              { step: "03", icon: <Layers className="w-5 h-5" />, title: "Design & Build", desc: "Once approved, we design, build, and integrate everything — from web to AI to branding." },
              { step: "04", icon: <Zap className="w-5 h-5" />, title: "Launch & Support", desc: "We deploy to production and provide post-launch support with 30-day warranty on Pro plans." },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: parseInt(item.step) * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all"
              >
                <span className="text-xs font-mono font-black text-violet-600/30">{item.step}</span>
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 mt-2">
                  {item.icon}
                </div>
                <h3 className="font-sans font-black text-base text-gray-950 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50">
              FAQ
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Everything you need to know about our pricing and process.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-violet-200 transition-colors duration-200"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-gray-900 hover:text-violet-700 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    <HelpCircle className={`w-5 h-5 shrink-0 text-violet-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="p-5 pt-0 border-t border-gray-50 text-xs sm:text-sm text-gray-500 leading-relaxed">
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

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-20 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-bold tracking-widest uppercase rounded-full">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            Start Your Project
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-none text-balance">
            Ready to Build Something Great?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            Get a free, no-obligation quote within 24 hours. Whether you need a website, AI chatbot, branding, or social media content — we've got you covered.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300"
            >
              Get Your Free Quote
              <Send className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold text-xs px-6 py-3.5 hover:bg-white/5 rounded-full transition-all duration-300 border border-white/10"
            >
              Book a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
