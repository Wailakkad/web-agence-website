import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React & Next.js Templates | NextCraft",
  description: "Browse premium React and Next.js templates. Production-ready, SEO optimized, and fully customizable.",
};

import TemplatesHero from "@/components/templates/TemplatesHero";
import TemplatesGrid from "@/components/templates/TemplatesGrid";

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <TemplatesHero />
      <TemplatesGrid />
    </main>
  );
}
