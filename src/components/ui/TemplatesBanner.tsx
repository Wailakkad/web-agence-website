import { templates } from "../../lib/templatesData";

const allImages = templates
  .flatMap(t => [t.image, ...t.mockupImages.map(m => m.src)])
  .filter(Boolean) as string[];

const leftImages = allImages.slice(0, 6);
const rightImages = allImages.slice(6, 12);

const bannerStyles = `
  @keyframes tb-scroll-down {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes tb-scroll-up {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
  .tb-scroll-down {
    animation: tb-scroll-down 25s linear infinite;
  }
  .tb-scroll-up {
    animation: tb-scroll-up 25s linear infinite;
  }
  .tb-card-left {
    transform: rotate(-6deg);
    transition: transform 0.3s ease;
  }
  .tb-card-left:hover {
    transform: rotate(-3deg) scale(1.03);
  }
  .tb-card-right {
    transform: rotate(6deg);
    transition: transform 0.3s ease;
  }
  .tb-card-right:hover {
    transform: rotate(3deg) scale(1.03);
  }
  .tb-perspective {
    perspective: 1200px;
  }
  .tb-perspective-inner {
    transform: rotateY(-10deg);
  }
  .tb-glow {
    background: radial-gradient(circle at 80% 50%, rgba(108,92,231,0.35), transparent 60%);
  }
`;

export function TemplatesBanner() {
  return (
    <>
      <style>{bannerStyles}</style>
      <div className="bg-gradient-to-b from-[#000000] to-[#0F0F2D] rounded-[32px] overflow-hidden relative shadow-2xl border border-[#1a1a3e]">
        <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none tb-glow" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10 px-8 py-10 md:px-14 md:py-16 min-h-[600px]">

          {/* LEFT: Text content */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center border border-[#A29BFE]/30 rounded-full px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-md">
              <span className="text-[#FAFAFA] text-[11px] sm:text-xs font-semibold tracking-wider uppercase select-none">
                Browse. Pick. Launch.
              </span>
            </div>

            <h2 className="text-[#FAFAFA] font-sans font-black text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-5 text-left">
              Templates That<br />Deliver Real Impact.
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm text-left">
              Explore 50+ high-converting React & Next.js templates built for performance, speed, and style. Designed to launch fast and scale effortlessly — these templates do the talking.
            </p>

            <div className="mb-8 flex flex-col items-start select-none">
              <span className="text-[#FAFAFA] font-sans font-black text-6xl md:text-7xl tracking-tighter leading-none">
                50+
              </span>
              <p className="text-gray-500 text-xs sm:text-sm mt-1.5 font-bold tracking-wide uppercase">
                Pre-Built React & Next.js Templates
              </p>
            </div>

            <a
              href="#templates"
              className="inline-flex items-center gap-2 bg-[#6C5CE7] hover:bg-[#5a4bd1] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-[#6C5CE7]/20"
            >
              Browse All Templates
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Dual scrolling columns (desktop) */}
          <div className="hidden lg:block relative w-full tb-perspective">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#000000] to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none z-20" />

            <div className="flex justify-center gap-6 tb-perspective-inner">
              {/* Left column — scrolls down */}
              <div className="overflow-hidden relative h-[520px] w-[280px]">
                <div className="tb-scroll-down flex flex-col gap-6">
                  {[...leftImages, ...leftImages].map((src, i) => (
                    <div
                      key={i}
                      className="tb-card-left w-full h-[180px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — scrolls up */}
              <div className="overflow-hidden relative h-[520px] w-[280px]">
                <div className="tb-scroll-up flex flex-col gap-6">
                  {[...rightImages, ...rightImages].map((src, i) => (
                    <div
                      key={i}
                      className="tb-card-right w-full h-[180px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: horizontal scroll fallback */}
          <div className="lg:hidden w-full overflow-x-auto">
            <div className="flex gap-4 pb-4">
              {allImages.slice(0, 6).map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 w-48 h-32 rounded-2xl overflow-hidden shadow-lg bg-white"
                >
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
