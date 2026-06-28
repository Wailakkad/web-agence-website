import { motion } from "motion/react";
import { Star } from "lucide-react";

export function CertifiedBadge() {
  return (
    <motion.div
      id="trust_badge_certified"
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="flex items-center justify-between bg-white border border-gray-100/80 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border-l-4 border-l-blue-500 w-full md:max-w-xs cursor-default"
    >
      <div className="flex items-center gap-3">
        {/* Hexagonal Blue Partner Badge SVG */}
        <div className="relative w-10 h-10 flex items-center justify-center text-blue-600 rounded-xl bg-blue-500/5 shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-gray-950 text-sm tracking-tight leading-none mb-1">
            Next.js Certified
          </h4>
          <p className="text-gray-400 font-mono text-[10px] uppercase tracking-wider">
            Expert Partner
          </p>
        </div>
      </div>
      <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
        Verified
      </span>
    </motion.div>
  );
}

export function ClutchBadge() {
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <motion.div
      id="trust_badge_clutch"
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="flex items-center gap-4 bg-white border border-gray-100/80 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border-l-4 border-l-amber-500 w-full md:max-w-xs cursor-default"
    >
      {/* Mini Clutch indicator logo mockup */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 uppercase text-[#0a0a0a] font-bold text-xs ring-1 ring-gray-100 shrink-0">
        <span className="font-sans font-black tracking-tighter text-indigo-600">C</span>
        <span className="font-mono font-bold text-yellow-500">*</span>
      </div>
      <div>
        <div className="flex items-center gap-0.5 mb-1">
          {starsArray.map((i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-amber-400 text-amber-400 stroke-1"
            />
          ))}
          <span className="text-gray-900 font-bold font-mono text-xs ml-1.5 leading-none">
            4.9/5
          </span>
        </div>
        <p className="text-gray-500 text-xs tracking-tight">
          Rated 4.9 on <strong className="text-gray-800 font-semibold">Clutch</strong> & <strong className="text-gray-800 font-semibold">Trustpilot</strong>
        </p>
      </div>
    </motion.div>
  );
}
