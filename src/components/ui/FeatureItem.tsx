import { motion } from "motion/react";
import { FeatureIcon } from "./FeatureIcon";

export interface FeatureItemProps {
  number: string;
  icon: string;
  title: string;
  description: string;
  index: number;
  key?: any;
}

export function FeatureItem({ number, icon, title, description, index }: FeatureItemProps) {
  // Padding based on position in grid, optimized to look good on all screens
  const paddingMap = [
    "pb-8 pr-4 sm:pb-12 sm:pr-8 md:pr-12",  // top-left
    "pb-8 pl-4 sm:pb-12 sm:pl-8 md:pl-12",  // top-right  
    "pt-8 pr-4 sm:pt-12 sm:pr-8 md:pr-12",  // bottom-left
    "pt-8 pl-4 sm:pt-12 sm:pl-8 md:pl-12",  // bottom-right
  ];

  return (
    <motion.div
      id={`why_feature_item_wrapper_${index}`}
      className={`relative feature-item ${paddingMap[index]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Top row: icon + number */}
      <div className="flex items-start justify-between mb-6">
        {/* Icon Box */}
        <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-center shrink-0">
          <FeatureIcon type={icon} />
        </div>

        {/* Number */}
        <span className="text-gray-600 text-xs sm:text-sm font-medium tabular-nums">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
