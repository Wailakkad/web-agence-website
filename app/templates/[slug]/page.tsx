import { templates } from "../../../src/lib/templatesData";
import { notFound } from "next/navigation";
import TemplateDetailPage from "../../../src/components/templates/TemplateDetailPage";

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.id,
  }));
}

export async function generateMetadata({ 
  params 
}: { params: { slug: string } }) {
  const template = templates.find(t => t.id === params.slug);
  if (!template) return { title: 'Template Not Found' };
  
  return {
    title: `${template.name} - React & Next.js Template | NextCraft`,
    description: template.longDescription.substring(0, 160),
    openGraph: {
      title: `${template.name} Template`,
      description: template.longDescription.substring(0, 160),
    }
  };
}

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const template = templates.find((t) => t.id === params.slug);
  if (!template) {
    notFound();
  }
  
  return <TemplateDetailPage template={template} />;
}
