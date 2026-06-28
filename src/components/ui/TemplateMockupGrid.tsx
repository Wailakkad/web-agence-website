import { motion } from "motion/react";
import { TEMPLATE_PREVIEWS_DATA } from "../../lib/templatePreviewData";

export function TemplateMockupGrid() {
  return (
    <div className="relative h-[340px] sm:h-[400px] lg:h-auto select-none pointer-events-none" id="templates_grid_visualization_container">
      
      {/* 3D perspective wrapper */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ 
          perspective: "1000px",
          perspectiveOrigin: "left center"
        }}
      >
        
        {/* Main grid container - tilted */}
        <motion.div
          className="grid grid-cols-3 gap-3 w-full max-w-[450px] lg:max-w-none"
          style={{ 
            transform: "rotateY(-12deg) rotateX(4deg)",
            transformStyle: "preserve-3d"
          }}
          initial={{ opacity: 0, x: 80, rotateY: -30 }}
          whileInView={{ opacity: 1, x: 0, rotateY: -12 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          
          {/* Template Screenshot Cards */}
          {TEMPLATE_PREVIEWS_DATA.map((template, i) => (
            <motion.div
              key={i}
              id={`template_grid_item_${i}`}
              className={`rounded-xl overflow-hidden template-card
                          ${i === 0 || i === 3 ? "col-span-1 h-32 sm:h-36" : "h-32 sm:h-36"}
                          ${i % 3 === 2 ? "h-36 sm:h-44" : ""}
                          bg-gradient-to-br ${template.gradient}
                          relative shadow-lg border border-white/10`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03, translateZ: 20 }}
            >
              {/* Mock browser chrome window header */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black/35 flex items-center px-2 gap-1 z-10 border-b border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
              </div>
              
              {/* Skeleton content lines to mock components */}
              <div className="absolute bottom-3 left-3 right-3 space-y-1.5 z-10">
                <div className="h-1.5 bg-white/25 rounded-full w-3/4 shadow-sm" />
                <div className="h-1.5 bg-white/15 rounded-full w-1/2 shadow-sm" />
                <div className="h-1.5 bg-white/10 rounded-full w-2/3 shadow-sm" />
              </div>
              
              {/* Floating micro category badge tag */}
              <div className="absolute top-8 left-3 z-10">
                <span className="text-white/80 text-[10px] sm:text-xs font-black tracking-wide uppercase bg-black/45 px-1.5 py-0.5 rounded blur-[0.2px] backdrop-blur-sm">
                  {template.category}
                </span>
              </div>
              
            </motion.div>
          ))}
          
        </motion.div>
        
        {/* Floating 3D arrow elements (decorative) */}
        <motion.div
          className="absolute -bottom-6 left-1/4 w-12 h-12 text-blue-400 opacity-90 z-20 pointer-events-none filter drop-shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* 3D Arrow SVG */}
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <path d="M30 5L55 50H5L30 5Z" fill="#3b82f6" fillOpacity="0.8" />
            <path d="M30 5L55 50H5L30 5Z" fill="url(#arrowGrad)" />
            <defs>
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Second floating arrow */}
        <motion.div
          className="absolute top-12 -right-4 w-10 h-10 z-20 pointer-events-none filter drop-shadow-[0_4px_12px_rgba(124,58,237,0.3)]"
          animate={{ 
            y: [0, -8, 0],
            rotate: [15, 20, 15]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <path d="M30 5L55 50H5L30 5Z" fill="#7c3aed" fillOpacity="0.75" transform="rotate(45, 30, 30)" />
          </svg>
        </motion.div>
        
      </div>
    </div>
  );
}
