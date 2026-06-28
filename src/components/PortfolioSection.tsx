"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useGSAPReady } from "../lib/animations";
import { PROJECTS_DATA } from "../lib/projectsData";
import { ProjectCard } from "./ui/ProjectCard";
import { CarouselArrow } from "./ui/CarouselArrow";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const gsapInstance = useGSAPReady();

  // Navigation track state tracking
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [xOffset, setXOffset] = useState(0);

  // Measure card + gap size dynamically on the frontend
  const getCardWidth = () => {
    if (!trackRef.current || trackRef.current.children.length === 0) {
      // Fallback
      return window.innerWidth < 768 ? 280 + 24 : 340 + 24;
    }
    const firstChild = trackRef.current.children[0] as HTMLElement;
    return firstChild.clientWidth + 24;
  };

  // Re-evaluates state, offset and boundaries
  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track || !track.parentElement || !gsapInstance) return;

    const { gsap } = gsapInstance;
    
    // Read exact translation value from GSAP
    const x = gsap.getProperty(track, "x") as number;
    const maxScroll = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);

    setXOffset(x);
    setCanScrollLeft(x < -5);
    setCanScrollRight(x > -maxScroll + 5);

    // Compute active index based on active card elements
    const cardWidth = getCardWidth();
    const computedIndex = Math.round(Math.abs(x) / cardWidth);
    setActiveIndex(Math.min(computedIndex, PROJECTS_DATA.length - 1));
  };

  // 1. Initial GSAP ScrollTriggers for header and grid entrance
  useEffect(() => {
    if (!gsapInstance || !sectionRef.current) return;
    const { gsap, ScrollTrigger } = gsapInstance;

    const ctx = gsap.context(() => {
      // Entrance reveal on header
      gsap.fromTo(
        ".portfolio-section-title",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".portfolio-header-btn",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-section",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards animate in with a slight beautiful stagger from right
      gsap.fromTo(
        ".project-card",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".carousel-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, [gsapInstance]);

  // 2. Initialize Draggable scrolling behaviour
  useEffect(() => {
    if (!gsapInstance) return;
    const { gsap } = gsapInstance;
    let draggableInstance: any = null;

    const initDraggable = async () => {
      try {
        const draggableModule = await import("gsap/Draggable");
        const Draggable = draggableModule.Draggable || draggableModule.default;
        gsap.registerPlugin(Draggable);

        const track = trackRef.current;
        if (!track || !track.parentElement) return;

        const maxScroll = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);

        const dragControls = Draggable.create(track, {
          type: "x",
          bounds: { minX: -maxScroll, maxX: 0 },
          inertia: true,
          edgeResistance: 0.65,
          onDrag: updateScrollState,
          onThrowUpdate: updateScrollState,
          onThrowComplete: updateScrollState,
          onDragEnd: updateScrollState,
        });

        draggableInstance = dragControls[0];
        
        // Initial boundary alignment
        setTimeout(updateScrollState, 150);
      } catch (err) {
        console.error("Failed to load GSAP Draggable plugin", err);
      }
    };

    initDraggable();

    return () => {
      if (draggableInstance) {
        draggableInstance.kill();
      }
    };
  }, [gsapInstance]);

  // Re-calculate boundaries and index when container bounds change
  useEffect(() => {
    const handleResize = () => {
      updateScrollState();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gsapInstance]);

  // Arrow trigger navigators
  const scrollNext = () => {
    if (!gsapInstance || !trackRef.current || !trackRef.current.parentElement) return;
    const { gsap } = gsapInstance;
    const track = trackRef.current;

    const cardWidth = getCardWidth();
    const maxScroll = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
    
    const currentX = gsap.getProperty(track, "x") as number;
    let targetX = currentX - cardWidth;

    if (targetX < -maxScroll) {
      targetX = -maxScroll;
    }

    gsap.to(track, {
      x: targetX,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: updateScrollState,
      onComplete: updateScrollState,
    });
  };

  const scrollPrev = () => {
    if (!gsapInstance || !trackRef.current) return;
    const { gsap } = gsapInstance;
    const track = trackRef.current;

    const cardWidth = getCardWidth();
    const currentX = gsap.getProperty(track, "x") as number;
    let targetX = currentX + cardWidth;

    if (targetX > 0) {
      targetX = 0;
    }

    gsap.to(track, {
      x: targetX,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: updateScrollState,
      onComplete: updateScrollState,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="new_portfolio_section"
      className="portfolio-section py-24 bg-white select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER: Left-oriented title, custom right-aligned CTA with arrow */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="portfolio-section-header">
            <h2 className="portfolio-section-title font-sans font-black text-4xl md:text-5xl text-[#0a0a0a] tracking-tight">
              What We've Designed & Delivered
            </h2>
          </div>

          <div className="portfolio-header-btn shrink-0">
            <motion.button
              id="portfolio_contact_cta_btn"
              whileHover={{ scale: 1.03, backgroundColor: "#6d28d9" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#7c3aed] text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
            >
              Our Projects <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>

      {/* CAROUSEL TRACK VIEWPORT: bleeding seamlessly to the right side of screen */}
      <div className="carousel-container w-full overflow-hidden pl-6 md:pl-12 lg:pl-[calc((100vw-min(1280px,100vw))/2+24px)] shrink-0">
        <div
          ref={trackRef}
          id="portfolio_scrolling_track"
          className="flex gap-6 md:cursor-grab md:active:cursor-grabbing will-change-transform"
          style={{ touchAction: "pan-y" }}
        >
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              id={`portfolio_project_${project.id}`}
            />
          ))}
        </div>
      </div>

      {/* NAVIGATION CONTROLS BAR: Left-aligned relative to our matching section columns */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex items-center gap-3 pl-0 md:pl-6">
          <CarouselArrow
            direction="prev"
            disabled={!canScrollLeft}
            onClick={scrollPrev}
            id="portfolio_arrow_prev"
          />

          <CarouselArrow
            direction="next"
            disabled={!canScrollRight}
            onClick={scrollNext}
            id="portfolio_arrow_next"
          />

          {/* Bullet/Slide Count indicators */}
          <span className="text-sm font-mono font-bold text-gray-400 ml-2 select-none">
            {activeIndex + 1} / {PROJECTS_DATA.length}
          </span>
        </div>
      </div>
    </section>
  );
}
