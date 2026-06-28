"use client";

import { motion } from "motion/react";
import { ContactForm } from "./ui/ContactForm";
import { EmailBadge } from "./ui/EmailBadge";

const benefits = [
  {
    text: "First designs in ",
    highlight: "4-5 days.",
    rest: ""
  },
  {
    text: "We'll respond in ",
    highlight: "24 hours",
    rest: " — fast & focused."
  },
  {
    text: "The most suitable ",
    highlight: "subscription plan",
    rest: " for your needs."
  }
];

export default function ContactSection() {
  return (
    <section 
      id="contact_form_and_benefits_panel"
      className="contact-section py-20 px-6 md:px-12 lg:px-20 bg-[#f4f4f5] border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Editorial branding + values checklist */}
          <div className="lg:col-span-2 contact-text-col flex flex-col items-start text-left" id="contact_left_branding_details">
            
            {/* Animated Headline Display */}
            <motion.h2
              className="font-sans font-black text-4xl md:text-5xl text-[#0a0a0a] leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Let&apos;s Create Something<br />
              Out of This World<br />
              Together
            </motion.h2>

            {/* Structured paragraph highlighting purple features */}
            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 max-w-sm">
              <span className="text-[#7c3aed] font-semibold">
                Have a project in mind? Contact us
              </span>
              <span>
                {" "}for expert React & Next.js design and development solutions.{" "}
              </span>
              <span className="text-[#7c3aed] font-semibold">
                Let&apos;s discuss how we can help grow your business.
              </span>
            </p>

            {/* List checklist points */}
            <ul className="space-y-4 mb-10 w-full" id="contact_bullet_benefits_list">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  {/* Purple filled checkmark circle element icon */}
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7c3aed] flex items-center justify-center mt-0.5 shadow-sm">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  
                  {/* Highlighted text labels */}
                  <span className="text-gray-600 text-sm leading-relaxed font-medium">
                    {benefit.text}
                    <span className="text-[#f97316] font-black tracking-wide">
                      {benefit.highlight}
                    </span>
                    {benefit.rest}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Interactive touch action Email Badge card widget */}
            <EmailBadge />

          </div>

          {/* RIGHT COLUMN: React Hook Form cardboard component container */}
          <div className="lg:col-span-3 w-full" id="contact_right_form_details">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
