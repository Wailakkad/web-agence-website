import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Template } from "../../../lib/templatesData";
import { ShoppingCart, Check, Code } from "lucide-react";

interface PurchaseCardProps {
  template: Template;
}

export default function PurchaseCard({ template }: PurchaseCardProps) {
  const premiumSpecs = [
    "One-time Payment",
    "Full Source Code Included",
    "Speed Optimized Build",
    "Single Use License",
    "Free Future Updates",
    "Setup Documentation",
  ];

  const handleCheckout = (e: MouseEvent) => {
    e.stopPropagation();
    alert(template.isFree ? `Checking download path for freebie: ${template.name}` : `Launching checkout portal for: ${template.name} ($${template.price} USD)`);
  };

  return (
    <motion.div
      className="lg:col-span-2"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-xs sticky top-24 select-none">
        
        {/* Dynamic Header Badge for Purchase context */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
            Product License
          </span>
          <span className="text-gray-400 text-xs font-semibold font-mono">
            Format: Next.js 14
          </span>
        </div>

        {/* Feature checklist */}
        <div className="space-y-3.5 mb-7">
          {premiumSpecs.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#4f46e5]/10 border border-[#4f46e5]/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-[#4f46e5]" strokeWidth={3.5} />
              </div>
              <span className="text-xs md:text-sm text-[#0a0a0a] font-semibold font-sans">
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-100 mb-6" />
        
        {/* Source files included highlight block */}
        <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#0a0a0a] flex items-center justify-center text-white">
              <Code className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-semibold text-[#0a0a0a]">
              React + Next.js Source
            </span>
          </div>
          <span className="text-xs font-black text-[#4f46e5] uppercase bg-[#4f46e5]/5 border border-[#4f46e5]/10 px-2 py-0.5 rounded-md">
            Included
          </span>
        </div>
        
        {/* Main Buy CTA Button */}
        <motion.a
          href={template.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, backgroundColor: "#4338ca" }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-between w-full bg-[#4f46e5] text-white font-bold px-5 py-4 rounded-xl transition-colors duration-200 group cursor-pointer text-center"
        >
          <div className="flex items-center gap-3 text-left">
            <ShoppingCart className="w-4.5 h-4.5 text-white stroke-2" />
            <span className="text-xs sm:text-sm tracking-wide">Get This Template</span>
          </div>
          <span className="font-mono font-black text-sm sm:text-base lg:text-lg">
            {template.isFree ? 'Free' : template.price === 99 ? '99,00 $US' : `$${template.price} USD`}
          </span>
        </motion.a>
        
        {/* Small guarantee secure line */}
        <p className="text-center text-[10.5px] text-gray-400 mt-4 leading-normal font-sans">
          🔒 Secure payment · Instant download · 30-day support
        </p>
        
      </div>
    </motion.div>
  );
}
