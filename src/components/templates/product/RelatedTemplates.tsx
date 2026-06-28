import { MouseEvent } from "react";
import { motion } from "motion/react";
import { Template, templates } from "../../../lib/templatesData";
import TemplateCard from "../TemplateCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface RelatedTemplatesProps {
  template: Template;
}

export default function RelatedTemplates({ template }: RelatedTemplatesProps) {
  // Exclude current visible product and take 3 recommendations
  const relatedList = templates
    .filter((t) => t.id !== template.id)
    .slice(0, 3);

  const navigateToAllTemplates = (e: MouseEvent) => {
    e.preventDefault();
    window.location.hash = "templates";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="related-templates" className="py-20 px-6 md:px-12 lg:px-20 bg-slate-50 select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Header row containing descriptive title context */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-gray-200/60">
          <div className="text-left">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-2 font-mono">
              Carefully Selected Recommendations
            </span>
            <h2 className="font-black text-2xl md:text-3xl text-[#0a0a0a] tracking-tight">
              More Templates You Might Like
            </h2>
          </div>
          
          <a
            href="#templates"
            onClick={navigateToAllTemplates}
            className="text-xs text-[#4f46e5] hover:text-[#4338ca] font-black uppercase tracking-wide flex items-center gap-1.5 shrink-0 hover:translate-x-1.5 transition-all"
          >
            Browse Catalog
            <ArrowRight className="w-3.5 h-3.5 stroke-2" />
          </a>
        </div>
        
        {/* Grid containing related template recommendation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedList.map((related, i) => (
            <motion.div
              key={related.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Reuses the custom pre-existing TemplateCard seamlessly */}
              <TemplateCard template={related} index={i} />
            </motion.div>
          ))}
        </div>
        
        {/* Big centered footer link back */}
        <div className="text-center mt-12">
          <button
            onClick={navigateToAllTemplates}
            className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md shadow-black/10 hover:-translate-y-0.5 active:translate-y-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Explore All Premium Templates
          </button>
        </div>
        
      </div>
    </section>
  );
}
