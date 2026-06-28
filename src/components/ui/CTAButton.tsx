import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

export function CTAButton({ text, onClick }: CTAButtonProps) {
  return (
    <motion.button
      id="cta_button_interactive"
      onClick={onClick}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-shadow duration-300 text-sm md:text-base cursor-pointer"
    >
      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
        <img
          src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137894/ouail.jpg"
          alt="Lead Designer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="tracking-tight">{text}</span>
      <ArrowRight className="w-4 h-4 text-white/90 animate-pulse" />
    </motion.button>
  );
}
