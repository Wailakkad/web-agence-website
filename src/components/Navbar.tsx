import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Calendar, Layers, BookOpen, Layers2 } from "lucide-react";
import { NAV_ITEMS, NavItem } from "../constants";
import { useGSAPReady } from "../lib/animations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const navRef = useRef<HTMLElement>(null);
  const gsapInstance = useGSAPReady();

  // Scroll event for glassy navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation on load
  useEffect(() => {
    if (!gsapInstance || !navRef.current) return;
    const { gsap } = gsapInstance;

    // Slide down navbar on page load
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [gsapInstance]);

  return (
    <nav
      id="navbar_main"
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.01)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer" id="logo_homelink">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center select-none shadow-sm">
              <img
                src="/FrameLab-logo.jpeg"
                alt="FrameLab"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-sans font-black text-xl tracking-tight text-gray-950">
              FrameLab<span className="text-violet-600">.</span>
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = !!item.dropdownItems;
              const isDropdownOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      isDropdownOpen
                        ? "text-gray-950 bg-gray-50"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-gray-800" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown Card */}
                  {hasDropdown && isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2 grid gap-1">
                        <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50/50 rounded-lg">
                          Explore {item.label}
                        </div>
                        {item.dropdownItems?.map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.href}
                            className="flex items-start gap-3 p-3 hover:bg-violet-50/50 rounded-xl transition-colors group cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-lg bg-violet-100/30 flex items-center justify-center text-violet-600 shrink-0 group-hover:bg-violet-100 transition-colors">
                              {item.label === "Services" ? (
                                <Sparkles className="w-4 h-4" />
                              ) : (
                                <Layers className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              <div className="text-gray-900 font-semibold text-xs group-hover:text-violet-700 transition-colors leading-none mb-1">
                                {dropItem.label}
                              </div>
                              <p className="text-gray-400 text-[11px] leading-snug">
                                {dropItem.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Area - Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Pulsing indicator Booking Call */}
            <a
              href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 text-xs font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-200/60 rounded-full px-4 py-2.5 transition-colors cursor-pointer shadow-sm"
              id="nav_book_call"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Book a Call
            </a>

            <a
              href="#templates"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#0a0a0a] hover:bg-gray-900 px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              id="nav_browse_templates"
            >
              Browse Templates
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Burger - Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-gray-950 hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden animate-in fade-in slide-in-from-top-3 duration-200 bg-white border-b border-gray-100 absolute top-full left-0 right-0 shadow-lg px-4 pt-4 pb-6 space-y-4">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-violet-600 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <div className="h-[1px] bg-gray-100 my-4 px-4"></div>

          <div className="flex flex-col gap-2.5 px-4">
            <a
              href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-200/80 rounded-full py-3 text-sm transition-colors cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Book a Call
            </a>

            <a
              href="#templates"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 font-semibold text-white bg-[#0a0a0a] hover:bg-gray-900 py-3 rounded-full text-sm transition-all"
            >
              Browse Templates
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
