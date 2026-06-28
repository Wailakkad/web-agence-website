"use client";

import { motion } from "motion/react";

export function BookingWidget() {
  return (
    <motion.div
      id="booking_founder_profile_card"
      className="inline-flex items-center gap-4 bg-[#111111] border border-gray-800 rounded-2xl p-3 pr-4 mb-4 select-none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      
      {/* Overlapping avatars circular visuals */}
      <div className="flex flex-shrink-0" id="founders_mini_avatars">
        
        {/* Custom Avatar */}
        <div className="w-10 h-10 rounded-full border-2 border-[#111] overflow-hidden relative z-10 shrink-0 shadow-sm">
          <img 
            src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137894/ouail.jpg" 
            alt="Founder" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
      
      {/* Text label details */}
      <div className="flex-1 text-left min-w-[100px]">
        <p className="text-gray-500 text-[11px] font-semibold leading-none mb-0.5 uppercase tracking-wider">
          Book a call with
        </p>
        <p className="text-white text-xs font-black font-sans">
          NextCraft founders
        </p>
      </div>
      
      {/* Action Book a Call link badge hoverable */}
      <motion.a
        id="founder_direct_booking_btn"
        href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="bg-white text-[#0a0a0a] font-sans font-black text-xs px-5 py-2.5 rounded-xl flex-shrink-0 hover:bg-gray-100 transition-colors duration-200 cursor-pointer shadow-md shadow-white/5 text-center"
      >
        Book A Call
      </motion.a>
      
    </motion.div>
  );
}
