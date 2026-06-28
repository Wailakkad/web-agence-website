import { motion } from "motion/react";
import { FooterColumn as FooterColumnType } from "../../lib/footerData";

interface FooterColumnProps {
  column: FooterColumnType;
  index: number;
  key?: any;
}

export default function FooterColumn({ column, index }: FooterColumnProps) {
  return (
    <motion.div
      className="footer-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
    >
      {/* Column Heading */}
      <h3 className="font-semibold text-sm text-[#0a0a0a] mb-5 tracking-wide uppercase text-[11px]">
        {column.heading}
      </h3>
      
      {/* Links List */}
      <ul className="space-y-3">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-500 hover:text-[#0b0b0b] text-sm hover:translate-x-1 inline-block transition-all duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
