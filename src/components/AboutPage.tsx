import { motion } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Workflow, 
  PenTool, 
  Code, 
  Rocket, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Compass,
  Smile,
  Award,
  Calendar,
  Sparkles,
  Layers,
  ChevronRight,
  Target,
  Heart
} from "lucide-react";
import { TESTIMONIALS_DATA } from "../lib/testimonialsData";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen pt-24 pb-12 overflow-hidden selection:bg-violet-100 selection:text-violet-900">
      
      {/* Decorative blurred background details for premium appearance */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* SECTION 1 — HERO */}
      <section id="about_hero_section" className="relative py-16 md:py-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Authority Headline and copy */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-50 text-violet-700 text-xs font-bold tracking-wider uppercase rounded-full w-fit"
              >
                <Sparkles className="w-3.5 h-3.5" />
                The Agency Standard
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-[0.95] text-gray-950 text-balance"
              >
                We Design Digital Experiences That <span className="text-violet-600">Grow Businesses.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance"
              >
                NextCraft is a boutique agency focused on elevating scaling startups. We combine award-winning visual layouts with high-performance React engineering to turn passive visitors into loyal brand advocates.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4 items-center mt-2"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300"
                >
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-950 font-semibold text-sm px-6 py-3.5 hover:bg-gray-50 rounded-full transition-all duration-300"
                >
                  View Services
                </a>
              </motion.div>
            </div>
            
            {/* Right Column: Layered Premium Visual & Stats Overlay */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main visual wrapper */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative group"
                >
                  <img 
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137593/about_image.png"
                    alt="NextCraft Studio Creative Session"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
                
                {/* Floating Statistics overlay cards */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute -left-6 bottom-36 bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center gap-3.5 max-w-[200px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-sans font-black text-gray-900">100+</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Projects Done</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute right-4 -bottom-4 bg-[#0a0a0a] border border-gray-800 text-white p-5 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[230px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-sans font-black">95%</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-300">Client Satisfaction</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -right-6 top-12 bg-white/95 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center gap-3.5 max-w-[190px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-sans font-black text-gray-900">3+ Yrs</div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Pure Experience</div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY */}
      <section id="about_story_section" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Interactive details and text layout */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="text-violet-600 font-mono text-xs uppercase tracking-wider font-bold">
                The Genesis & Purpose
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-gray-950">
                Driven by Digital Craftsmanship.
              </h2>
              
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  NextCraft was founded in 2023 with a clear, singular vision: <strong>digital products should never sacrifice performance for beauty</strong>. We watched scaling brands settle for generic, bloated landing templates that bloated codebases and damaged page-load conversions. 
                </p>
                <p>
                  We built our boutique studio to dismantle that compromise. We combine elegant, editorial visual hierarchies with blazing-fast React and Next.js engineering.
                </p>
              </div>

              {/* Mission & Vision Tabs list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-lg bg-violet-100/40 text-violet-600 flex items-center justify-center mb-3">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold text-sm text-gray-950 mb-1.5">Our Mission</h3>
                  <p className="text-xs text-gray-500 leading-normal">
                    To deliver premium, highly scalable web solutions that enhance user engagement and secure market authority for modern brands.
                  </p>
                </div>
                
                <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/40 text-emerald-600 flex items-center justify-center mb-3">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-bold text-sm text-gray-950 mb-1.5">Our Philosophy</h3>
                  <p className="text-xs text-gray-500 leading-normal">
                    Clean semantic architecture, responsive user interface loops, and pixel precision. We build for the long-term.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Immersive Agency Card Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-[#0a0a0a] p-8 md:p-12 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col gap-8 h-full justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20 font-bold">
                      NextCraft Philosophy
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-sans font-black tracking-tight mt-4 leading-tight">
                      "If the codebase is bloated, the design fails. True aesthetic is seamless speed."
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 border-t border-gray-800 pt-6 mt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
                      <img 
                        src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137894/ouail.jpg" 
                        alt="Ouail"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-sans font-bold text-white">Ouail</div>
                      <div className="text-xs text-gray-400 font-mono">Agency Founder & Principal Dev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR APPROACH */}
      <section id="about_approach_section" className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-violet-600 font-mono text-xs uppercase tracking-wider font-bold">
              Engineering Method
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-gray-950 mt-2 mb-4">
              Our Core Strategic Pillars
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We replace guesswork with refined, disciplined processes to engineer stunning frontends grounded in deep functional design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Approach Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-violet-200 hover:shadow-[0_10px_30px_rgba(124,58,237,0.03)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">01. Research</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We perform granular market discovery, keyword mapping, competitor analysis, and audience intent studies.
              </p>
            </div>

            {/* Approach Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-violet-200 hover:shadow-[0_10px_30px_rgba(124,58,237,0.03)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">02. Strategy</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crafting targeted information flow, call-to-action matrices, and robust interactive frameworks designed to convert.
              </p>
            </div>

            {/* Approach Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-violet-200 hover:shadow-[0_10px_30px_rgba(124,58,237,0.03)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <PenTool className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">03. Design</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Producing premium custom UI/UX design components with clean typography grids, spacing harmony, and fluid transitions.
              </p>
            </div>

            {/* Approach Card 4 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-violet-200 hover:shadow-[0_10px_30px_rgba(124,58,237,0.03)] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-lg text-gray-900 mb-2">04. Development</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Translating designs into light, semantic React modules utilizing Tailwind CSS with 100/100 performance scores.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CLIENTS CHOOSE US */}
      <section id="about_benefits_section" className="py-24 bg-gray-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky Left Pillar text */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-bold">
                The Competitive Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-gray-950 mt-2 mb-6 leading-tight">
                Designed to Dominate the Digital Space.
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                Most agencies build for aesthetics alone. NextCraft designs for measurable business outcomes — speed, search indexing, and customer conversion.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Clean semantic markup (HTML5 / WAI-ARIA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Next.js SSR & edge CDN hosting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Lightweight responsive assets and animations</span>
                </div>
              </div>
            </div>

            {/* Right Side: Advantage Grid List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Benefit 1 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap className="w-4 h-4 animate-pulse" />
                </div>
                <h3 className="font-sans font-bold text-base text-gray-900 mb-1.5">Fast Delivery</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Accelerated agile sprints to deliver state-of-the-art platforms on time, preserving momentum.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-gray-900 mb-1.5">SEO Optimized</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Optimized metadata hierarchies and fast response times to help your business rank at the top.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-gray-900 mb-1.5">Conversion Focused</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Every user flow is engineered to guide audiences directly toward valuable actions and contact forms.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-gray-900 mb-1.5">Scalable Architecture</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Modular TypeScript code structures built to handle rapid scaling and seamless multi-team extension.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-bold text-base text-gray-900 mb-1.5">Modern Design Aesthetics</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Award-winning visual layout rhythms featuring precise font pairing, bold negative space, and smooth micro-interactions that elevate brand premium.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR PROCESS */}
      <section id="about_process_section" className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-violet-600 font-mono text-xs uppercase tracking-wider font-bold">
              The Roadmap to Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-gray-950 mt-2 mb-4">
              How We Bring Ideas to Life
            </h2>
            <p className="text-gray-500 text-sm">
              An organized, milestone-driven framework focused on collaboration and constant status feedback.
            </p>
          </div>

          <div className="relative">
            {/* Center bar for desktop, left bar for mobile */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2" />
            
            <div className="space-y-16">
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-violet-600 shadow-sm -translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                </div>
                <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-xs font-mono font-bold text-violet-600">Phase 01</span>
                  <h3 className="font-sans font-black text-xl text-gray-950 mt-1 mb-2">Discovery & Align</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md md:ml-auto leading-relaxed">
                    We initiate with an immersive alignment workshop to analyze key requirements, wireframe core paths, and set detailed milestone deliverables.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-violet-600 shadow-sm -translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                </div>
                <div className="hidden md:block md:w-1/2" />
                <div className="pl-12 md:pl-12 md:w-1/2">
                  <span className="text-xs font-mono font-bold text-violet-600">Phase 02</span>
                  <h3 className="font-sans font-black text-xl text-gray-950 mt-1 mb-2">Technical Strategy</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
                    Structuring user-journeys, mapping system architecture, and organizing dynamic component trees tailored for conversion optimization.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-violet-600 shadow-sm -translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                </div>
                <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-xs font-mono font-bold text-violet-600">Phase 03</span>
                  <h3 className="font-sans font-black text-xl text-gray-950 mt-1 mb-2">Premium UI Design</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md md:ml-auto leading-relaxed">
                    Hand-crafting custom layout visuals in Figma. Establishing elegant typography systems, color ranges, and interactive high-fidelity prototypes.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-violet-600 shadow-sm -translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                </div>
                <div className="hidden md:block md:w-1/2" />
                <div className="pl-12 md:pl-12 md:w-1/2">
                  <span className="text-xs font-mono font-bold text-violet-600">Phase 04</span>
                  <h3 className="font-sans font-black text-xl text-gray-950 mt-1 mb-2">Full-Stack Development</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
                    Translating pixel assets to scalable, highly optimized React codebase elements. Running strict cross-device testing and performance checks.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 shadow-sm -translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-xs font-mono font-bold text-emerald-600">Phase 05</span>
                  <h3 className="font-sans font-black text-xl text-gray-950 mt-1 mb-2">Production Launch</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md md:ml-auto leading-relaxed">
                    Deploying the application onto secure Cloud servers, configuring DNS routing, setting up sitemaps, and performing live handoff guides.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — TEAM / FOUNDER */}
      <section id="about_founder_section" className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Premium High-res Founder Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#111]">
                  <img 
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137894/ouail.jpg" 
                    alt="Ouail - Founder of NextCraft"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>
                
                {/* Floating Role indicator card */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white border border-gray-100 p-5 rounded-2xl shadow-xl">
                  <div className="text-sm font-sans font-black text-gray-950">Ouail</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-violet-600 font-mono">
                    Founder & Principal Architect
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Bio and Skill indicators */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-violet-600 font-mono text-xs uppercase tracking-wider font-bold">
                Elite Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-gray-950 leading-tight">
                Crafting Code with Absolute Precision.
              </h2>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Ouail is the principal founder and lead engineering mind behind NextCraft. Believing in a rare standard of digital design, he merges frontend pixel excellence with robust architecture. Under his guidelines, NextCraft has developed from a targeted consulting practice into an elite development studio trusted by businesses globally.
              </p>

              <div className="h-[1px] bg-gray-100 my-2" />

              {/* Grid of expertise metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm font-sans font-extrabold text-gray-900">Next.js Ecosystem</div>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">
                    Server-side rendering, API route proxy structures, and server components.
                  </p>
                </div>
                <div>
                  <div className="text-sm font-sans font-extrabold text-gray-900">Custom Engineering</div>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">
                    React functional state, decoupled hooks, and responsive animations.
                  </p>
                </div>
                <div>
                  <div className="text-sm font-sans font-extrabold text-gray-900">Visual Auditing</div>
                  <p className="text-xs text-gray-400 mt-1 leading-normal">
                    Strict font scale systems, custom grid setups, and optimized layouts.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — SOCIAL PROOF */}
      <section id="about_social_proof_section" className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-mono text-xs uppercase tracking-wider font-bold">
              Trusted Worldwide
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-gray-950 mt-2 mb-4">
              Real Impact, Real Partnerships
            </h2>
            <p className="text-gray-500 text-sm">
              Read how scaling brands launch high-speed architectures that boost customer conversion.
            </p>
          </div>

          {/* Testimonial Cards Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.slice(0, 3).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-4.5 h-4.5 text-amber-400 fill-current" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm italic font-normal leading-relaxed mb-6">
                    "{testimonial.fullQuote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t border-gray-100 pt-5">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100 bg-violet-100">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-sans font-black text-gray-900 leading-tight">
                      {testimonial.name}
                    </div>
                    <div className="text-[10px] text-gray-400 leading-none mt-0.5">
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Client Success Stat badge */}
          <div className="mt-16 p-6 rounded-2xl bg-violet-50/50 border border-violet-100/30 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-center sm:text-left">
            <div>
              <div className="text-sm font-sans font-extrabold text-violet-950 mb-1">
                Looking for detailed client success study reports?
              </div>
              <p className="text-xs text-gray-500">
                Contact our sales and engineering team to get performance charts and UI systems metrics.
              </p>
            </div>
            <a 
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs px-5 py-3 rounded-full shadow-md transition-all shrink-0"
            >
              Request Report
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section id="about_cta_section" className="py-24 relative overflow-hidden bg-[#0a0a0a] text-white">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
            Let's Collaborate
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight max-w-2xl leading-none">
            Ready To Build Something <span className="text-violet-400">Exceptional?</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Join elite founders and scaling brands working with NextCraft. Align with our principal team and ship a high-speed web application that transforms conversions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
            <a
              href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-950 font-semibold text-sm px-7 py-4 rounded-full shadow-lg hover:scale-[1.01] transition-all duration-300"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-semibold text-sm px-7 py-4 hover:bg-white/5 rounded-full transition-all duration-300 border border-white/10"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
