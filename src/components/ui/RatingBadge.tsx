"use client";

import { motion } from "motion/react";

export function RatingBadge() {
  return (
    <motion.div
      id="rating_clutch_verified_badge"
      className="flex items-center gap-3 select-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      
      {/* Clutch-style icon block layout container */}
      <div className="flex items-center gap-2 bg-[#111] border border-gray-800 rounded-full px-3 py-1.5 shadow-inner">
        
        {/* Clutch C branding symbol circle */}
        <div className="w-5 h-5 rounded-full bg-[#ff3d2e] flex items-center justify-center flex-shrink-0 animate-pulse">
          <span className="text-white font-black text-[9px] font-sans">C</span>
        </div>
        
        {/* Star Rating array row */}
        <div className="flex gap-0.5" id="stars_row_layout">
          {[1, 2, 3, 4].map(i => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#f59e0b" className="shrink-0 flex">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
          
          {/* Half star for 4.9 score using svg gradient stop offset */}
          <svg width="10" height="10" viewBox="0 0 24 24" className="shrink-0 flex">
            <defs>
              <linearGradient id="halfStarGradRating">
                <stop offset="90%" stopColor="#f59e0b"/>
                <stop offset="90%" stopColor="#4b5563"/>
              </linearGradient>
            </defs>
            <polygon 
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill="url(#halfStarGradRating)"
            />
          </svg>
        </div>
        
        {/* Verification subtitle copy label */}
        <span className="text-gray-400 text-[10px] font-sans font-medium tracking-wide">
          Rated 4.9 on Clutch, Trustpilot
        </span>
        
      </div>
      
    </motion.div>
  );
}
