import { useState, useEffect } from "react";
import { templates } from "../lib/templatesData";
import TemplatesHero from "./templates/TemplatesHero";
import TemplatesGrid from "./templates/TemplatesGrid";
import TemplateDetailPage from "./templates/TemplateDetailPage";

export default function TemplatesPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const prefix = "#templates/";
      if (hash.startsWith(prefix)) {
        const slug = hash.substring(prefix.length).trim();
        setActiveSlug(slug || null);
      } else {
        setActiveSlug(null);
      }
    };

    window.addEventListener("hashchange", checkHash);
    checkHash(); // On initial load
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const selectedTemplate = activeSlug ? templates.find((t) => t.id === activeSlug) : null;

  if (selectedTemplate) {
    return <TemplateDetailPage template={selectedTemplate} />;
  }

  return (
    <div className="bg-white min-h-screen">
      <TemplatesHero />
      <TemplatesGrid />
    </div>
  );
}
