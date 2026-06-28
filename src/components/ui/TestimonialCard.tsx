import { motion } from "motion/react";
import { Testimonial } from "../../lib/testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isCenter: boolean;
  index: number;
}

export function TestimonialCard({ testimonial, isCenter, index }: TestimonialCardProps) {
  return (
    <motion.div
      id={`testimonial_card_${testimonial.id}`}
      className={`
        relative bg-white rounded-2xl border p-8
        flex flex-col justify-between
        min-h-[300px] md:min-h-[320px] h-full
        transition-all duration-300
        ${isCenter
          ? "border-gray-300 shadow-lg"
          : "border-gray-200 shadow-sm"
        }
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        borderColor: "#7c3aed",
        transition: { duration: 0.25 }
      }}
    >
      {/* Upper quote section */}
      <div className="flex-1 mb-8" id={`testimonial_quote_container_${testimonial.id}`}>
        {/* Large decorative quotation mark */}
        <span className="text-violet-200/80 text-6xl font-serif leading-none block mb-2 select-none">
          "
        </span>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-5">
          {testimonial.quote}
        </p>
      </div>

      {/* Author and Platform attribution row */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100" id={`testimonial_speaker_${testimonial.id}`}>
        {/* Profile Avatar Box with initials fallback */}
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 select-none">
          {testimonial.avatar ? (
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${testimonial.avatarPlaceholder} flex items-center justify-center`}>
              <span className="text-white font-bold text-sm tracking-wide">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Text information */}
        <div>
          <p className="font-semibold text-sm text-[#0a0a0a]">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            {testimonial.location}
          </p>
        </div>

        {/* Auth platform tag pill */}
        <div className="ml-auto">
          <span className="text-[10px] sm:text-xs font-semibold text-violet-600 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-full">
            {testimonial.platform}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
