import { useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import MosaicCard from "./MosaicCard";

// Step 1 — Update heroMosaicTemplates data array:
const heroMosaicTemplates = [
  {
    id: "slot-1-left-top",
    src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1781907232/first_left_top.jpg",
    alt: "SaaS Launch - React Next.js Template Hero Section",
    title: "SaasLaunch",
    category: "SaaS",
    position: "left-top",    // tall card, left column
    objectPosition: "top"    // show from top of image
  },
  {
    id: "slot-2-left-bottom",
    src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1781907232/second_left_bottom.jpg",
    alt: "AgencyPro - React Next.js Template Features Section",
    title: "AgencyPro",
    category: "Agency",
    position: "left-bottom",  // shorter card, left column
    objectPosition: "center"  // show center of image
  },
  {
    id: "slot-3-right-top",
    src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1781907519/first_right.jpg",
    alt: "FintechDash - React Next.js Template",
    title: "FintechDash",
    category: "Finance",
    position: "right-top",    // shortest card, right column top
    objectPosition: "top"     // show navbar + hero top area
  },
  {
    id: "slot-4-right-center",
    src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1781907353/center_right.jpg",
    alt: "StartupKit - React Next.js Template",
    title: "StartupKit",
    category: "Startup",
    position: "right-center",  // mid card, right column
    objectPosition: "center"   // show middle section
  },
  {
    id: "slot-5-right-bottom",
    src: "https://res.cloudinary.com/dhkyla1rv/image/upload/v1781907459/thirty_right.png",
    alt: "EcomStore - React Next.js Template",
    title: "EcomStore",
    category: "E-Commerce",
    position: "right-bottom",  // bottom card, right column
    objectPosition: "top"      // show top of this section
  }
];

export default function TemplatesHero() {
  
  // Step 4 — Add GSAP float animation:
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Left column floats UP slowly
      gsap.to(".mosaic-left-col", {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      })
      
      // Right column floats DOWN (opposite direction)
      gsap.to(".mosaic-right-col", {
        y: 12,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5
      })
      
    })
    
    return () => ctx.revert()
  }, []);

  return (
    <section className="templates-hero min-h-[85vh] flex items-center overflow-hidden px-6 md:px-12 lg:px-20 py-24 bg-white mt-16 text-left select-none">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Text Content */}
          <div className="text-left">
            <motion.h1
              className="font-black text-5xl md:text-6xl lg:text-[64px] text-[#0a0a0a] leading-[1.08] tracking-tight mb-6 font-sans"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Quickly Launch Your<br />
              Stunning Websites<br />
              with Our Templates
            </motion.h1>

            <motion.p
              className="text-gray-500 text-base leading-relaxed mb-10 max-w-[480px] font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Perfect for developers, designers, and SaaS founders. Get everything you need to build, launch, and scale your React & Next.js site — all production-ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-14"
            >
              <a
                href="#templates-grid"
                className="inline-flex items-center gap-2.5 bg-[#4f46e5] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-104 hover:bg-[#4338ca] active:scale-97 cursor-pointer shadow-lg shadow-indigo-600/10 font-sans"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("templates-grid")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse All Templates
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </motion.div>

            {/* Built with section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <p className="text-gray-400 text-xs mb-5 font-semibold uppercase tracking-wider font-mono">
                Built with the Best Technologies
              </p>

              <div className="flex items-center gap-8 flex-wrap">
                {/* React */}
                <div className="flex items-center gap-2.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-[spin_8s_linear_infinite]">
                    <circle cx="12" cy="12" r="2" fill="#00d8ff" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.2" fill="none" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
                  </svg>
                  <span className="font-bold text-base text-[#0a0a0a] font-sans">
                    React
                  </span>
                </div>

                {/* Next.js */}
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-white/10 shadow-sm shrink-0">
                    <span className="text-white font-black text-xs font-mono">N</span>
                  </div>
                  <span className="font-bold text-base text-[#0a0a0a] font-sans">
                    Next.js
                  </span>
                </div>

                {/* Tailwind */}
                <div className="flex items-center gap-2.5">
                  <svg width="24" height="15" viewBox="0 0 54 33" fill="#38bdf8" className="shrink-0">
                    <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 16 40.5 16c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C37.256 3.328 34.192 0 27 0zM13.5 16C6.3 16 1.8 19.6 0 26.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C16.744 28.672 19.808 32 26.5 32c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.756 19.328 20.692 16 13.5 16z" />
                  </svg>
                  <span className="font-bold text-base text-[#0a0a0a] font-sans">
                    Tailwind
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN MOSAIC — Real Images */}
          <div className="relative hidden lg:flex gap-4 h-[580px] items-start overflow-visible">
            
            {/* ─── LEFT SUB-COLUMN ─── */}
            <motion.div
              className="mosaic-left-col flex flex-col gap-4 flex-shrink-0 w-[48%]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ 
                delay: 0.3, 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
            >
              
              {/* SLOT 1 — first_left_top.jpg — TALL CARD */}
              <MosaicCard
                item={heroMosaicTemplates[0]}
                height="h-[360px]"
              />
              
              {/* SLOT 2 — second_left_bottom.jpg — SHORT CARD */}
              <MosaicCard
                item={heroMosaicTemplates[1]}
                height="h-[196px]"
              />
              
            </motion.div>
            
            {/* ─── RIGHT SUB-COLUMN ─── */}
            <motion.div
              className="mosaic-right-col flex flex-col gap-4 flex-shrink-0 w-[48%]"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.45, 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
            >
              
              {/* SLOT 3 — first_right.jpg — SHORTEST CARD (top) */}
              <MosaicCard
                item={heroMosaicTemplates[2]}
                height="h-[160px]"
              />
              
              {/* SLOT 4 — center_right.jpg — MID CARD */}
              <MosaicCard
                item={heroMosaicTemplates[3]}
                height="h-[200px]"
              />
              
              {/* SLOT 5 — thirty_right.png — BOTTOM CARD */}
              <MosaicCard
                item={heroMosaicTemplates[4]}
                height="h-[196px]"
              />
              
            </motion.div>
            
            {/* Right edge fade — creates depth effect */}
            <div className="
              absolute right-0 top-0 bottom-0 w-16
              bg-gradient-to-l from-white to-transparent
              pointer-events-none z-30
            "/>
            
            {/* Bottom edge fade */}
            <div className="
              absolute bottom-0 left-0 right-0 h-20
              bg-gradient-to-t from-white to-transparent
              pointer-events-none z-30
            "/>
            
          </div>

        </div>
      </div>
    </section>
  );
}
