import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Template } from "../../../lib/templatesData";
import { Check, HelpCircle, FileText, ArrowUpRight } from "lucide-react";

interface FeaturesSidebarProps {
  template: Template;
}

export default function FeaturesSidebar({ template }: FeaturesSidebarProps) {
  const handleBuy = (e: MouseEvent) => {
    e.stopPropagation();
    alert(template.isFree ? `Opening free download path for "${template.name}"` : `Direct payment for ${template.name} ($${template.price})`);
  };

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        
        {/* Features Card list */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs select-none">
          <h3 className="font-extrabold text-sm text-[#0a0a0a] tracking-tight mb-4 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-[#4f46e5] rounded-full inline-block" />
            Key Features Included
          </h3>
          <div className="space-y-3">
            {template.features.map((feature) => (
              <div
                key={feature} 
                className="flex items-center gap-2.5 pb-2.5 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="w-4.5 h-4.5 rounded-full bg-[#4f46e5]/10 border border-[#4f46e5]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#4f46e5]" strokeWidth={4.5} />
                </div>
                <span className="text-xs text-[#1a1a1a] font-medium font-sans">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Support Resources Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs select-none">
          <h3 className="font-extrabold text-sm text-[#0a0a0a] tracking-tight mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#4f46e5]" />
            Documentation & Support
          </h3>
          <ul className="space-y-3">
            {template.supportLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Loading document: ${link.label}`);
                  }}
                  className="text-xs text-[#4f46e5] hover:text-[#4338ca] hover:underline font-semibold flex items-center gap-2 group transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#4f46e5] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Dynamic Page List directories */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs select-none">
          <h3 className="font-extrabold text-sm text-[#0a0a0a] tracking-tight mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-600" />
            {template.name} Page Directories
          </h3>
          <ol className="space-y-2">
            {template.includedPages.map((page, i) => (
              <li key={page} className="text-xs text-gray-600 flex items-center gap-2 font-sans font-medium hover:text-[#0a0a0a] transition-colors">
                <span className="text-gray-300 font-bold font-mono tabular-nums w-4 shrink-0">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {page}
              </li>
            ))}
          </ol>
        </div>
        
        {/* Secondary Quick Purchase Sticky Button */}
        <motion.a
          href={template.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, backgroundColor: "#4338ca" }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-between w-full bg-[#4f46e5] text-white font-bold px-5 py-4.5 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-[#4f46e5]/20 select-none font-sans text-center"
        >
          <span className="text-xs sm:text-sm tracking-wide">Buy {template.name} Now</span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono font-black text-sm lg:text-base">
              {template.isFree ? 'Free' : template.price === 99 ? '99,00 $US' : `$${template.price}`}
            </span>
            <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        </motion.a>
        
      </div>
    </div>
  );
}
