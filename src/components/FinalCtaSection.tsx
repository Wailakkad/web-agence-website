"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useGSAPReady } from "../lib/animations";
import { BookingWidget } from "./ui/BookingWidget";
import { GrowthGraph } from "./ui/GrowthGraph";

export default function FinalCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();

  useEffect(() => {
    if (!gsapInstance || !containerRef.current) return;
    const { gsap } = gsapInstance;

    const ctx = gsap.context(() => {
      
      // 1. Animate SVG path draw
      gsap.fromTo(
        ".growth-line",
        { strokeDasharray: "1000", strokeDashoffset: "1000" },
        {
          strokeDashoffset: "0",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".cta-final-section",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // 2. Float pointer cursor continuously
      gsap.to(".graph-cursor", {
        y: -6,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
      
      // 3. Pulse dots staggered entrance
      gsap.fromTo(
        ".graph-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 0.4,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".cta-final-section",
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // 4. CTA left column texts entrance
      gsap.fromTo(
        ".cta-text-col",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-final-section",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // 5. CTA right column graph entrance
      gsap.fromTo(
        ".cta-graph-col",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-final-section",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
    }, containerRef.current);

    return () => ctx.revert();
  }, [gsapInstance]);

  return (
    <section 
      ref={containerRef}
      className="cta-final-section relative overflow-hidden bg-black"
      id="final_brand_growth_hero_banner"
      style={{
        background: `radial-gradient(ellipse at top right, rgba(255,255,255,0.06) 0%, transparent 55%), #000000`
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Texts and Booking layout badges */}
          <div className="cta-text-col flex flex-col items-start text-left" id="final_cta_left_details">
            
            {/* Main Headline card header */}
            <h2 className="text-white font-sans font-black text-4xl md:text-5xl leading-[1.1] tracking-tight mb-4 text-left">
              Ready to Scale Your<br />
              Project to the Next Level?
            </h2>

            {/* Subtitle description overlay */}
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-10 max-w-sm text-left">
              Let&apos;s take your project to new heights. Reach out and see how we can help you build, launch, and grow.
            </p>

            {/* Founder call booking Widget overlay */}
            <BookingWidget />

          </div>

          {/* RIGHT COLUMN: Interactive vector growth curve graph */}
          <div className="cta-graph-col w-full h-full min-h-[250px] flex items-center justify-center" id="final_cta_right_visuals">
            <GrowthGraph />
          </div>

        </div>
      </div>
    </section>
  );
}
