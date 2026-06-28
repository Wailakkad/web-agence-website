import { motion } from "motion/react";
import { TemplateMockupGrid } from "./TemplateMockupGrid";

export function TemplatesBanner() {
  return (
    <div
      id="templates_cta_floating_banner"
      className="templates-banner bg-[#0a0a0a] rounded-3xl overflow-hidden relative min-h-[440px] shadow-2xl border border-neutral-900"
    >
      {/* Absolute radial purple-blue glow on right side */}
      <div 
        className="absolute top-[-20%] right-[-14%] w-[65%] h-[140%] pointer-events-none z-0 opacity-80"
        style={{
          background: "radial-gradient(ellipse, rgba(99, 60, 220, 0.35) 0%, rgba(37, 99, 235, 0.15) 40%, transparent 70%)"
        }}
      />

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10 px-8 py-10 md:px-14 md:py-16">
        
        {/* LEFT COLUMN: Text content */}
        <div className="flex flex-col items-start" id="templates_left_context">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center border border-gray-600/40 rounded-full px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-md">
            <span className="text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase select-none">
              Browse. Pick. Launch.
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white font-sans font-black text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-5 text-left">
            Templates That<br />Deliver Real Impact.
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm text-left">
            Explore 50+ high-converting React & Next.js templates built for performance, speed, and style. Designed to launch fast and scale effortlessly — these templates do the talking.
          </p>

          {/* Big Stat Count Box with CSS Counter Trigger */}
          <div className="mb-8 flex flex-col items-start select-none" id="templates_counter_tracker_box">
            <span className="stat-counter text-white font-sans font-black text-6xl md:text-7xl tracking-tighter leading-none">
              50+
            </span>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5 font-bold tracking-wide uppercase">
              Pre-Built React & Next.js Templates
            </p>
          </div>

          {/* CTA Browse Link Button */}
          <motion.a
            id="browse_templates_cta_btn"
            href="#"
            whileHover={{ scale: 1.04, backgroundColor: "#6d28d9" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#7c3aed] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-violet-500/20 cursor-pointer"
          >
            Browse All Templates
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.a>

        </div>

        {/* RIGHT COLUMN: 3D Tilting Mosaic Screenshot Grid Mockup */}
        <div className="lg:col-span-1 templates-grid w-full h-full min-h-[300px] flex items-center justify-center">
          <TemplateMockupGrid />
        </div>

      </div>
    </div>
  );
}
