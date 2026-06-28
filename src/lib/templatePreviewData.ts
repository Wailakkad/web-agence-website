export interface TemplatePreviewType {
  gradient: string;
  category: string;
}

export const TEMPLATE_PREVIEWS_DATA: TemplatePreviewType[] = [
  { gradient: "from-blue-500 to-indigo-600", category: "SaaS" },
  { gradient: "from-purple-500 to-pink-500", category: "Agency" },
  { gradient: "from-teal-400 to-cyan-500", category: "Finance" },
  { gradient: "from-orange-400 to-rose-500", category: "Health" },
  { gradient: "from-slate-600 to-slate-800", category: "Portfolio" },
  { gradient: "from-emerald-400 to-green-600", category: "E-Commerce" },
  { gradient: "from-amber-400 to-orange-500", category: "Fashion" },
  { gradient: "from-sky-400 to-blue-600", category: "Startup" },
  { gradient: "from-violet-500 to-purple-700", category: "Blog" }
];
