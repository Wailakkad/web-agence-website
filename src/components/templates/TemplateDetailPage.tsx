import { useEffect } from "react";
import { Template } from "../../lib/templatesData";
import ProductHero from "./product/ProductHero";
import PreviewSection from "./product/PreviewSection";
import DescriptionSection from "./product/DescriptionSection";
import CustomizationCTA from "./product/CustomizationCTA";
import RelatedTemplates from "./product/RelatedTemplates";

interface TemplateDetailPageProps {
  template: Template;
}

export default function TemplateDetailPage({ template }: TemplateDetailPageProps) {
  // Automatically scroll to top on section transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [template.id]);

  return (
    <div className="bg-white min-h-screen text-gray-950 text-left antialiased">
      {/* 1. Hero with purchase controls */}
      <ProductHero template={template} />
      
      {/* 2. Responsive colored preview mockups */}
      <PreviewSection template={template} />
      
      {/* 3. Alternating sentence description and features sidebar */}
      <DescriptionSection template={template} />
      
      {/* 4. Split coding CTA */}
      <CustomizationCTA template={template} />
      
      {/* 5. Styled Related templates drawer */}
      <RelatedTemplates template={template} />
    </div>
  );
}
