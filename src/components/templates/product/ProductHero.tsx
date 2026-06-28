import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Template } from "../../../lib/templatesData";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import PurchaseCard from "./PurchaseCard";

interface ProductHeroProps {
  template: Template;
}

export default function ProductHero({ template }: ProductHeroProps) {
  // SPA Breadcrumb logic: if in iframe or direct dev mode, hashes work perfectly
  const navigateBack = (e: MouseEvent) => {
    e.preventDefault();
    window.location.hash = "templates";
  };

  const navigateToHome = (e: MouseEvent) => {
    e.preventDefault();
    window.location.hash = "";
  };

  const handlePreview = (e: MouseEvent) => {
    e.stopPropagation();
    alert(`Launching active live responsive layout preview for "${template.name}".`);
  };

  return (
    <section id="product-hero" className="py-16 px-6 md:px-12 lg:px-20 bg-white border-b border-gray-100 select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Dynamic Navigation Breadcrumb Row */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono font-bold uppercase tracking-wider">
          <a href="#" onClick={navigateToHome} className="hover:text-[#0a0a0a] transition-colors flex items-center gap-1">
            Home
          </a>
          <span>/</span>
          <a href="#templates" onClick={navigateBack} className="hover:text-[#0a0a0a] transition-colors">
            Templates
          </a>
          <span>/</span>
          <span className="text-[#0a0a0a] underline decoration-indigo-500 decoration-2 underline-offset-4">
            {template.name}
          </span>
        </div>

        {/* Dynamic Inner Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Title, metadata, descriptive paragraphs, tech stack and launch CTA */}
          <motion.div
            className="lg:col-span-3 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Extended Category tag badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-sm shadow-xs">
                {template.category}
              </span>
              <span className="text-gray-400 text-xs font-semibold font-mono">
                {template.style.join(" / ")} Accent
              </span>
            </div>
            
            {/* Title display typography */}
            <h1 className="font-black text-3xl md:text-4xl lg:text-5xl text-[#0a0a0a] leading-tight tracking-tight mb-5 selection:bg-indigo-100">
              {template.name} — Premium {template.category} Template
            </h1>
            
            {/* Long template page descriptions */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium">
              {template.longDescription}
            </p>
            
            {/* Tech stack badges */}
            <div className="mb-10">
              <span className="text-[10px] text-gray-400 uppercase font-mono font-black tracking-widest space-x-1 block mb-3">
                Powered Technical Architecture
              </span>
              <div className="flex flex-wrap gap-2.5">
                {template.techStack.map(tech => (
                  <span
                    key={tech}
                    className="bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg border border-gray-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Sticky/Live Preview triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.a
                href={template.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0a0a0a] text-white font-bold px-8 py-4.5 rounded-xl text-sm md:text-base hover:bg-[#1a1a1a] transition-all cursor-pointer shadow-lg shadow-black/10 text-center"
              >
                Launch Live Preview
                <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={3} />
              </motion.a>

              <button
                onClick={navigateBack}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-gray-400 hover:text-[#0a0a0a] transition-colors py-3 px-5 border border-transparent hover:border-gray-200 rounded-xl"
              >
                <ArrowUpLeft className="w-4 h-4" />
                Back to all products
              </button>
            </div>
            
          </motion.div>
          
          {/* Right Column: Checkout Pricing Card Widget */}
          <PurchaseCard template={template} />
          
        </div>
      </div>
    </section>
  );
}
