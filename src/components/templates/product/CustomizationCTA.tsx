import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Template } from "../../../lib/templatesData";
import { Mail, Calendar, Sparkles } from "lucide-react";

interface CustomizationCTAProps {
  template: Template;
}

export default function CustomizationCTA({ template }: CustomizationCTAProps) {
  const handleBooking = (e: MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps.", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="customization-cta" className="customization-cta overflow-hidden border-t border-b border-gray-100 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        
        {/* LEFT COLUMN: Visual Code Editor + Mini Browser Showcase */}
        <motion.div
          className="relative bg-gray-50 overflow-hidden min-h-[340px] lg:min-h-0 border-r border-gray-100 p-6 flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle design grid pattern overlay underneath */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* VS Code Panel Mockup */}
          <div className="w-full max-w-lg bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/5 relative ring-1 ring-black/10">
            
            {/* Editor title bar */}
            <div className="bg-[#252526] px-4 py-3.5 flex items-center justify-between border-b border-[#111]">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-gray-400 text-[10px] font-mono tracking-wider font-bold truncate max-w-[200px]">
                {template.name}/components/Hero.tsx
              </span>
              <div className="w-4" /> {/* spacer */}
            </div>
            
            {/* Split Panel container (Coding pane on left, mini preview page on right) */}
            <div className="grid grid-cols-5 min-h-[260px] font-mono">
              
              {/* Code lines pane (60% width) */}
              <div className="col-span-3 p-4 text-left text-[11px] leading-relaxed text-gray-300 space-y-1 bg-[#1e1e1e] border-r border-[#2d2d2d] select-text">
                <div className="text-purple-400">
                  import <span className="text-blue-300">&#123; motion &#125;</span> <span className="text-gray-400">from</span> <span className="text-orange-300">'motion/react'</span>
                </div>
                <div className="h-1.5" />
                <div className="text-blue-400 font-bold">
                  export default <span className="text-yellow-300">function</span> <span className="text-emerald-300 font-semibold">Hero</span><span className="text-white">() &#123;</span>
                </div>
                <div className="pl-3.5 text-gray-400">
                  return (
                </div>
                <div className="pl-7 text-blue-300">
                  &lt;<span className="text-rose-400">motion</span>.div
                </div>
                <div className="pl-10 text-yellow-300">
                  className<span className="text-white">=</span><span className="text-orange-300">"landing-stage"</span>
                </div>
                <div className="pl-10 text-yellow-300">
                  initial<span className="text-white">=&#123;&#123;</span> <span className="text-purple-300">y</span><span className="text-white">: 30,</span> <span className="text-purple-300">op</span><span className="text-white">: 0 &#125;&#125;</span>
                </div>
                <div className="pl-10 text-yellow-300">
                  animate<span className="text-white">=&#123;&#123;</span> <span className="text-purple-300">y</span><span className="text-white">: 0,</span> <span className="text-purple-300">op</span><span className="text-white">: 1 &#125;&#125;</span>
                </div>
                <div className="pl-7 text-blue-300">
                  &gt;
                </div>
                <div className="pl-10 text-emerald-400/80 italic font-sans text-[10px]">
                  {`{/* Customized ${template.name} themeContent */}`}
                </div>
                <div className="pl-10 text-gray-300">
                  &lt;<span className="text-rose-400">h1</span>&gt;<span className="text-white font-sans font-bold">Launch {template.name}</span>&lt;/<span className="text-rose-400">h1</span>&gt;
                </div>
                <div className="pl-7 text-blue-300">
                  &lt;/<span className="text-rose-400">motion</span>.div&gt;
                </div>
                <div className="pl-3.5 text-gray-400">
                  );
                </div>
                <div className="text-white">&#125;</div>
              </div>
              
              {/* Mini Interactive Preview panel (40% width) */}
              <div className="col-span-2 bg-white/95 p-3 flex flex-col justify-between items-stretch overflow-hidden relative">
                
                {/* Simulated tiny browser stage reflecting selected card metrics */}
                <div className="space-y-2 text-left">
                  {/* Decorative Gradient banner representing template styling */}
                  <div className={`h-16 rounded-lg bg-gradient-to-br ${template.gradient} opacity-90 p-2 flex flex-col justify-between shadow-2xs`}>
                    <div className="w-4 h-4 rounded-full bg-white/20" />
                    <div className="h-1 bg-white/35 rounded-full w-2/3" />
                  </div>
                  
                  {/* Skeleton rows */}
                  <div className="h-2 bg-gray-200 rounded-full w-5/6" />
                  <div className="h-1.5 bg-gray-100 rounded-full w-2/3" />
                  
                  {/* Visual micro blocks */}
                  <div className="grid grid-cols-2 gap-1.5 pt-1.5">
                    <div className="h-9 bg-gray-50 border border-gray-100 rounded-md p-1">
                      <div className="h-1 bg-gray-300 rounded-full w-2/3 mb-1" />
                      <div className="h-1 bg-gray-200 rounded-full w-1/2" />
                    </div>
                    <div className="h-9 bg-gray-50 border border-gray-100 rounded-md p-1">
                      <div className="h-1 bg-gray-300 rounded-full w-1/2 mb-1" />
                      <div className="h-1 bg-gray-200 rounded-full w-2/3" />
                    </div>
                  </div>
                </div>

                {/* Simulated layout sync details */}
                <div className="bg-slate-50 border-t border-slate-100 -mx-3 -mb-3 p-2 text-center">
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider font-mono">
                    LIVE PREVIEW SYNC
                  </span>
                </div>

              </div>
            </div>
            
          </div>
        </motion.div>
        
        {/* RIGHT COLUMN: Deeper Premium Dark CTA Container */}
        <motion.div
          className="bg-[#0a0a0a] px-8 py-16 md:px-12 flex flex-col justify-center text-left text-white relative overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Subtle neon ambient lights */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4f46e5]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Headline and introduction details */}
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Tailored Development
          </div>

          <h2 className="text-white font-black text-3xl md:text-4xl leading-tight mb-4">
            Need customizations for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400 font-black">
              {template.name} Template?
            </span>
          </h2>
          
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 max-w-md font-medium">
            NextCraft acts as a complete design and Next.js engineering force. We can customize this boilerplate to match your branding guidelines, feed your content parameters, write secure dynamic endpoints, and optimize metrics for instant deployment.
          </p>
          
          {/* Calendar booking micro widget */}
          <motion.div
            onClick={handleBooking}
            className="bg-[#121212]/90 border border-gray-800 rounded-2xl p-4.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 max-w-lg cursor-pointer hover:border-[#4f46e5] hover:bg-[#141416]/90 transition-all shadow-md group shrink-0"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            {/* Visual avatars + bio panel */}
            <div className="flex items-center gap-3.5">
              
              {/* Solo visual avatar image */}
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782339078/contact_image.jpg"
                alt="Consultant Avatar"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-gray-800 object-cover shrink-0"
              />
              
              {/* Creator names info summary */}
              <div>
                <p className="text-gray-500 text-[10px] font-mono tracking-wider font-extrabold uppercase">
                  NextCraft Consultation
                </p>
                <p className="text-white text-xs font-bold leading-normal">
                  Connect with NextCraft Builders
                </p>
              </div>

            </div>
            
            {/* Book call button */}
            <motion.a
              href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
              onClick={handleBooking}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-white text-gray-950 font-extrabold text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer select-none"
            >
              <Calendar className="w-3.5 h-3.5 text-gray-950" />
              Book a Call
            </motion.a>
            
          </motion.div>
          
          {/* Direct channels links */}
          <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-6 select-text">
            <span>Or contact us directly at</span>
            <a 
              href="mailto:akkadouail8@gmail.com" 
              className="text-[#4f46e5] hover:text-indigo-400 hover:underline font-bold transition-all inline-flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-[#4f46e5] shrink-0" />
              akkadouail8@gmail.com
            </a>
          </div>
          
        </motion.div>
        
      </div>
    </section>
  );
}
