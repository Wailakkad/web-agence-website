import { motion } from "motion/react";
import { Testimonial } from "../../lib/testimonialsData";

interface AvatarClusterProps {
  testimonials: Testimonial[];
}

export function AvatarCluster({ testimonials }: AvatarClusterProps) {
  return (
    <div className="flex items-center justify-center mb-14" id="testimonials_avatar_cluster_container">
      <div className="flex -space-x-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            id={`avatar_bubble_${t.id}`}
            className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm shrink-0 select-none cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, x: -10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.07,
              duration: 0.4,
              ease: "backOut"
            }}
            whileHover={{
              scale: 1.15,
              zIndex: 50,
              transition: { duration: 0.2 }
            }}
            style={{ zIndex: testimonials.length - i }}
          >
            {/* 
              We use the beautiful client avatar image, falling back to CSS gradient 
              when the image path doesn't exist.
            */}
            {t.avatar ? (
              <img 
                src={t.avatar} 
                alt={t.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${t.avatarPlaceholder} flex items-center justify-center`}>
                <span className="text-white font-bold text-sm tracking-wider">
                  {t.name.split(" ").map(chunk => chunk.charAt(0)).join("").substring(0, 2)}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
