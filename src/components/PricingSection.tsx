"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useGSAPReady } from "../lib/animations";
import { ArrowRight, Check, HelpCircle, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    badge: "Essential",
    desc: "Perfect for new businesses — a clean single-page website with template customization and social media visuals to get you online fast.",
    price: "500",
    unit: "$",
    interval: "project",
    popular: false,
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
    interval: "project",
    popular: true,
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
    interval: "project",
    popular: false,
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

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  useEffect(() => {
    if (!gsapInstance || !sectionRef.current) return;
    const { gsap } = gsapInstance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".pricing-section", start: "top 85%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(
        ".pricing-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".pricing-section", start: "top 80%", toggleActions: "play none none none" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [gsapInstance]);

  return (
    <section ref={sectionRef} className="pricing-section relative py-20 md:py-28 bg-gray-50/30 border-b border-gray-100 overflow-hidden">
      <div className="absolute top-40 left-1/4 w-80 h-80 bg-violet-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 pricing-title">
          <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100/50 mb-4 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-gray-950 mt-3 mb-4">
            Fixed Price. Clear Scope. Fast Delivery.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Every project is quoted upfront with a locked flat rate. No hourly billing, no hidden fees — from websites and AI chatbots to branding and social media design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className={`pricing-card relative bg-white border rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-gray-200 ${
                plan.popular ? "border-violet-200 shadow-md shadow-violet-100/50 ring-1 ring-violet-200" : "border-gray-100 shadow-sm"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full shadow-lg shadow-violet-500/20">
                  Most Popular
                </div>
              )}

              <div className="mb-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-violet-600 uppercase bg-violet-50 px-2.5 py-0.5 rounded-full">
                  {plan.badge}
                </span>
              </div>

              <h3 className="font-sans font-black text-xl text-gray-950 mt-3 mb-2">
                {plan.name}
              </h3>

              <p className="text-gray-500 text-xs leading-relaxed mb-5 min-h-[40px]">
                {plan.desc}
              </p>

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

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded-xl transition-all mb-6 ${
                  plan.popular
                    ? "bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                }`}
              >
                Get Started
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-violet-600 font-bold text-sm mt-4 hover:text-violet-800 transition-colors group"
          >
            Need a custom quote? Let&apos;s talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
