import { ReactNode } from "react";
import { motion } from "motion/react";

interface ServiceCardProps {
  children: ReactNode;
  id: string;
}

export function ServiceCard({ children, id }: ServiceCardProps) {
  return (
    <motion.div
      id={`new_service_card_${id}`}
      className="service-card flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 min-h-[380px] shadow-sm overflow-hidden relative"
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
