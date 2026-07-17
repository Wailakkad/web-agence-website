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
              Full Agency Services
            </span>
            <h2 className="text-[#0a0a0a] font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mt-3">
              Everything You Need Under One Roof.
            </h2>
          </div>
          <p className="text-gray-400 font-medium text-xs sm:text-sm max-w-xs md:text-right">
            From websites and AI to branding and social media — we design, build, and scale your entire digital presence.
          </p>
        </div>

        {/* Bento grid layout: 4 columns on desktop */}
        <div
          ref={containerRef}
          id="service_cards_bento_grid"
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 - Website & AI Services (Wider layout - Purple Gradient) */}
          <div className="service-card-animate lg:col-span-2">
            <ServiceCard
              id="website_ai"
              type="wide"
              title={"Website Building\n& AI Solutions"}
              description="From new websites and rebuilds to AI chatbots and RAG agents — we build everything that powers your business online."
              gradientClass="bg-gradient-to-br from-[#7c3aed] to-[#4f46e5]"
              imageSrc={SERVICE_IMAGE_REACT_TEMPLATE}
              bullets={[
                "Website Building & Rebuild",
                "AI Chatbot Development",
                "RAG Agent Building",
              ]}
              colSpanClass="w-full"
            />
          </div>

          {/* Card 2 - Web Design & Branding (Orange Gradient) */}
          <div className="service-card-animate lg:col-span-1">
            <ServiceCard
              id="design_branding"
              type="simple"
              title={"Web Design\n& Branding"}
              gradientClass="bg-gradient-to-br from-[#f97316] to-[#ea580c] hover:brightness-105"
              imageSrc={SERVICE_IMAGE_WEB_DEV}
              colSpanClass="w-full"
            />
          </div>

          {/* Card 3 - Social Media & Templates (Dark) */}
          <div className="service-card-animate lg:col-span-1">
            <ServiceCard
              id="social_templates"
              type="simple"
              title={"Social Media\n& Templates"}
              gradientClass="bg-[#0a0a0a] border-white/20 hover:brightness-110"
              imageSrc={SERVICE_IMAGE_ANALYTICS}
              colSpanClass="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
