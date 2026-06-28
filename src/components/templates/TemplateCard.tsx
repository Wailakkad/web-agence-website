import { useState } from "react";
import { motion } from "motion/react";
import { Template } from "../../lib/templatesData";

interface TemplateCardProps {
  template: Template;
  index: number;
  key?: any;
}

export default function TemplateCard({ template, index }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        delay: Math.min(index * 0.05, 0.3),
        duration: 0.4,
        layout: { duration: 0.3 }
      }}
      className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden group cursor-pointer shadow-xs relative flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
      onClick={() => {
        window.location.hash = `#templates/${template.id}`;
      }}
    >
      {/* Image / Thumbnail Gradient Mockup Area */}
      <div className="relative overflow-hidden bg-slate-50 shrink-0">
        
        {/* Decorative dynamic background representing high fidelity layout */}
        <div className={`w-full ${template.image ? 'h-auto' : 'h-56'} ${template.image ? 'bg-zinc-950' : `bg-gradient-to-br ${template.gradient}`} relative ${template.image ? 'p-0' : 'p-6 pt-10'} flex flex-col justify-between`}>
          {template.image && (
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-102"
            />
          )}
          
          {template.image ? (
            /* For the image card, we fade in the overlay, text, and metadata ONLY on hover */
            <>
              {/* Overlay that is transparent normally, but darkens on hover */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              
              {/* Subtle grid mesh overlay only on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-black/20 pointer-events-none mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Virtual Browser Top Bar - only shows on hover */}
              <div className="absolute top-0 left-0 right-0 h-7 bg-black/45 backdrop-blur-xs flex items-center px-4 gap-1 border-b border-white/5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="flex-1 mx-3 h-3 bg-white/10 rounded-sm border border-white/5" />
              </div>

              {/* Overlay Content Wrapper */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 pt-10 select-none">
                {/* Spacer to push content down below the browser top bar */}
                <div className="h-4" />

                {/* Template Title Card - only shows on hover */}
                <div className="text-center w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <h4 className="text-white font-black text-xl tracking-tight leading-tight [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    {template.name}
                  </h4>
                  <p className="text-white/90 text-[10px] uppercase font-mono font-bold tracking-wider mt-1.5 bg-black/65 px-2.5 py-0.5 rounded-md inline-block border border-white/15">
                    {template.category}
                  </p>
                </div>

                {/* Skeletons - only shows on hover */}
                <div className="space-y-1.5 w-full opacity-0 group-hover:opacity-90 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <div className="h-1.5 bg-white/20 rounded-full w-2/3" />
                </div>
              </div>
            </>
          ) : (
            /* For the standard gradient card, we show them at all times */
            <>
              {/* Subtle grid mesh overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-black/20 pointer-events-none mix-blend-overlay z-10" />
              
              {/* Virtual Browser Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-7 bg-black/30 backdrop-blur-xs flex items-center px-4 gap-1 border-b border-white/5 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="flex-1 mx-3 h-3 bg-white/10 rounded-sm border border-white/5" />
              </div>

              {/* Template Title Card in mockup */}
              <div className="text-center w-full z-10 select-none pb-4">
                <h4 className="text-white font-black text-xl tracking-tight leading-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300">
                  {template.name}
                </h4>
                <p className="text-white/80 text-[10px] uppercase font-mono font-bold tracking-wider mt-1 bg-black/40 px-2 py-0.5 rounded-md inline-block border border-white/10">
                  {template.category}
                </p>
              </div>

              {/* Skeletons to mimic actual page structures or subtle info overlay */}
              <div className="space-y-1.5 select-none w-full opacity-80 z-10 group-hover:opacity-100 transition-opacity">
                <div className="h-1.5 bg-white/20 rounded-full w-4/5" />
                <div className="h-1.5 bg-white/15 rounded-full w-1/2" />
                <div className="grid grid-cols-3 gap-1.5 mt-3">
                  <div className="h-4 bg-white/10 rounded-sm border border-white/5" />
                  <div className="h-4 bg-white/10 rounded-sm border border-white/5" />
                  <div className="h-4 bg-white/10 rounded-sm border border-white/5" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* FREE Tag Badge */}
        {template.isFree && (
          <div className="absolute top-10 left-3 bg-emerald-500 text-white text-[9.5px] font-black tracking-widest px-2.5 py-0.5 rounded-sm shadow-md">
            FREE
          </div>
        )}

        {/* Hover overlay covering container with responsive prompt preview link */}
        <motion.div
          className="absolute inset-0 bg-black/35 backdrop-blur-xs flex items-center justify-center gap-3 z-25"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={template.previewUrl}
            target={template.previewUrl.startsWith("http") ? "_blank" : undefined}
            rel={template.previewUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-white text-gray-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg hover:bg-gray-50 active:scale-95 transition-all"
            onClick={(e) => {
              if (!template.previewUrl.startsWith("http")) {
                e.preventDefault();
                e.stopPropagation();
                alert(`Launching live layout preview for template: ${template.name}`);
              } else {
                e.stopPropagation();
              }
            }}
          >
            Live Preview
          </a>
        </motion.div>
      </div>

      {/* Card Info Body */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Header row: title and price */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-extrabold text-base text-[#0a0a0a] tracking-tight group-hover:text-indigo-600 transition-colors">
              {template.name}
            </h3>
            <span className={`font-mono font-bold text-sm bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-lg ${
              template.isFree ? "text-emerald-500 border-emerald-100 bg-emerald-50/50" : "text-orange-500"
            }`}>
              {template.isFree ? "Free" : template.price === 99 ? "99,00 $US" : `$${template.price}`}
            </span>
          </div>

          {/* Subtext description & key category */}
          <p className="text-gray-400 font-mono text-[11px] mb-3 uppercase tracking-wider font-semibold">
            {template.category} • {template.style[0]} Style
          </p>

          <p className="text-gray-500 text-xs leading-relaxed mb-5 line-clamp-2 h-8">
            {template.description}
          </p>
        </div>

        {/* Interactive Buy and Quickeye Actions and Tags */}
        <div>
          {/* Small feature tags horizontal list */}
          <div className="flex flex-wrap gap-1 mb-5">
            {template.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2">
            
            {/* Main Action Buy/Get button triggers smooth flow */}
            <motion.a
              href={template.buyUrl}
              target={template.buyUrl.startsWith("http") ? "_blank" : undefined}
              rel={template.buyUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}
              className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-[#0a0a0a] font-bold text-xs py-3 rounded-xl transition-all duration-200"
              onClick={(e) => {
                if (!template.buyUrl.startsWith("http")) {
                  e.preventDefault();
                  e.stopPropagation();
                  alert(template.isFree ? `Template "${template.name}" added to downloads.` : `Checkout launched for "${template.name}" ($${template.price})`);
                } else {
                  e.stopPropagation();
                }
              }}
            >
              {template.isFree ? "Get Template" : "Buy Template"}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 group-hover:translate-x-0.5 transition-transform">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>

            {/* Quick Preview circular visualizer button */}
            <motion.a
              href={template.previewUrl}
              target={template.previewUrl.startsWith("http") ? "_blank" : undefined}
              rel={template.previewUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ backgroundColor: "#f4f4f5", borderColor: "#0a0a0a" }}
              className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors"
              onClick={(e) => {
                if (!template.previewUrl.startsWith("http")) {
                  e.preventDefault();
                  e.stopPropagation();
                  alert(`Opening layout dashboard preview for: ${template.name}`);
                } else {
                  e.stopPropagation();
                }
              }}
              title="Quick inspect layout"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
