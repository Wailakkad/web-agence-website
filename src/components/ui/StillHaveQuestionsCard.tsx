import { motion } from "motion/react";

export function StillHaveQuestionsCard() {
  return (
    <motion.div
      id="still_have_questions_widget"
      className="bg-[#0a0a0a] rounded-2xl p-8 text-center relative overflow-hidden border border-neutral-900 shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Two overlapping avatars */}
      <div className="flex justify-center mb-5" id="questions_card_speaker_avatars">
        <div className="flex select-none">
          
          {/* Custom Avatar */}
          <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] overflow-hidden relative shrink-0 shadow-md">
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137894/ouail.jpg"
              alt="Team"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-white font-sans font-bold text-lg mb-2 relative z-10">
        Still have questions?
      </h3>
      
      {/* Subtitle */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[200px] mx-auto relative z-10">
        Book a call with our team to get all your questions answered.
      </p>
      
      {/* Button */}
      <motion.a
        id="book_call_faq_btn"
        href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="block w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-3.5 px-6 rounded-xl text-sm text-center transition-colors duration-200 relative z-10 cursor-pointer shadow-md shadow-violet-500/10"
      >
        Book a Call with Our Team
      </motion.a>
      
    </motion.div>
  );
}
