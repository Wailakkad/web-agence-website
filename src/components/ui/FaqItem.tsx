import { AnimatePresence, motion } from "motion/react";
import { FaqItemType } from "../../lib/faqData";

interface FaqItemProps {
  faq: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  key?: any;
}

export function FaqItem({ faq, isOpen, onToggle, index }: FaqItemProps) {
  return (
    <motion.div
      id={`faq_accordion_item_${faq.id}`}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white faq-item shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      
      {/* Question Row Header clickable trigger */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`font-sans font-bold text-sm md:text-base transition-colors duration-200
                          ${isOpen 
                            ? "text-[#7c3aed]" 
                            : "text-[#0a0a0a] group-hover:text-[#7c3aed]"
                          }`}>
          {faq.question}
        </span>
        
        {/* + / x rotation Icon box toggle */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-4 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 select-none
                      ${isOpen
                        ? "bg-[#7c3aed] text-white"
                        : "bg-gray-100 text-gray-500"
                      }`}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" 
               fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
        
      </button>
      
      {/* Expanding Answer panel - AnimatePresence wraps inside the parent */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              {/* Divider spacing */}
              <div className="h-px bg-gray-100 mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  );
}
