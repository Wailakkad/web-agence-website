import { BRAND_LOGOS_ROW_1, BRAND_LOGOS_ROW_2 } from "../constants";

export default function LogoMarquee() {
  // We duplicate arrays to make sure there's enough horizontal content to complete the infinite scroll seamless loop
  const logos1 = [...BRAND_LOGOS_ROW_1, ...BRAND_LOGOS_ROW_1, ...BRAND_LOGOS_ROW_1];
  const logos2 = [...BRAND_LOGOS_ROW_2, ...BRAND_LOGOS_ROW_2, ...BRAND_LOGOS_ROW_2];

  return (
    <section 
      id="marquee_partners_logos" 
      className="py-16 bg-white overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h3 className="text-gray-400 font-sans font-medium text-xs sm:text-sm tracking-wider uppercase">
          500+ Brands Don't Just Trust Us—They Grow With Us
        </h3>
      </div>

      {/* Marquee Container with dynamic side fading masks */}
      <div className="relative w-full flex flex-col gap-6 py-4">
        {/* Row 1: Scrolls Left to Right (Backward) */}
        <div
          className="w-full overflow-hidden flex"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          }}
        >
          <div className="flex gap-16 items-center shrink-0 animate-marquee-left select-none py-1">
            {logos1.map((logo, idx) => (
              <div
                key={`r1-${idx}`}
                className={`${logo.size} font-sans font-black uppercase text-gray-300 hover:text-violet-500 hover:scale-105 transition-all duration-300 tracking-tight cursor-default`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right to Left (Forward) */}
        <div
          className="w-full overflow-hidden flex"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          }}
        >
          <div className="flex gap-16 items-center shrink-0 animate-marquee-right select-none py-1">
            {logos2.map((logo, idx) => (
              <div
                key={`r2-${idx}`}
                className={`${logo.size} font-sans font-black uppercase text-gray-300 hover:text-blue-500 hover:scale-105 transition-all duration-300 tracking-tight cursor-default`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
