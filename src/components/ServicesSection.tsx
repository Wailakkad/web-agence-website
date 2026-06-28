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
            Design. Build. Scale.
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
          
          {/* CARD 1: React & Next.js Templates */}
          <ServiceCard id="card_react_templates">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                React & Next.js Templates
              </h3>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                Browse our library of{" "}
                <Highlight>premium, conversion-optimized</Highlight> React and
                Next.js templates built for{" "}
                <Highlight>speed, SEO, and scalability</Highlight>, so your
                brand launches faster.
              </p>

              <TagPills
                tags={[
                  "Next.js Templates",
                  "React Components",
                  "Tailwind CSS",
                  "TypeScript",
                  "Dark Mode Ready",
                  "SEO Optimized",
                ]}
              />
            </div>

            {/* Visual Mockup - Split window component view */}
            <div className="w-full h-36 mt-6 relative" style={{ perspective: "1000px" }}>
              <div
                className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none"
                style={{ transform: "rotateX(8deg)" }}
              >
                {/* Simulated browser header bar */}
                <div className="bg-slate-950/60 px-3 py-2 flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono">templates.nextcraft.io</span>
                  <div className="w-4" />
                </div>

                {/* Grid Split Content */}
                <div className="grid grid-cols-12 h-24">
                  
                  {/* Left Code Editor mockup */}
                  <div className="col-span-4 bg-slate-950/40 border-r border-slate-800/80 p-2 flex flex-col gap-1.5 font-mono text-[8px]">
                    <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold">
                      <span>{`App.tsx`}</span>
                    </div>
                    <div className="space-y-1 opacity-80 scale-95 origin-top-left">
                      <div className="w-12 h-1 bg-slate-700 rounded" />
                      <div className="w-16 h-1 bg-violet-400 rounded" />
                      <div className="w-14 h-1 bg-amber-400 rounded" />
                      <div className="w-10 h-1 bg-slate-700 rounded" />
                    </div>
                  </div>

                  {/* Right Preview content mockup */}
                  <div className="col-span-8 bg-white p-3 flex flex-col justify-between relative">
                    <div className="space-y-1.5">
                      <div className="w-20 h-2 bg-slate-200 rounded" />
                      <div className="w-32 h-1 bg-slate-100 rounded" />
                      <div className="w-28 h-1 bg-slate-100 rounded" />
                    </div>

                    <div className="absolute right-2 bottom-2.5 flex items-center gap-1.5">
                      {/* Next.js logomark */}
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                        <span className="text-[9px] text-white font-black leading-none uppercase">N</span>
                      </div>

                      {/* React Atom */}
                      <div className="w-5 h-5 rounded-full bg-[#00d8ff]/10 border border-[#00d8ff]/30 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-[#00d8ff] animate-[spin_8s_linear_infinite]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" />
                          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" />
                          <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" />
                          <circle cx="12" cy="12" r="1" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ServiceCard>

          {/* CARD 2: Web Development */}
          <ServiceCard id="card_web_development">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                Web Development
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                We build <Highlight>high-performance</Highlight> websites with{" "}
                <Highlight>clean, scalable React code</Highlight>, optimized for
                speed, responsiveness, and{" "}
                <Highlight>seamless user experience</Highlight>.
              </p>

              <TagPills
                tags={[
                  "React Development",
                  "Next.js",
                  "API Integration",
                  "Responsive Design",
                  "Performance Optimization",
                  "TypeScript",
                ]}
              />
            </div>

            {/* Visual logo grid mockup */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 mt-6">
              
              {/* Top micro indicators */}
              <div className="flex gap-2 justify-center text-gray-300 font-mono text-[10px] mb-3 select-none">
                <span>⚛️</span>
                <span>+</span>
                <span>📁</span>
                <span>=</span>
                <span>✨</span>
              </div>

              {/* Grid 3x2 containing premium custom logomarks */}
              <motion.div
                variants={logosContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-3 gap-3 max-w-[240px] mx-auto"
              >
                {/* 1. React Logo Box */}
                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-sky-500/5 border border-sky-400/20 flex flex-col items-center justify-center text-[#00d8ff] shadow-sm cursor-default"
                >
                  <svg className="w-7 h-7 text-[#00d8ff] animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="12" rx="3" ry="8.5" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="3" ry="8.5" transform="rotate(90 12 12)" />
                    <ellipse cx="12" cy="12" rx="3" ry="8.5" transform="rotate(150 12 12)" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1 font-mono tracking-wider">REACT</span>
                </motion.div>

                {/* 2. Next.js Box */}
                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-black border border-neutral-900 flex flex-col items-center justify-center text-white shadow-sm cursor-default"
                >
                  <span className="font-sans font-black text-xl leading-none">N</span>
                  <span className="text-[7.5px] font-bold mt-1.5 font-mono tracking-wider">NEXT.JS</span>
                </motion.div>

                {/* 3. TypeScript Box */}
                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-[#3178c6]/5 border border-[#3178c6]/20 flex flex-col items-center justify-center text-[#3178c6] shadow-sm cursor-default"
                >
                  <span className="font-bold font-mono text-lg leading-none">TS</span>
                  <span className="text-[7.5px] font-bold mt-1.5 font-mono tracking-wider">TYPESCRIPT</span>
                </motion.div>

                {/* 4. Tailwind Box */}
                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-teal-500/5 border border-teal-500/20 flex flex-col items-center justify-center text-teal-500 shadow-sm cursor-default"
                >
                  <svg className="w-6 h-6 fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M12 6.018C13.8 3.582 16.5 2.5 20.1 2.5C21.9 4.3 22 7.1 20.3 10.91C18.5 14.72 15.65 16.91 11.75 17.48C9.95 20.1 7.25 21.018 3.65 21.018C1.85 19.218 1.8 16.218 3.45 12.6C5.1 8.982 7.95 6.792 11.85 6.222C11.9 6.118 11.95 6.068 12 6.018Z" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1.5 font-mono tracking-wider">TAILWIND</span>
                </motion.div>

                {/* 5. Node.js Box */}
                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-[#339933]/5 border border-[#339933]/20 flex flex-col items-center justify-center text-[#339933] shadow-sm cursor-default"
                >
                  <span className="font-black text-sm font-sans tracking-tight">Node</span>
                  <span className="text-[7.5px] font-bold mt-1.5 font-mono tracking-wider font-semibold">NODE.JS</span>
                </motion.div>

                {/* 6. Vercel Box */}
                <motion.div
                  variants={logoBoxVariants}
                  className="h-16 rounded-xl bg-black border border-neutral-900 flex flex-col items-center justify-center text-white shadow-sm cursor-default"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M24 22.525H0L12 1.742L24 22.525Z" />
                  </svg>
                  <span className="text-[7.5px] font-bold mt-1.5 font-mono tracking-wider">VERCEL</span>
                </motion.div>
              </motion.div>

              {/* Bottom labels */}
              <div className="flex gap-4 justify-center text-gray-300 font-mono text-[8px] mt-3">
                <span>⚙️ NPM CORE</span>
                <span>⚡ DEPLOY SECURE</span>
              </div>

            </div>
          </ServiceCard>

          {/* CARD 3: Custom Template Customization (card-templates class wrapper for GSAP triggering) */}
          <div className="card-templates flex flex-col">
            <ServiceCard id="card_template_customization">
              <div>
                <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                  Custom Template Customization
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                  Bought a template but need it{" "}
                  <Highlight>tailored to your brand</Highlight>? We'll customize
                  it with your{" "}
                  <Highlight>colors, content, and features</Highlight> — fast
                  turnaround, <Highlight>pro-level polish</Highlight>.
                </p>

                <TagPills
                  tags={[
                    "React Templates",
                    "Next.js Themes",
                    "Brand Styling",
                    "Component Edits",
                    "Launch-Ready",
                    "Fast Delivery",
                  ]}
                />
              </div>

              {/* Visual custom performance circles mockup */}
              <div className="flex flex-col gap-4 mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex gap-4 justify-center">
                  <ProgressCircle percentage={98} label="Performance" id="perf" />
                  <ProgressCircle percentage={99} label="Accessibility" id="access" />
                  <ProgressCircle percentage={100} label="SEO Score" id="seo" />
                </div>

                {/* Animated First Contentful Paint Bar */}
                <div className="mt-2 px-1">
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">
                    <span>First Contentful Paint (FCP)</span>
                    <span className="text-emerald-500 font-black">0.4s</span>
                  </div>
                  <div className="relative w-full h-2.5 bg-gray-200/60 rounded-full overflow-hidden">
                    <div className="fcp-bar h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-300 rounded-full" style={{ width: "0%" }} />
                    <div className="absolute top-1/2 left-[18%] -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white bg-emerald-500 shadow-md" />
                  </div>
                </div>
              </div>
            </ServiceCard>
          </div>

          {/* CARD 4: SEO & Performance Optimization */}
          <ServiceCard id="card_seo_optimization">
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0a0a0a] mb-3 tracking-tight">
                Rank Higher. Grow Faster.
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed antialiased">
                We combine <Highlight>technical SEO</Highlight> with{" "}
                <Highlight>Next.js performance best practices</Highlight> that
                attract, engage, and convert. From{" "}
                <Highlight>Core Web Vitals</Highlight> to content strategy —
                your growth is covered.
              </p>

              <TagPills
                tags={[
                  "SEO Audits",
                  "Core Web Vitals",
                  "Keyword Research",
                  "Schema Markup",
                  "On-Page SEO",
                  "Performance Reports",
                ]}
              />
            </div>

            {/* Visual Task list / Checklist mockup */}
            <motion.div
              variants={checklistContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="mt-6 flex flex-col gap-2 bg-gray-50/70 p-3 rounded-2xl border border-gray-100/80"
            >
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Responsive Improvements" status="dim" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Branding Consistency Checks" status="complete" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Core Web Vitals Audit" status="active" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Performance Optimization" status="pending" />
              </motion.div>
              <motion.div variants={checklistRowVariants}>
                <ChecklistItem label="Weekly Reports & Analysis" status="dim" />
              </motion.div>
            </motion.div>
          </ServiceCard>

        </div>

      </div>
    </section>
  );
}
