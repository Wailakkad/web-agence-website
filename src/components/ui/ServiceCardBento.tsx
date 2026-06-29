import { useRef, useEffect, MouseEvent } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { useGSAPReady, calculateTilt } from "../../lib/animations";

interface ServiceCardProps {
  id: string;
  type: "simple" | "wide";
  title: string;
  gradientClass: string;
  imageSrc: string;
  bullets?: string[];
  description?: string;
  colSpanClass: string;
}

export default function ServiceCard({
  id,
  type,
  title,
  gradientClass,
  imageSrc,
  bullets = [],
  description = "",
  colSpanClass,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gsapInstance = useGSAPReady();

  // Mouse Move Event listener for GSAP Dynamic 3D tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!gsapInstance || !cardRef.current || !contentRef.current) return;
    const { gsap } = gsapInstance;

    const { rotationX, rotationY } = calculateTilt(e, cardRef.current, 8);

    // Apply tilt animation on hover with custom easing
    gsap.to(contentRef.current, {
      rotateX: rotationX,
      rotateY: rotationY,
      scale: 1.02,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.3,
      overwrite: "auto",
    });
  };

  // Mouse Leave - resets card transform smooth
  const handleMouseLeave = () => {
    if (!gsapInstance || !contentRef.current) return;
    const { gsap } = gsapInstance;

    gsap.to(contentRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transformPerspective: 1000,
      ease: "power3.out",
      duration: 0.5,
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${colSpanClass} group select-none min-h-[380px] md:min-h-[420px] transition-all`}
      id={`service_card_container_${id}`}
    >
      <div
        ref={contentRef}
        id={`service_card_inner_${id}`}
        className={`w-full h-full rounded-[24px] overflow-hidden ${gradientClass} flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-100/10 origin-center`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {type === "simple" ? (
          // Card design for standard size cards (Templates & Web Development)
          <div className="flex flex-col h-full justify-between p-7 relative">
            {/* Overlay for hovering brightness */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-white font-sans font-extrabold text-2xl sm:text-3xl leading-[1.1] whitespace-pre-line tracking-tight">
                {title}
              </h3>
            </div>

            {/* Simulated browser window mockup containing our high-fidelity generated images */}
            <div 
              className="mt-6 -mr-10 translate-x-3 translate-y-6 rounded-tl-xl overflow-hidden shadow-2xl border border-white/10 relative group-hover:scale-[1.03] transition-transform duration-500 ease-out shrink-0"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* Fake browser bar */}
              <div className="bg-black/10 dark:bg-white/5 backdrop-blur-md px-3 py-1.5 flex gap-1 items-center border-b border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
              </div>
              <img
                src={imageSrc}
                alt={title}
                referrerPolicy="no-referrer"
                className="w-full h-44 object-cover object-top filter group-hover:brightness-105 transition-all duration-300"
              />
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none text-white p-3 flex items-end">
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-80">FrameLab Studio</span>
              </div>
            </div>
          </div>
        ) : (
          // WIDE CARD Design (SEO, Performance & Analytics)
          <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-6 p-7 relative">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />

            {/* Left elements of wide card */}
            <div className="md:col-span-7 flex flex-col justify-between h-full z-10" style={{ transform: "translateZ(20px)" }}>
              <div>
                <span className="bg-white/15 text-white/90 text-[10px] uppercase font-bold font-mono tracking-widest px-2.5 py-1 rounded-full inline-block mb-3 bg-opacity-10 backdrop-blur-sm shadow-sm">
                  Strategic growth
                </span>
                <h3 className="text-white font-sans font-extrabold text-2xl sm:text-3xl leading-[1.1] whitespace-pre-line tracking-tight mb-3">
                  {title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5 max-w-sm">
                  {description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6">
                  {bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-white/95">
                      <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-xs font-semibold tracking-tight">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Button */}
              <button className="self-start inline-flex items-center gap-1.5 bg-white text-[#7c3aed] hover:bg-violet-50 font-bold px-4 py-2.5 rounded-xl shadow-md transition-all text-xs cursor-pointer active:scale-95 group-hover:shadow-lg">
                Learn More
                <ArrowUpRight className="w-4 h-4 text-[#7c3aed]" />
              </button>
            </div>

            {/* Right element containing Dashboard Showcase */}
            <div 
              className="md:col-span-5 flex items-center justify-center h-full min-h-[160px] md:min-h-0 relative select-none"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 group-hover:scale-[1.04] transition-all duration-500 flex flex-col">
                {/* Fake header tab */}
                <div className="bg-black/20 px-3 py-1.5 flex gap-1 items-center border-b border-white/5 text-[9px] text-white/60 font-mono">
                  <span>dash.nextcraft.io/analytics</span>
                </div>
                <img
                  src={imageSrc}
                  alt="Analytics Dashboard Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
