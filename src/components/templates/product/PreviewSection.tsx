import { motion } from "motion/react";
import { Template } from "../../../lib/templatesData";

interface PreviewSectionProps {
  template: Template;
}

export default function PreviewSection({ template }: PreviewSectionProps) {
  return (
    <section 
      className="py-16 px-6 md:px-12 lg:px-20 overflow-hidden select-none"
      style={{ backgroundColor: template.accentColor }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Three tablet/browser mockup frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          
          {template.mockupImages.map((mockup, index) => {
            // Apply elevated margins on the center mockup to create dynamic structural depth
            const placementClasses = index === 1 ? 'md:-mt-10 md:translate-y-4 shadow-3xl' : 'mt-0 shadow-2xl';
            
            return (
              <motion.div
                key={index}
                className={`relative ${placementClasses}`}
                initial={{ opacity: 0, y: 65 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  ease: [0.211, 1, 0.22, 1] // modern custom spring-like ease
                }}
                whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.3 } }}
              >
                {/* Simulated Computer/Tablet Frame Container */}
                <div className="bg-[#0a0a0a] rounded-2xl p-2.5 border border-white/10 ring-4 ring-black/40">
                  
                  {/* Virtual Chrome Header Tab bar */}
                  <div className="bg-[#121212] rounded-t-xl px-4 py-2 flex items-center justify-between mb-0 border-b border-white/5">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                      <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="mx-4 h-4 bg-white/5 border border-white/5 rounded-md flex-grow max-w-[140px] flex items-center justify-center">
                      <span className="text-[10px] text-white/30 font-semibold font-mono truncate">
                        {template.name.toLowerCase()}.com
                      </span>
                    </div>
                    <div className="w-3" /> {/* Spacer */}
                  </div>
                  
                  {/* Web screen interactive visual content */}
                  <div className={`rounded-b-xl overflow-hidden bg-gradient-to-br ${mockup.gradient} relative flex flex-col justify-between ${mockup.src ? '' : 'h-60 md:h-68 lg:h-76 p-4'}`}>
                    
                    {mockup.src ? (
                      <img 
                        src={mockup.src} 
                        alt={mockup.pageTitle}
                        className="w-full h-auto object-cover block"
                      />
                    ) : (
                      <>
                        {/* Simulated visual layout skeletons */}
                        <div className="space-y-3.5 pt-2">
                          <div className="h-3.5 bg-white/30 rounded-full w-2/3 shadow-2xs" />
                          <div className="h-2 bg-white/20 rounded-full w-4/5" />
                          <div className="h-2 bg-white/15 rounded-full w-3/4" />
                          
                          <div className="mt-5 grid grid-cols-2 gap-3.5">
                            <div className="h-16 bg-white/15 rounded-xl border border-white/10 p-2 flex flex-col justify-end">
                              <div className="h-1.5 bg-white/35 rounded-full w-1/2 mb-1" />
                              <div className="h-1 bg-white/20 rounded-full w-3/4" />
                            </div>
                            <div className="h-16 bg-white/15 rounded-xl border border-white/10 p-2 flex flex-col justify-end">
                              <div className="h-1.5 bg-white/35 rounded-full w-2/3 mb-1" />
                              <div className="h-1 bg-white/20 rounded-full w-1/2" />
                            </div>
                          </div>
                          
                          <div className="h-2 bg-white/15 rounded-full w-11/12" />
                          <div className="h-1.5 bg-white/10 rounded-full w-5/6" />
                        </div>
                      </>
                    )}
                    
                  </div>
                </div>
                
              </motion.div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
