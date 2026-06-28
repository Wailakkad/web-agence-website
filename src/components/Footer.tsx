import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useGSAPReady } from "../lib/animations";
import { footerData } from "../lib/footerData";
import SocialIcon from "./ui/SocialIcon";
import PartnerBadge from "./ui/PartnerBadge";
import FooterColumn from "./ui/FooterColumn";
import SocialProofBar from "./ui/SocialProofBar";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const gsapInstance = useGSAPReady();

  useEffect(() => {
    if (!gsapInstance || !footerRef.current) return;
    const { gsap } = gsapInstance;

    const ctx = gsap.context(() => {
      // 1. Footer columns stagger in on scroll
      gsap.fromTo(
        ".footer-col",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Social proof bar slides up
      gsap.fromTo(
        ".social-proof-bar",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".social-proof-bar",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Social icons pop in
      gsap.fromTo(
        ".social-icon",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.06,
          duration: 0.35,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef.current);

    return () => ctx.revert();
  }, [gsapInstance]);

  return (
    <footer
      ref={footerRef}
      className="bg-white border-t border-gray-100"
      id="main_site_footer"
      role="contentinfo"
    >
      {/* 1. Main dynamic columns of the premium template */}
      <div className="footer-main max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand details card */}
          <motion.div
            className="footer-col lg:col-span-1 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-2.5 mb-5 group cursor-pointer">
              <div className="w-8 h-8 relative shrink-0 transition-transform duration-300 group-hover:rotate-12">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M4 6 L16 26 L28 6"
                    stroke="#0a0a0a"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path d="M4 6 L16 14 L28 6" fill="#0a0a0a" />
                </svg>
              </div>
              <span className="font-sans font-black text-xl text-[#0a0a0a] tracking-tight">
                NextCraft<span className="text-[#7c3aed]">.</span>
              </span>
            </a>

            {/* Platform Social Links Grid */}
            <div className="flex items-center gap-2 mb-6">
              {footerData.brand.socials.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, color: "#7c3aed" }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 transition-all duration-200 shrink-0 cursor-pointer"
                  aria-label={social.platform}
                >
                  <SocialIcon type={social.icon} />
                </motion.a>
              ))}
            </div>

            {/* Description overlay */}
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-5 max-w-[260px]">
              {footerData.brand.description}
            </p>

            {/* Email badge contact row */}
            <a
              href={`mailto:${footerData.brand.email}`}
              className="text-gray-400 text-xs md:text-sm hover:text-[#7c3aed] transition-colors duration-200 block mb-6 font-medium"
            >
              {footerData.brand.email}
            </a>

            {/* Next.js agency badge */}
            <PartnerBadge label={footerData.brand.partnerBadge} />
          </motion.div>

          {/* Column 2, 3, 4: Nav link hierarchies */}
          {footerData.columns.map((column, colIndex) => (
            <FooterColumn key={column.heading} column={column} index={colIndex} />
          ))}

        </div>
      </div>



      {/* 3. Horizontal divider + Copyright and legal parameters */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-0.5 bg-gray-100" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          {/* Left: Dynamic dynamically calculated copyright text */}
          <p className="text-gray-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} NextCraft. All Rights Reserved.
          </p>

          {/* Right: Legal links pipeline */}
          <div className="flex items-center gap-1 text-xs text-gray-400 flex-wrap justify-center">
            {footerData.legal.map((item, i) => (
              <span key={item.label} className="flex items-center">
                {i > 0 && <span className="text-gray-300 mx-2 hover:text-gray-300 pointer-events-none">|</span>}
                <a href={item.href} className="hover:text-[#0a0a0a] transition-colors duration-200 font-medium">
                  {item.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
