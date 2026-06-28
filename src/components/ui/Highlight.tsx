import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

export const Highlight = ({ children }: HighlightProps) => (
  <span className="text-[#f97316] font-semibold">{children}</span>
);
