import { motion } from "motion/react";

interface PartnerBadgeProps {
  label: string;
}

export default function PartnerBadge({ label }: PartnerBadgeProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 bg-[#7c3aed] text-white px-4 py-2 rounded-lg text-xs font-semibold cursor-default select-none group"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span>{label}</span>
    </motion.div>
  );
}
