import { motion } from "motion/react";
import { OrbitalGraphic } from "./OrbitalGraphic";

export function WhyCtaCard() {
  return (
    <motion.div
      id="why_us_cta_card"
      className="cta-card bg-white rounded-3xl p-8 flex flex-col items-center justify-between min-h-[440px] relative overflow-hidden shadow-xl w-full border border-gray-100"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Decorative subtle background gradient blur inside card */}
      <div className="absolute inset-0 bg-radial-gradient from-violet-100/30 to-transparent pointer-events-none" />

      {/* Card Headline */}
      <h3 className="text-[#0a0a0a] font-sans font-black text-2xl text-center leading-snug mt-4 z-10 tracking-tight">
        Get the website you want,<br />without the headache
      </h3>

      {/* Central Rotating Orbital Graphic */}
      <div className="relative flex items-center justify-center py-4 z-10">
        <OrbitalGraphic />
      </div>

      {/* CTA Button */}
      <motion.a
        id="why_cta_card_submit_btn"
        href="#"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold py-4 px-8 rounded-xl text-center flex items-center justify-center gap-2 transition-colors duration-200 mt-auto cursor-pointer z-10 shadow-md shadow-violet-500/10 text-sm"
      >
        Start a Project
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
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
