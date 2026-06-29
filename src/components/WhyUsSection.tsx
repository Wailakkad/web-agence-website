"use client";

import { useEffect, useRef } from "react";
import { useGSAPReady } from "../lib/animations";
import { FeatureItem } from "./ui/FeatureItem";
import { WhyCtaCard } from "./ui/WhyCtaCard";

const FEATURES_DATA = [
  {
    id: 1,
    number: "01",
    icon: "code",
    title: "React Performance",
    description: "Get lightning-fast load times with Next.js SSR, ISR, and optimized React components that score 95+ on Core Web Vitals.",
  },
  {
    id: 2,
    number: "02",
    icon: "layers",
    title: "Component Architecture",
    description: "Every project built with reusable, scalable component systems so your codebase grows with your business.",
  },
  {
    id: 3,
    number: "03",
    icon: "chart",
    title: "SEO & Performance",
    description: "Clean semantic code, server-side rendering, and advanced meta controls help your site rank higher and load faster.",
  },
  {
    id: 4,
    number: "04",
    icon: "template",
    title: "Ready-Made Templates",
    description: "Launch faster with premium React/Next.js templates — fully customizable, production-ready, and built to convert.",
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();

  useEffect(() => {
    if (!gsapInstance || !sectionRef.current) return;
    const { gsap } = gsapInstance;

    const ctx = gsap.context(() => {
      // 1. Title reveal
      gsap.fromTo(
        ".why-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Feature items stagger entrance
      gsap.fromTo(
        ".feature-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. CTA Card sliding entrance
      gsap.fromTo(
        ".cta-card",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Continuously rotating orbit orbits ring
      gsap.to(".orbit-ring", {
        rotation: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });

      // 5. Counter-rotating inner circles to preserve logo orientation
      gsap.to(".orbit-logo-inner", {
        rotation: -360,
        duration: 18,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });

      // 6. Cross Divider grid lines scale in on hover/view
      gsap.fromTo(
        ".grid-divider-h",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".grid-divider-v",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, [gsapInstance]);

  return (
    <section
      ref={sectionRef}
      id="new_why_us_section"
      className="why-section py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden select-none"
      style={{
        background: "radial-gradient(ellipse at top left, rgba(100, 60, 220, 0.2) 0%, transparent 55%), #000000",
      }}
    >
      {/* Subtle top left background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(ellipse_80%_80%_at_0%_0%,rgba(124,58,237,0.12),transparent)]" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="why-title opacity-100 transform translate-y-0 text-center lg:text-left">
          <h2 className="text-white font-sans font-black text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl leading-none">
            Why FrameLab? Here's why
          </h2>
        </div>

        {/* 2-Columns grid on desktop, single column on tablet/mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Features Quadrant 2x2 with cross dividers */}
          <div className="lg:col-span-2 relative features-grid pb-4">
            
            {/* Embedded Grid structure */}
            <div className="grid grid-cols-2 relative">
              
              {/* Vertical divider line */}
              <div
                className="grid-divider-v absolute left-1/2 top-0 bottom-0 w-px bg-gray-800/80 origin-top"
                style={{ transform: "translateX(-50%)" }}
              />

              {/* Horizontal divider line */}
              <div
                className="grid-divider-h absolute top-1/2 left-0 right-0 h-px bg-gray-800/80 origin-left"
                style={{ transform: "translateY(-50%)" }}
              />

              {/* Individual Feature Quadrants */}
              {FEATURES_DATA.map((feature, idx) => (
                <FeatureItem
                  key={feature.id}
                  number={feature.number}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={idx}
                />
              ))}
            </div>

          </div>

          {/* RIGHT SIDE: White floating CTA card with rotating orbital rings */}
          <div className="lg:col-span-1 flex justify-center w-full">
            <WhyCtaCard />
          </div>

        </div>
      </div>
    </section>
  );
}
