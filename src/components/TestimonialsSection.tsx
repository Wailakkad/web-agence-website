"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useGSAPReady } from "../lib/animations";
import { TESTIMONIALS_DATA } from "../lib/testimonialsData";
import { AvatarCluster } from "./ui/AvatarCluster";
import { TestimonialCard } from "./ui/TestimonialCard";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();

  // Dynamic count of cards shown simultaneously depending on window size
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Monitor resize safely to adapt visible items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handler to get cyclic, wrapping list of raw reviews
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % TESTIMONIALS_DATA.length;
      items.push(TESTIMONIALS_DATA[index]);
    }
    return items;
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play interval triggers
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, visibleCount]);

  // GSAP Entrance reveals hook
  useEffect(() => {
    if (!gsapInstance || !sectionRef.current) return;
    const { gsap } = gsapInstance;

    const ctx = gsap.context(() => {
      // 1. Title fade up
      gsap.fromTo(
        ".testimonials-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 2. Subtitle fade up
      gsap.fromTo(
        ".testimonials-subtitle",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 3. Avatar cluster bouncy scale pop-in
      gsap.fromTo(
        ".avatar-item",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.06,
          duration: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, [gsapInstance]);

  return (
    <section
      ref={sectionRef}
      id="new_testimonials_social_proof_section"
      className="testimonials-section py-24 px-6 bg-white border-t border-gray-100 select-none overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Reviewer overlapping top cluster */}
        <div className="avatar-cluster cursor-pointer" id="testimonials_avatar_cluster_widget">
          <AvatarCluster testimonials={TESTIMONIALS_DATA} />
        </div>

        {/* Dynamic Headers */}
        <h2 className="testimonials-title font-sans font-black text-4xl md:text-5xl lg:text-[52px] text-[#0a0a0a] tracking-tight leading-tight text-center mb-4 max-w-3xl">
          Great Results Matter, But<br className="hidden sm:inline" /> Client Trust Matters More
        </h2>

        <p className="testimonials-subtitle text-gray-500 text-sm md:text-base text-center leading-relaxed mb-14 max-w-sm mx-auto">
          Hear firsthand what founders and developers say about working with FrameLab
        </p>

        {/* Carousel grid viewport with custom hover listeners to pause auto-advancing */}
        <div
          id="testimonials_cards_slide_viewport"
          className="w-full relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleItems().map((testimonial, i) => {
                // Determine center card state for focus enhancement
                const isCenter = visibleCount === 3 ? i === 1 : i === 0;
                
                return (
                  <motion.div
                    key={`${testimonial.id}_${i}`}
                    id={`testimonial_card_framer_motion_wrapper_${testimonial.id}`}
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -60, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="h-full"
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      isCenter={isCenter}
                      index={i}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Centered navigation controller dots and arrows */}
        <div className="flex items-center justify-center gap-4 mt-12" id="testimonials_carousel_controls_container">
          {/* Left Arrow Button */}
          <motion.button
            id="testimonials_arrow_prev_btn"
            onClick={handlePrev}
            whileHover={{ scale: 1.08, borderColor: "#7c3aed" }}
            whileTap={{ scale: 0.94 }}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#7c3aed] hover:border-[#7c3aed] transition-colors duration-200 bg-white cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </motion.button>

          {/* Pagination Indicators */}
          <div className="flex gap-1.5" id="testimonials_pagination_dots_bar">
            {TESTIMONIALS_DATA.map((_, i) => {
              const isActive = i === currentIndex;
              return (
                <motion.button
                  key={`dot_${i}`}
                  id={`carousel_pagination_dot_${i}`}
                  onClick={() => setCurrentIndex(i)}
                  animate={{
                    width: isActive ? 20 : 6,
                    backgroundColor: isActive ? "#7c3aed" : "#d1d5db"
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full cursor-pointer touch-none"
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <motion.button
            id="testimonials_arrow_next_btn"
            onClick={handleNext}
            whileHover={{ scale: 1.08, borderColor: "#7c3aed" }}
            whileTap={{ scale: 0.94 }}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#7c3aed] hover:border-[#7c3aed] transition-colors duration-200 bg-white cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
