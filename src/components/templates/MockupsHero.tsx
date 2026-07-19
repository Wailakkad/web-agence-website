import { motion } from "motion/react";
import { Sparkles, Cpu } from "lucide-react";

export default function MockupsHero() {
  return (
    <section className="min-h-[75vh] flex items-center overflow-hidden px-6 md:px-12 lg:px-20 py-24 bg-white mt-16 text-left select-none border-b border-gray-100">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column — Text Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-50 text-violet-700 text-xs font-bold tracking-widest uppercase rounded-full w-fit mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI Prompt Store
            </motion.div>

            <motion.h1
              className="font-black text-5xl md:text-6xl lg:text-[64px] text-[#0a0a0a] leading-[1.08] tracking-tight mb-6 font-sans"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Stunning Device<br />
              Mockups with AI<br />
              <span className="text-violet-600">Instant Prompts</span>
            </motion.h1>

            <motion.p
              className="text-gray-500 text-base leading-relaxed mb-10 max-w-[480px] font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              23 ultra-professional AI mockup prompts for web designers and agencies. Generate photorealistic laptop, desktop, mobile, and marketing mockups in seconds. Works with Midjourney, GPT Image & Sora Image. Instant PDF download.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-14"
            >
              <a
                href="#mockups-grid"
                className="inline-flex items-center gap-2.5 bg-violet-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-104 hover:bg-violet-700 active:scale-97 cursor-pointer shadow-lg shadow-violet-600/10 font-sans"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("mockups-grid")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse All Prompt Packs
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <p className="text-gray-400 text-xs mb-5 font-semibold uppercase tracking-wider font-mono">
                Compatible With
              </p>

              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 bg-[#0a0a0a] rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-[9px] font-mono">MJ</span>
                  </div>
                  <span className="font-bold text-base text-[#0a0a0a] font-sans">Midjourney</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-base text-[#0a0a0a] font-sans">GPT Image</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-violet-500" />
                  <span className="font-bold text-base text-[#0a0a0a] font-sans">Sora Image</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Visual Preview */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-md"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-violet-100 via-white to-fuchsia-50 border border-gray-100 shadow-xl p-6 flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-900 to-zinc-800 p-3 flex items-end shadow-md">
                    <span className="text-[8px] text-white/60 font-mono font-bold">LAPTOP</span>
                  </div>
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800 to-zinc-900 p-3 flex items-end shadow-md">
                    <span className="text-[8px] text-white/60 font-mono font-bold">MOBILE</span>
                  </div>
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-100 to-white p-3 flex items-end shadow-md border border-gray-200">
                    <span className="text-[8px] text-gray-400 font-mono font-bold">TABLET</span>
                  </div>
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-stone-800 to-zinc-900 p-3 flex items-end shadow-md">
                    <span className="text-[8px] text-white/60 font-mono font-bold">DESKTOP</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-mono font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                    AI Prompt • Instant Download
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
