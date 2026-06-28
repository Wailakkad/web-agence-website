export const TOOL_CONFIGS: Record<string, { label: string; color: string; letter: string }> = {
  react: { label: "React", color: "bg-[#61dafb] text-black", letter: "R" },
  nextjs: { label: "Next.js", color: "bg-black text-white border border-gray-800", letter: "N" },
  tailwind: { label: "Tailwind CSS", color: "bg-[#38bdf8] text-white", letter: "T" },
  typescript: { label: "TypeScript", color: "bg-[#3178c6] text-white", letter: "TS" },
  gsap: { label: "GSAP", color: "bg-[#88ce02] text-black", letter: "G" },
  framer: { label: "Framer Motion", color: "bg-[#ff0055] text-white", letter: "F" }
};

interface ToolBadgeProps {
  tool: string;
  index: number;
  key?: any;
}

export function ToolBadge({ tool, index }: ToolBadgeProps) {
  const config = TOOL_CONFIGS[tool];
  if (!config) return null;

  return (
    <div
      id={`tool_badge_${tool}_${index}`}
      title={config.label}
      className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black pointer-events-auto leading-none select-none transition-transform hover:scale-115 hover:z-10 shadow-sm ${config.color} ${
        index > 0 ? "-ml-2" : ""
      }`}
    >
      {config.letter}
    </div>
  );
}
