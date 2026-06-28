import { motion } from "motion/react";
import { footerData } from "../../lib/footerData";

export default function SocialProofBar() {
  return (
    <motion.div
      className="social-proof-bar mx-0 mb-8 bg-[#f4f4f5] rounded-2xl px-6 py-5 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Top-rated text */}
        <div className="flex items-center gap-3">
          {/* Small decorative dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed] animate-pulse" />
          <span className="font-bold text-sm text-[#0a0a0a] tracking-tight">
            Top-rated by customers
          </span>
        </div>
        
        {/* Center: Rating */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          
          {/* Clutch Icon */}
          <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-xs border border-gray-100">
            {/* Clutch C icon */}
            <div className="w-5 h-5 rounded-full bg-[#ff3d2e] flex items-center justify-center">
              <span className="text-white font-black text-[9px]">C</span>
            </div>
            
            {/* Star icon - styled */}
            <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
          </div>
          
          {/* Stars row */}
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
            {/* Partial star */}
            <svg width="14" height="14" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="footerHalf">
                  <stop offset="80%" stopColor="#f59e0b" />
                  <stop offset="80%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <polygon 
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="url(#footerHalf)"
              />
            </svg>
          </div>
          
          {/* Rating text */}
          <span className="text-gray-500 text-xs">
            Rated <span className="font-semibold text-gray-800">{footerData.stats.rating}</span> on{" "}
            <span className="font-semibold text-[#0a0a0a] hover:text-[#7c3aed] transition-colors">
              {footerData.stats.ratingPlatforms}
            </span>
          </span>
          
        </div>
        
        {/* Right: Avatar cluster + loved by */}
        <div className="flex items-center gap-3">
          
          {/* Overlapping avatars (3) */}
          <div className="flex -space-x-2">
            {[
              "from-blue-400 to-purple-500",
              "from-orange-400 to-rose-400",
              "from-teal-400 to-cyan-500",
            ].map((gradient, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full border-2 border-[#f4f4f5] bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xs`}
                style={{ zIndex: 3 - i }}
              >
                <span className="text-white font-bold text-[10px]">
                  {["A", "B", "C"][i]}
                </span>
              </div>
            ))}
          </div>
          
          {/* Loved by text */}
          <div className="text-left">
            <p className="font-bold text-sm text-[#0a0a0a] leading-none">
              Loved by {footerData.stats.clientCount}
            </p>
            <p className="text-gray-400 text-[10px] mt-0.5 font-medium">
              {footerData.stats.clientLabel}
            </p>
          </div>
          
        </div>
        
      </div>
    </motion.div>
  );
}
