import { motion } from "motion/react";

interface CarouselArrowProps {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
  id?: string;
}

export function CarouselArrow({ direction, disabled, onClick, id }: CarouselArrowProps) {
  const isPrev = direction === "prev";

  return (
    <motion.button
      id={id || `carousel_arrow_${direction}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={`
        w-12 h-12 rounded-full border-2 flex items-center justify-center
        transition-all duration-200 cursor-pointer pointer-events-auto
        ${
          disabled
            ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white"
            : "border-gray-400 text-gray-600 hover:border-[#7c3aed] hover:text-[#7c3aed] bg-white shadow-sm"
        }
      `}
    >
      {isPrev ? (
        /* Left arrow SVG */
        <svg
          className="w-[18px] h-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      ) : (
        /* Right arrow SVG */
        <svg
          className="w-[18px] h-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </motion.button>
  );
}
