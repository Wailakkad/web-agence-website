import { useRef, useEffect } from "react";
import ServiceCard from "./ui/ServiceCardBento";
import { useGSAPReady } from "../lib/animations";
import {
  SERVICE_IMAGE_REACT_TEMPLATE,
  SERVICE_IMAGE_WEB_DEV,
  SERVICE_IMAGE_ANALYTICS,
} from "../constants";

export default function ServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();

  // ScrollTrigger animation for staggered slide-up of cards
  useEffect(() => {
    if (!gsapInstance || !containerRef.current) return;
    const { gsap, ScrollTrigger } = gsapInstance;

    const cards = containerRef.current.querySelectorAll(".service-card-animate");

    // Fade and reveal cards stagger
    gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Refresh ScrollTrigger to account for newly loaded images/DOM shifts
    ScrollTrigger.refresh();
  }, [gsapInstance]);

  return (
    <section 
      id="services" 
      className="py-16 bg-white w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aesthetic sub-header indicating professional capability */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full">
              Core Capabilities
            </span>
            <h2 className="text-[#0a0a0a] font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mt-3">
              Services Built to Scale.
            </h2>
          </div>
          <p className="text-gray-400 font-medium text-xs sm:text-sm max-w-xs md:text-right">
            Handcrafted with pixel-perfection to elevate your business' speed, aesthetic, and conversions.
          </p>
        </div>

        {/* Bento grid layout: 4 columns on desktop */}
        <div
          ref={containerRef}
          id="service_cards_bento_grid"
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 - React Templates (Linear Gradient Orange) */}
          <div className="service-card-animate lg:col-span-1">
            <ServiceCard
              id="react_templates"
              type="simple"
              title={"React & Next.js\nTemplates"}
              gradientClass="bg-gradient-to-br from-[#f97316] to-[#ea580c] hover:brightness-105"
              imageSrc={SERVICE_IMAGE_REACT_TEMPLATE}
              colSpanClass="w-full"
            />
          </div>

          {/* Card 2 - Web Development (Near black) */}
          <div className="service-card-animate lg:col-span-1">
            <ServiceCard
              id="web_development"
              type="simple"
              title={"Web\nDevelopment"}
              gradientClass="bg-[#0a0a0a] border-white/20 hover:brightness-110"
              imageSrc={SERVICE_IMAGE_WEB_DEV}
              colSpanClass="w-full"
            />
          </div>

          {/* Card 3 - SEO, Performance & Analytics (Linear Gradient Purple to Blue - Wider layout) */}
          <div className="service-card-animate lg:col-span-2">
            <ServiceCard
              id="seo_performance"
              type="wide"
              title={"SEO, Performance\n& Analytics"}
              description="Boost visibility and keep your site running at peak performance with ongoing optimization."
              gradientClass="bg-gradient-to-br from-[#7c3aed] to-[#4f46e5]"
              imageSrc={SERVICE_IMAGE_ANALYTICS}
              bullets={[
                "Core Web Vitals Optimization",
                "Technical SEO & Schema Integration",
                "Ongoing Proactive Site Maintenance",
              ]}
              colSpanClass="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
