"use client";

import { motion } from "motion/react";

export function EmailBadge() {
  return (
    <motion.div
      id="contact_email_badge_card"
      className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm select-all cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6 }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
    >
      {/* Envelope Icon in purple rounded box */}
      <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 bg-gray-50">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>
      
      {/* Email info text labels */}
      <div className="text-left">
        <p className="text-gray-400 text-xs mb-0.5 select-none font-medium">Drop us a line at</p>
        <p className="text-[#0a0a0a] font-sans font-black text-sm select-all">
          akkadouail8@gmail.com
        </p>
      </div>
      
    </motion.div>
  );
}
