import { Check, Clock } from "lucide-react";

export interface ChecklistItemProps {
  label: string;
  status: "dim" | "complete" | "active" | "pending";
}

export function ChecklistItem({ label, status }: ChecklistItemProps) {
  let icon = null;
  let bgClass = "bg-transparent";
  let textClass = "text-gray-600 font-medium";
  let opacityClass = "opacity-100";

  switch (status) {
    case "dim":
      icon = (
        <div className="w-5 h-5 rounded-full border-2 border-gray-200 shrink-0" />
      );
      opacityClass = "opacity-40";
      break;
    case "complete":
      icon = (
        <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
      );
      break;
    case "active":
      icon = (
        <div className="w-5 h-5 rounded-full bg-[#7c3aed] flex items-center justify-center shrink-0 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </div>
      );
      bgClass = "bg-[#f3f0ff]";
      textClass = "font-bold text-[#7c3aed]";
      break;
    case "pending":
      icon = (
        <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
          <Clock className="w-3 h-3 text-white" />
        </div>
      );
      opacityClass = "opacity-75";
      break;
  }

  return (
    <div
      className={`checklist-row flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-300 ${bgClass} ${textClass} ${opacityClass}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
