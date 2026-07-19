import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { templates } from "../lib/templatesData";
import { mockupProducts } from "../lib/mockupsData";
import TemplatesHero from "./templates/TemplatesHero";
import TemplatesGrid from "./templates/TemplatesGrid";
import TemplateDetailPage from "./templates/TemplateDetailPage";
import MockupsHero from "./templates/MockupsHero";
import MockupsGrid from "./templates/MockupsGrid";
import MockupDetailPage from "./templates/MockupDetailPage";

const PRODUCT_TABS = [
  { id: "templates", label: "Templates" },
  { id: "mockups", label: "AI Mockup Prompts" },
] as const;

type ProductType = (typeof PRODUCT_TABS)[number]["id"];

export default function TemplatesPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [productType, setProductType] = useState<ProductType>("templates");

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const mockupPrefix = "#templates/mockup/";
      const templatePrefix = "#templates/";

      if (hash.startsWith(mockupPrefix)) {
        const slug = hash.substring(mockupPrefix.length).trim();
        setProductType("mockups");
        setActiveSlug(slug || null);
      } else if (hash.startsWith(templatePrefix)) {
        const slug = hash.substring(templatePrefix.length).trim();
        setProductType("templates");
        setActiveSlug(slug || null);
      } else {
        setActiveSlug(null);
      }
    };

    window.addEventListener("hashchange", checkHash);
    checkHash();
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const selectedTemplate = productType === "templates" && activeSlug
    ? templates.find((t) => t.id === activeSlug)
    : null;

  const selectedMockup = productType === "mockups" && activeSlug
    ? mockupProducts.find((p) => p.id === activeSlug)
    : null;

  if (selectedTemplate) {
    return <TemplateDetailPage template={selectedTemplate} />;
  }

  if (selectedMockup) {
    return <MockupDetailPage product={selectedMockup} />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Product Type Filter Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-1.5 pb-3">
            {PRODUCT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setProductType(tab.id);
                  setActiveSlug(null);
                  window.location.hash = "templates";
                }}
                className={`relative px-5 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  productType === tab.id
                    ? "bg-[#0a0a0a] text-white shadow-md"
                    : "bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {productType === "templates" ? (
        <>
          <TemplatesHero />
          <TemplatesGrid />
        </>
      ) : (
        <>
          <MockupsHero />
          <MockupsGrid />
        </>
      )}
    </div>
  );
}
