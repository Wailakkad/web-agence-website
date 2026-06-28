import { motion } from "motion/react";
import { Template } from "../../../lib/templatesData";
import HighlightedText from "./HighlightedText";
import FeaturesSidebar from "./FeaturesSidebar";

interface DescriptionSectionProps {
  template: Template;
}

export default function DescriptionSection({ template }: DescriptionSectionProps) {
  return (
    <section id="product-details" className="py-20 px-6 md:px-12 lg:px-20 bg-white select-none scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Panel: Description, Paragraph Highlights & Alternating Colored Core Text Sections */}
          <motion.div
            className="lg:col-span-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            
            {/* Lead Intro summary */}
            <p className="text-[#0a0a0a] text-sm md:text-base font-semibold leading-relaxed mb-10 border-l-4 border-[#4f46e5] pl-4">
              {template.longDescription}{" "}
              <span className="text-[#4f46e5] font-black">
                A pristine choice for startups, developers, freelance agencies, and creators
              </span>{" "}
              looking to sidestep repetitive setups, bypass empty states, and ship stunning Next.js projects inside a single weekend.
            </p>
            
            {/* Staggered Sections Map */}
            <div className="space-y-10">
              {template.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group"
                >
                  {/* Styled Section Title */}
                  <h3 className="font-black text-lg md:text-xl text-[#0a0a0a] tracking-tight mb-3 group-hover:text-[#4f46e5] transition-colors flex items-center gap-2 select-text">
                    <span className="text-gray-300 font-mono text-xs font-semibold">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    {section.title}
                  </h3>
                  
                  {/* Segmented alternate sentence colors wrapper */}
                  <p className="text-xs md:text-sm leading-relaxed tracking-wide select-text">
                    <HighlightedText text={section.content} />
                  </p>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
          
          {/* Right Panel: Sticky Features, Specs, Support Info Sidebar */}
          <FeaturesSidebar template={template} />
          
        </div>
      </div>
    </section>
  );
}
