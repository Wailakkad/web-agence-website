import { motion } from "motion/react";
import Image from 'next/image';

interface MosaicCardProps {
  item: {
    id: string
    src: string
    alt: string
    title: string
    category: string
    position: string
    objectPosition: string
  }
  height: string
  className?: string
}

const MosaicCard = ({ item, height, className = "" }: MosaicCardProps) => {
  return (
    <motion.div
      className={`
        ${height} 
        w-full 
        rounded-2xl 
        overflow-hidden 
        shadow-lg 
        relative 
        flex-shrink-0 
        cursor-pointer
        group
        ${className}
      `}
      whileHover={{ 
        scale: 1.02, 
        y: -4,
        boxShadow: "0 24px 48px rgba(0,0,0,0.15)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      
      {/* Real Image — fills entire card */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`
          object-cover 
          object-${item.objectPosition}
          transition-transform duration-500
          group-hover:scale-105
        `}
        sizes="(max-width: 768px) 100vw, 278px"
        priority={
          item.position === "left-top" || 
          item.position === "right-top"
        }
        quality={90}
      />
      
      {/* Subtle dark overlay at bottom — always visible */}
      <div className="
        absolute bottom-0 left-0 right-0 
        bg-gradient-to-t from-black/70 via-black/20 to-transparent
        h-2/5
        z-10
      "/>
      
      {/* Template info — bottom overlay */}
      <div className="
        absolute bottom-0 left-0 right-0 
        p-4 z-20
      ">
        <p className="text-white font-bold text-sm leading-tight 
                      drop-shadow-sm">
          {item.title}
        </p>
        <p className="text-white/70 text-[11px] font-medium 
                      uppercase tracking-wider mt-0.5">
          {item.category}
        </p>
      </div>
      
      {/* Browser chrome bar at TOP — subtle */}
      <div className="
        absolute top-0 left-0 right-0 
        h-6 z-20
        bg-black/30 backdrop-blur-[2px]
        flex items-center px-3 gap-1.5
      ">
        <div className="w-2 h-2 rounded-full bg-white/40"/>
        <div className="w-2 h-2 rounded-full bg-white/40"/>
        <div className="w-2 h-2 rounded-full bg-white/40"/>
      </div>
      
      {/* Hover overlay — shows "View Template" */}
      <motion.div
        className="
          absolute inset-0 z-30
          bg-black/40
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <span className="
          bg-white text-[#0a0a0a] 
          font-semibold text-xs 
          px-4 py-2 rounded-lg
          shadow-lg
        ">
          View Template →
        </span>
      </motion.div>
      
    </motion.div>
  );
};

export default MosaicCard;
