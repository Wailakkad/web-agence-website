"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useGSAPReady } from "../lib/animations";
import { ServiceCard } from "./ui/ServiceCard";
import { Highlight } from "./ui/Highlight";
import { TagPills } from "./ui/TagPills";
import { ProgressCircle } from "./ui/ProgressCircle";
import { ChecklistItem } from "./ui/ChecklistItem";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();

  // Initialize GSAP ScrollTrigger contexts for scroll-bound actions
  useEffect(() => {
    if (!gsapInstance || !sectionRef.current) return;
    const { gsap, ScrollTrigger } = gsapInstance;

    const ctx = gsap.context(() => {
      // 1. Header reveal trigger
      gsap.fromTo(
        ".services-title",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".services-header-btn",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Cards entrance stagger
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Progress circles and FCP bar animations triggered on Card 3 (card-templates wrapper) in view
      gsap.fromTo(
        ".progress-circle",
        { strokeDashoffset: 283 },
        {
          strokeDashoffset: (i: number) => [17, 3, 0][i] ?? 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-templates",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".fcp-bar",
        { width: "0%" },
        {
          width: "100%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-templates",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, [gsapInstance]);

  // Framer Motion logo staggered reveal variables
  const logosContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const logoBoxVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  // Checklist stagger animation configuration
  const checklistContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const checklistRowVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="new_services_grid_section"
      className="services-section py-24 bg-[#f4f4f5] border-t border-b border-gray-100 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER: Space-between, high-contrast, interactive CTA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-gray-200/50">
          <h2 className="services-title text-[#0a0a0a] font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none">
            Websites. AI. Branding. Design.
          </h2>
          
          <div className="services-header-btn shrink-0">
            <motion.button
              id="header_start_project_btn"
              whileHover={{ scale: 1.03, backgroundColor: "#6d28d9" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#7c3aed] text-white px-6 py-3.5 rounded-xl font-bold shadow-md shadow-violet-500/10 hover:shadow-violet-500/20 transition-all text-sm pointer-events-auto cursor-pointer"
            >
              Start Project Now
            </motion.button>
          </div>
        </div>

        {/* 2x2 Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          
          {/* CARD 1: Website Building & Rebuild */}
          <ServiceCard id="card_website_building">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                Website Building & Rebuild
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                We build <Highlight>fast, modern websites</Highlight> from scratch or
                rebuild existing sites that need a{" "}
                <Highlight>performance and design upgrade</Highlight>. Fully
                responsive, SEO-optimized, and ready to convert.
              </p>

              <TagPills
                tags={[
                  "New Website Build",
                  "Website Rebuild",
                  "Responsive Design",
                  "Performance Upgrade",
                  "SEO Optimized",
                  "Mobile First",
                ]}
              />
            </div>

            <div className="w-full h-36 mt-6 relative" style={{ perspective: "1000px" }}>
              <div
                className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none"
                style={{ transform: "rotateX(8deg)" }}
              >
                <div className="bg-slate-950/60 px-3 py-2 flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono">yourbrand.com</span>
                  <div className="w-4" />
                </div>

                <div className="grid grid-cols-12 h-24">
                  <div className="col-span-4 bg-slate-950/40 border-r border-slate-800/80 p-2 flex flex-col gap-1.5 font-mono text-[8px]">
                    <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold">
                      <span>Build vs Rebuild</span>
                    </div>
                    <div className="space-y-1 opacity-80 scale-95 origin-top-left">
                      <div className="w-16 h-1 bg-emerald-400 rounded" />
                      <div className="w-14 h-1 bg-violet-400 rounded" />
                      <div className="w-12 h-1 bg-amber-400 rounded" />
                      <div className="w-10 h-1 bg-slate-700 rounded" />
                    </div>
                  </div>

                  <div className="col-span-8 bg-white p-3 flex flex-col justify-between relative">
                    <div className="space-y-1.5">
                      <div className="w-20 h-2 bg-slate-200 rounded" />
                      <div className="w-32 h-1 bg-slate-100 rounded" />
                      <div className="w-28 h-1 bg-slate-100 rounded" />
                      <div className="w-24 h-1 bg-violet-100 rounded" />
                    </div>

                    <div className="absolute right-2 bottom-2.5 flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                        <span className="text-[9px] text-white font-black leading-none">W</span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <span className="text-[9px] text-emerald-600 font-black">R</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ServiceCard>

          {/* CARD 2: AI Chatbot & RAG Agent */}
          <ServiceCard id="card_ai_services">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                AI Chatbot & RAG Agent
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                Deploy <Highlight>intelligent AI chatbots</Highlight> for customer
                support or <Highlight>RAG agents</Highlight> that retrieve answers
                from your knowledge base — built to{" "}
                <Highlight>automate and scale</Highlight> your business.
              </p>

              <TagPills
                tags={[
                  "AI Chatbot",
                  "RAG Agent",
                  "Lead Qualification",
                  "Knowledge Base",
                  "Customer Support",
                  "Automation",
                ]}
              />
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 mt-6">
              <div className="flex gap-2 justify-center text-gray-300 font-mono text-[10px] mb-3 select-none">
                <span>🤖</span>
                <span>+</span>
                <span>🧠</span>
                <span>=</span>
                <span>⚡</span>
              </div>

              <motion.div
                variants={logosContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-3 gap-3 max-w-[240px] mx-auto"
              >
                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-violet-500/5 border border-violet-400/20 flex flex-col items-center justify-center text-violet-600 shadow-sm cursor-default"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1 font-mono tracking-wider">CHATBOT</span>
                </motion.div>

                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-emerald-500/5 border border-emerald-400/20 flex flex-col items-center justify-center text-emerald-600 shadow-sm cursor-default"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1 font-mono tracking-wider">RAG</span>
                </motion.div>

                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-sky-500/5 border border-sky-400/20 flex flex-col items-center justify-center text-sky-600 shadow-sm cursor-default"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1 font-mono tracking-wider">AUTO</span>
                </motion.div>

                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-amber-500/5 border border-amber-400/20 flex flex-col items-center justify-center text-amber-600 shadow-sm cursor-default"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1 font-mono tracking-wider">LEAD</span>
                </motion.div>

                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-rose-500/5 border border-rose-400/20 flex flex-col items-center justify-center text-rose-600 shadow-sm cursor-default"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1 font-mono tracking-wider">AGENT</span>
                </motion.div>

                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-white shadow-sm cursor-default"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1 font-mono tracking-wider">API</span>
                </motion.div>
              </motion.div>

              <div className="flex gap-4 justify-center text-gray-300 font-mono text-[8px] mt-3">
                <span>🤖 OPENAI / CLAUDE</span>
                <span>⚡ VECTOR SEARCH</span>
              </div>
            </div>
          </ServiceCard>

          {/* CARD 3: Web Design & Branding */}
          <div className="card-templates flex flex-col">
            <ServiceCard id="card_design_branding">
              <div>
                <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                  Web Design & Branding
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                  From <Highlight>pixel-perfect web design</Highlight> to
                  complete <Highlight>brand identity systems</Highlight> —
                  logos, color palettes, typography, and full brand kits that
                  make your business <Highlight>unforgettable</Highlight>.
                </p>

                <TagPills
                  tags={[
                    "Web Design",
                    "Branding Design",
                    "Logo Design",
                    "Brand Kit",
                    "Typography",
                    "Color Palette",
                  ]}
                />
              </div>

              <div className="flex flex-col gap-4 mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex gap-4 justify-center">
                  <ProgressCircle percentage={98} label="Design" id="design" />
                  <ProgressCircle percentage={99} label="Branding" id="branding" />
                  <ProgressCircle percentage={100} label="Consistency" id="consistency" />
                </div>

                <div className="mt-2 px-1">
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">
                    <span>Brand Recognition Score</span>
                    <span className="text-violet-500 font-black">+85%</span>
                  </div>
                  <div className="relative w-full h-2.5 bg-gray-200/60 rounded-full overflow-hidden">
                    <div className="fcp-bar h-full bg-gradient-to-r from-violet-500 via-violet-400 to-fuchsia-300 rounded-full" style={{ width: "0%" }} />
                    <div className="absolute top-1/2 left-[85%] -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white bg-violet-500 shadow-md" />
                  </div>
                </div>
              </div>
            </ServiceCard>
          </div>

          {/* CARD 4: Social Media Marketing & Template Customization */}
          <ServiceCard id="card_marketing_templates">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                Social Media & Template Customization
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                Eye-catching <Highlight>social media marketing images</Highlight>{' '}
                designed to stop the scroll, plus{" "}
                <Highlight>template customization</Highlight> to tailor
                any template to your brand — fast, polished, and launch-ready.
              </p>

              <TagPills
                tags={[
                  "Social Media Design",
                  "Marketing Images",
                  "Template Customization",
                  "Brand Styling",
                  "Content Creation",
                  "Fast Delivery",
                ]}
              />
            </div>

            <motion.div
              variants={checklistContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="mt-6 flex flex-col gap-2 bg-gray-50/70 p-3 rounded-2xl border border-gray-100/80"
            >
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Social Media Image Packs" status="dim" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Template Brand Customization" status="complete" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Content Calendar Graphics" status="active" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Ad Creative Design" status="pending" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Brand Consistency Checks" status="dim" />
              </motion.div>
            </motion.div>
          </ServiceCard>

        </div>

      </div>
    </section>
  );
}
