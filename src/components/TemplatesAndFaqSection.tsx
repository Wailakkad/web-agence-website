"use client";

import { useEffect, useRef } from "react";
import { useGSAPReady } from "../lib/animations";
import { TemplatesBanner } from "./ui/TemplatesBanner";
import { FaqAccordion } from "./ui/FaqAccordion";
import { StillHaveQuestionsCard } from "./ui/StillHaveQuestionsCard";

export default function TemplatesAndFaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();

  useEffect(() => {
    if (!gsapInstance || !sectionRef.current) return;
    const { gsap } = gsapInstance;

    const ctx = gsap.context(() => {
      // 1. Templates floating banner entrance
      gsap.fromTo(
        ".templates-banner",
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".templates-banner",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 2. Stat counter increment from 0 to 50+ (runs organically on ScrollTrigger)
      const counter = { value: 0 };
      gsap.to(counter, {
        value: 50,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".stat-counter");
          if (el) el.textContent = Math.round(counter.value) + "+";
        },
        scrollTrigger: {
          trigger: ".templates-banner",
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      // 3. Staggered template preview card pop-up trigger
      gsap.fromTo(
        ".template-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.06,
          duration: 0.5,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".templates-banner",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // 4. FAQ column header slide-in
      gsap.fromTo(
        ".faq-header",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 5. Accordion items progressive cascade reveal
      gsap.fromTo(
        ".faq-item",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 82%",
            toggleActions: "play none none none"
          }
        }
      );

    }, sectionRef.current);

    return () => ctx.revert();
  }, [gsapInstance]);

  return (
    <div ref={sectionRef} id="templates_and_faq_unified_canvas" className="bg-white">
      
      {/* ======================================================== */}
      {/* PART 1: TEMPLATES CTA FLOATING BANNER */}
      {/* ======================================================== */}
      <section className="px-6 py-16 bg-white relative" id="floating_templates_cta_wrapper_block">
        <div className="max-w-5xl mx-auto">
          <TemplatesBanner />
        </div>
      </section>

      {/* ======================================================== */}
      {/* PART 2: FAQ ACCORDION AND CTA CARD SECTION */}
      {/* ======================================================== */}
      <section className="faq-section py-20 px-6 bg-white max-w-5xl mx-auto" id="faq_accordion_section">
        
        {/* Mobile/Desktop side-by-side bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE COLUMN: Header + Call to Action card */}
          <div className="lg:col-span-2 faq-header opacity-100 flex flex-col space-y-6" id="faq_left_column">
            
            <div>
              <h2 className="font-sans font-black text-3xl md:text-4xl text-[#0a0a0a] tracking-tight leading-none mb-3">
                FAQs That<br />Actually Help
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                No vague replies. Just real, helpful answers to what you're likely thinking right now.
              </p>
            </div>

            {/* Floating Black Call Card widget */}
            <div>
              <StillHaveQuestionsCard />
            </div>

          </div>

          {/* RIGHT SIDE COLUMN: Sequential Accordion Panel list */}
          <div className="lg:col-span-3 w-full" id="faq_right_column">
            <FaqAccordion />
          </div>

        </div>

      </section>
      
    </div>
  );
}
