import React from "react";
import { motion } from "motion/react";
import { CertifiedBadge, ClutchBadge } from "./ui/TrustBadge";
import { CTAButton } from "./ui/CTAButton";

function HeroVideoPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-xl"
    >
      <video
        src="https://res.cloudinary.com/dhkyla1rv/video/upload/v1782141106/Design_sans_titre_9.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover block rounded-2xl"
      />
    </motion.div>
  );
}

export default function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const line1 = ["Your", "Brand's", "Best"];
  const line2 = ["Digital", "Presence"];
  const line2_gray = ["Built"];
  const line3_gray = ["In", "React"];

  return (
    <section
      id="hero_section"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Decorative blurred background details for premium appearance */}
      <div className="absolute top-20 left-1/3 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Headings and interactive items (8-column span on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.h1
              id="hero_headline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight leading-[0.95] text-[#0a0a0a] text-balance"
            >
              {/* Line 1: Your Brand's Best */}
              <div className="block overflow-hidden pb-1" id="headline_line_1">
                {line1.map((word, i) => (
                  <span
                    key={`l1-${i}`}
                    className="inline-block overflow-hidden mr-3 sm:mr-4 md:mr-5"
                  >
                    <motion.span
                      variants={wordVariants}
                      className="inline-block select-none"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>

              {/* Line 2: Digital Presence Built */}
              <div className="block overflow-hidden pb-1" id="headline_line_2">
                {line2.map((word, i) => (
                  <span
                    key={`l2-${i}`}
                    className="inline-block overflow-hidden mr-3 sm:mr-4 md:mr-5 text-[#0a0a0a]"
                  >
                    <motion.span
                      variants={wordVariants}
                      className="inline-block select-none"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
                
                {line2_gray.map((word, i) => (
                  <span
                    key={`l2g-${i}`}
                    className="inline-block overflow-hidden mr-3 sm:mr-4 md:mr-5 text-[#9ca3af]"
                  >
                    <motion.span
                      variants={wordVariants}
                      className="inline-block select-none font-extralight"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>

              {/* Line 3: In React */}
              <div className="block overflow-hidden pb-1" id="headline_line_3">
                {line3_gray.map((word, i) => (
                  <span
                    key={`l3g-${i}`}
                    className="inline-block overflow-hidden mr-3 sm:mr-4 md:mr-5 text-[#6b7280] font-semibold"
                  >
                    <motion.span
                      variants={wordVariants}
                      className="inline-block select-none"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </div>
            </motion.h1>

            {/* Elegant description paragraph */}
            <motion.p
              id="hero_brand_description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.8, ease: "easeOut" }}
              className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mt-6 select-text font-sans"
            >
              At <span className="text-[#0a0a0a] font-semibold">FrameLab</span>, we design & develop high-performance React/Next.js websites and sell premium templates that help fast-growing brands launch faster, convert better & scale smarter.
            </motion.p>

            {/* Below Headline Grid: CTA and Founder Social Proof */}
            <motion.div
              id="hero_social_proof_row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mt-8"
            >
              {/* Interactive gradient CTA */}
              <CTAButton text="Let's Build Together" />

              {/* Overlapping Founders Avatars */}
              <div className="flex items-center gap-3" id="founders_avatar_group">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden ring-1 ring-gray-100">
                    <img
                      src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058956/576742296075234124.jpg"
                      alt="Founder 1"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden ring-1 ring-gray-100">
                    <img
                      src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058956/hamo_artist.jpg"
                      alt="Founder 2"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden ring-1 ring-gray-100">
                    <img
                      src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782058953/Nano_Banana_Generated_AI_Image_-_Face_of_Thisara_Dasun_Me.jpg"
                      alt="Founder 3"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="text-[#0a0a0a] font-sans font-bold text-xs sm:text-sm">
                    Loved by 10+ Founders
                  </div>
                  <div className="text-gray-400 font-mono text-[10px] uppercase tracking-wider">
                    Globally Decentralized
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive high-fidelity video showcase player */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:pl-4">
            <HeroVideoPlayer />
          </div>

        </div>
      </div>
    </section>
  );
}
