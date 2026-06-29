import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  ChevronRight,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  MessageSquare,
  HelpCircle,
  Activity,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Send,
  Building2,
  DollarSign
} from "lucide-react";

// Types for Contact Form
interface PremiumContactFormData {
  name: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  projectType: string;
  budgetRange: string;
  projectDetails: string;
  timeline: string;
}

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<PremiumContactFormData>();

  const onSubmit = async (data: PremiumContactFormData) => {
    console.log("Premium contact dispatch payload:", data);
    // Simulate latency for processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);

    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const phone = data.phoneNumber || "N/A";
    const company = data.companyName || "N/A";
    const projectType = data.projectType || "N/A";
    const budget = data.budgetRange || "N/A";
    const timeline = data.timeline || "N/A";
    const details = data.projectDetails || "N/A";

    const message = `━━━━━━━━━━━━━━

🚀 NEW PROJECT INQUIRY

👤 Name:
${name}

📧 Email:
${email}

📱 Phone:
${phone}

🏢 Company:
${company}

📌 Project Type:
${projectType}

💰 Budget:
${budget}

⏳ Timeline:
${timeline}

📝 Project Details:
${details}

━━━━━━━━━━━━━━

I would like to discuss this project and receive a proposal.

Thank you.

━━━━━━━━━━━━━━`;

    // Reset form fields
    reset();

    // Redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212781783586?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Auto reset success message after 7 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 7000);
  };

  // Section 3: Contact Information Card Data
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-violet-600" />,
      label: "Direct Email",
      value: "akkadouail8@gmail.com",
      link: "mailto:akkadouail8@gmail.com",
      desc: "Expect a detailed reply within 12 hours."
    },
    {
      icon: <Phone className="w-5 h-5 text-violet-600" />,
      label: "Call or WhatsApp",
      value: "+212 717837586",
      link: "tel:+212717837586",
      desc: "Available Mon-Fri, 9am - 6pm PST."
    },
    {
      icon: <MapPin className="w-5 h-5 text-violet-600" />,
      label: "Headquarters",
      value: "Casablanca, Maroc",
      link: "https://maps.google.com",
      desc: "Our creative engineering studio."
    },
    {
      icon: <Clock className="w-5 h-5 text-violet-600" />,
      label: "Business Hours",
      value: "9:00 AM — 6:00 PM PST",
      link: null,
      desc: "Closed on standard public holidays."
    }
  ];

  // Section 4: Why Work With Us Benefits
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Fast Response Time",
      desc: "No corporate lag. We reply with a detailed technical feasibility outline within 24 hours of form submission."
    },
    {
      icon: <Layers className="w-6 h-6 text-violet-600" />,
      title: "Strategic Blueprinting",
      desc: "We don't build generic visual structures. We design focused user journey pathways engineered to maximize conversions."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "Cutting-Edge Architecture",
      desc: "We leverage serverless React, TypeScript, Next.js, and Tailwind CSS to deploy blazing-fast digital assets with perfect SEO."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-500" />,
      title: "Transparent Communication",
      desc: "No opaque pricing. You receive fixed, project-based proposals with mandatory progress reports every 72 hours."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-500" />,
      title: "Post-Launch Partnership",
      desc: "We guard your launch with 30 days of VIP performance tracking, minor code adjustments, and technical warranty support."
    }
  ];

  // Section 6: FAQ Data
  const faqs = [
    {
      q: "What is your typical project onboarding process?",
      a: "Our onboarding is seamless. First, we review your contact form submission and send a brief response with potential options. Next, we schedule a 15-minute Discovery Call to clarify technical integrations, design preferences, and performance objectives. Finally, we provide a structured, fixed-price proposal detailing all deliverables, user journey maps, and milestones. Once approved, we launch directly into UI wireframing."
    },
    {
      q: "How does project pricing work for custom builds?",
      a: "We work strictly on flat, project-based pricing modeled directly on the complexity of your custom build. We believe this is far superior to unpredictable hourly rates. Standard template customization runs between $1,500 and $3,500, while bespoke full-stack React & Next.js applications range from $5,000 to $15,000 depending on requirements. You will receive a locked, guaranteed proposal before any work begins."
    },
    {
      q: "What is your typical delivery timeline?",
      a: "Bespoke projects typically span between 3 to 6 weeks from initial Discovery to final Live Launch. Rapid template customizations and speed optimizations are completed and deployed in 5 to 9 days. We prioritize absolute precision and speed, delivering scheduled status reports every 3 days so you are always in the loop."
    },
    {
      q: "How do we communicate throughout the development lifecycle?",
      a: "We maintain highly focused, asynchronous channels to respect your time. We share real-time progress via dedicated Figma prototypes, staging URLs on Vercel, and detailed status updates every 3 days via Slack or email. Important milestones are reviewed in short, pre-recorded walkthrough videos or brief, structured syncs."
    },
    {
      q: "Do you offer post-launch technical support and updates?",
      a: "Yes. Every custom build includes 30 days of complimentary VIP post-launch support and performance tracking. Beyond that, we offer proactive monthly performance plans that include routine speed optimization audits, dependency upgrades, copy edits, and visual health tracking to keep your platform running at 100/100."
    },
    {
      q: "Can my team edit content without writing code?",
      a: "Absolutely. We routinely integrate intuitive headless content management systems (like Sanity, Contentful, or Strava/custom setups). Your marketing team can easily publish articles, update testimonials, edit landing copy, and scale services without ever touching code or writing a developer support ticket."
    }
  ];

  // Generate schema FAQ structure
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact_form_section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen pt-24 pb-12 overflow-hidden selection:bg-violet-100 selection:text-violet-900 font-sans relative">
      
      {/* JSON-LD Schema FAQ Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BACKGROUND GRAPHICS & BLUR DECORATIONS */}
      <div className="absolute top-20 left-1/10 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-1/10 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-violet-50/40 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION 1 — HERO */}
      <section className="relative py-16 sm:py-24 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-50 text-violet-700 text-xs font-bold tracking-widest uppercase rounded-full w-fit"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Let&apos;s Build Something Exceptional
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-[0.95] text-gray-950 text-balance"
              >
                Ready to Grow Your <span className="text-violet-600">Business?</span> Let&apos;s talk.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance"
              >
                Have a project in mind, a visual template that needs premium refactoring, or a critical performance milestone to smash? Connect with our elite team and secure a locked, flat-rate roadmap.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4 items-center mt-2"
              >
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-gray-900 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300 cursor-pointer"
                >
                  Start Your Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-950 font-bold text-sm px-6 py-3.5 hover:bg-gray-50 rounded-full transition-all duration-300"
                >
                  Explore Capabilities
                </a>
              </motion.div>

              {/* FLOATING PERFORMANCE INDICATORS FOR HERO */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-lg text-gray-950 leading-none">24 Hrs</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Guaranteed Response</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-lg text-gray-950 leading-none">100/100</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Perfect Speed Target</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 col-span-2 md:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans font-black text-lg text-gray-950 leading-none">Flat-Rate</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Guaranteed Pricing</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Interactive Visual Element */}
            <div className="lg:col-span-5 relative select-none">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Glassmorphism Image Container */}
                <img
                  src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782339078/contact_image.jpg"
                  alt="Contact Us"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/4.2] object-cover rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
                />

                {/* Floating decor overlay */}
                <div className="absolute -right-6 -bottom-6 bg-slate-950 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-[210px] z-20">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 animate-pulse text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm font-black tracking-tight">100/100</div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Speed Audit Standard</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 — CONTACT FORM & DETAILS SPLIT LAYOUT */}
      <section id="contact_form_section" className="py-20 bg-gray-50/30 border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Section Header, Contact Cards & Badges */}
            <div className="lg:col-span-5 flex flex-col gap-8 text-left">
              
              <div>
                <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mb-4 block border border-violet-100">
                  Direct Channels
                </span>
                <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none mb-4">
                  Get in Touch with Our Studio Experts
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  We don&apos;t use complex automated phone menus. Use any of the direct, verified channels below to bypass queues and connect with a product specialist immediately.
                </p>
              </div>

              {/* Section 3: Professional Contact Information Cards */}
              <div className="space-y-4" id="contact_info_cards_block">
                {contactInfo.map((card, idx) => {
                  const CardWrapper = card.link ? "a" : "div";
                  const extraProps = card.link ? { href: card.link, className: "group block" } : {};
                  
                  return (
                    <CardWrapper
                      key={idx}
                      {...extraProps}
                    >
                      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-violet-100 transition-all duration-300">
                          {card.icon}
                        </div>
                        <div className="space-y-0.5">
                          <span className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 font-mono">
                            {card.label}
                          </span>
                          <span className="block text-sm font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                            {card.value}
                          </span>
                          <span className="block text-xs text-gray-400 leading-normal font-medium">
                            {card.desc}
                          </span>
                        </div>
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: Premium Custom Form */}
            <div className="lg:col-span-7 w-full" id="premium_contact_form_panel">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative"
              >
                
                {/* Visual Lock/Security Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-[10px] text-gray-400 font-mono uppercase font-bold">
                  <Lock className="w-3 h-3 text-emerald-500" />
                  <span>Strict Confidentiality</span>
                </div>

                <div className="mb-8 text-left">
                  <h3 className="text-xl font-bold text-gray-950 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-violet-600" />
                    Project Briefing Form
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Fill out the fields below. Our lead full-stack developer reviews all briefs personally.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
                  
                  {/* Name + Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("name", { required: "Full Name is required" })}
                        type="text"
                        placeholder="e.g. Ouail Akkad"
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#0a0a0a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all ${
                          errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-400/10" : "border-gray-200"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address"
                          }
                        })}
                        type="email"
                        placeholder="e.g. hello@company.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#0a0a0a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all ${
                          errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-400/10" : "border-gray-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Company + Phone Number Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          {...register("companyName")}
                          type="text"
                          placeholder="e.g. FrameLab Inc."
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#0a0a0a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          {...register("phoneNumber")}
                          type="tel"
                          placeholder="e.g. +1 (555) 019-2834"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#0a0a0a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register("projectType", { required: "Please select a project type" })}
                        defaultValue=""
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#0a0a0a] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all ${
                          errors.projectType ? "border-red-300 focus:border-red-400" : "border-gray-200"
                        }`}
                      >
                        <option value="" disabled>Select project type...</option>
                        <option value="bespoke-nextjs">Bespoke React & Next.js Build</option>
                        <option value="uiux-design">Premium UI/UX Design System</option>
                        <option value="seo-optimization">SEO & Core Web Vitals Speed Audit</option>
                        <option value="template-polish">Template Customization & Polish</option>
                        <option value="other-consultation">Other Technical Consultation</option>
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                    {errors.projectType && (
                      <p className="text-red-500 text-xs mt-1 font-semibold">{errors.projectType.message}</p>
                    )}
                  </div>

                  {/* Budget Range + Timeline Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                        Budget Range <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register("budgetRange", { required: "Please select a budget range" })}
                          defaultValue=""
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#0a0a0a] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all ${
                            errors.budgetRange ? "border-red-300 focus:border-red-400" : "border-gray-200"
                          }`}
                        >
                          <option value="" disabled>Select budget range...</option>
                          <option value="1k-2k">$1,000 — $2,000 (Essential)</option>
                          <option value="2k-4k">$2,000 — $4,000 (Business)</option>
                          <option value="4k-7k">$4,000 — $7,000 (Premium)</option>
                          <option value="7k-plus">$7,000+ (Custom / Multi-Project)</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                      {errors.budgetRange && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.budgetRange.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                        Preferred Timeline <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register("timeline", { required: "Please select a preferred timeline" })}
                          defaultValue=""
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#0a0a0a] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all ${
                            errors.timeline ? "border-red-300 focus:border-red-400" : "border-gray-200"
                          }`}
                        >
                          <option value="" disabled>Select preferred timeline...</option>
                          <option value="1-2-weeks">1 — 2 Weeks (Urgent)</option>
                          <option value="3-5-weeks">3 — 5 Weeks (Standard)</option>
                          <option value="1-2-months">1 — 2 Months</option>
                          <option value="flexible">Flexible Timeline</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                      {errors.timeline && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.timeline.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-mono uppercase tracking-wider">
                      Project details & Objectives <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("projectDetails", { required: "Please share some details about your project" })}
                      placeholder="Please outline your business objectives, target audience, technical hurdles, or any specific visual references..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#0a0a0a] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/10 focus:border-violet-600 transition-all ${
                        errors.projectDetails ? "border-red-300 focus:border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="text-red-500 text-xs mt-1 font-semibold">{errors.projectDetails.message}</p>
                    )}
                  </div>

                  {/* Submit Button & Feedback */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-violet-500/10 hover:translate-y-[-1px] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Processing brief...
                        </>
                      ) : (
                        <>
                          Send Project Brief
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {isSuccess && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="flex items-center gap-2 text-emerald-600 text-sm font-bold"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 animate-bounce" />
                          <span>Brief securely sent! We will respond within 24 hours.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </form>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4 — WHY WORK WITH US BENEFITS */}
      <section className="py-20 bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100">
              The FrameLab Advantage
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
              Engineering Value. Eliminating Risk.
            </h2>
            <p className="text-gray-500 text-sm">
              Explore how we design and deploy custom high-performance React applications optimized for search visibility and visitor engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-start text-left gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-xs shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-sans font-black text-base text-gray-900 leading-snug mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — TEAM SECTION */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-b border-gray-100 relative overflow-hidden">
        {/* Soft floating background decorative elements */}
        <div className="absolute top-1/4 left-5 w-48 h-48 bg-violet-200/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-5 w-64 h-64 bg-blue-200/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100">
              Meet The Experts
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
              The People Behind Every Successful Project
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              We are a boutique squad of senior product builders, full-stack engineers, and award-winning aesthetic designers committed to premium digital craft.
            </p>
          </div>

          {/* Premium Team Layout: Founder featured larger, centered, with members positioned around */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center max-w-6xl mx-auto">
            
            {/* Team Member 1 (Left Wing) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3 lg:pt-12"
            >
              <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl group hover:translate-y-[-4px] transition-all duration-300 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative bg-gray-100">
                  <img
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137895/Fatima.jpg"
                    alt="Fatima — UI/UX Designer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase font-mono">View Figma Board</span>
                  </div>
                </div>

                <div className="text-left space-y-2">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-violet-600 block">
                      Aesthetic Lead
                    </span>
                    <h3 className="font-sans font-black text-lg text-gray-950">
                      Fatima
                    </h3>
                    <p className="text-xs font-semibold text-gray-400">
                      UI/UX Designer
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Focused on creating intuitive user experiences and visually engaging interfaces.
                  </p>

                  <div className="flex gap-2.5 pt-3 text-gray-400">
                    <a href="#github" className="hover:text-violet-600 transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="#linkedin" className="hover:text-violet-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#twitter" className="hover:text-violet-600 transition-colors"><Twitter className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Card (Center / Larger / Prominent Layout) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 z-10"
            >
              <div className="bg-white border-2 border-violet-600/20 rounded-[32px] p-8 shadow-xl hover:shadow-2xl group hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white to-violet-50/10">
                
                {/* Elite Badge Overlay */}
                <div className="absolute top-5 right-5 bg-violet-600 text-white text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md shadow-violet-500/20">
                  FOUNDER
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo Left */}
                  <div className="md:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden relative bg-gray-100 shadow-md">
                    <img
                      src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137894/ouail.jpg"
                      alt="Ouail Akkad — Founder"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Copy Right */}
                  <div className="md:col-span-7 text-left space-y-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-violet-600 block">
                        Architect & Core Engineer
                      </span>
                      <h3 className="font-sans font-black text-2xl text-gray-950 leading-tight">
                        Ouail Akkad
                      </h3>
                      <p className="text-xs font-semibold text-gray-400">
                        Founder & Full Stack Developer
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                      Specialized in modern web applications, UI/UX design and scalable digital experiences. Ouail designs, architects, and deploys every high-growth client project.
                    </p>

                    <div className="flex gap-3 pt-2 text-gray-400">
                      <a href="#github" className="hover:text-violet-600 transition-colors"><Github className="w-4.5 h-4.5" /></a>
                      <a href="#linkedin" className="hover:text-violet-600 transition-colors"><Linkedin className="w-4.5 h-4.5" /></a>
                      <a href="#twitter" className="hover:text-violet-600 transition-colors"><Twitter className="w-4.5 h-4.5" /></a>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* Team Member 2 (Right Wing) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 lg:pt-12"
            >
              <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl group hover:translate-y-[-4px] transition-all duration-300 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative bg-gray-100">
                  <img
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1782137896/Badar.jpg"
                    alt="Badar — Frontend Developer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase font-mono">View Github Profile</span>
                  </div>
                </div>

                <div className="text-left space-y-2">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-violet-600 block">
                      Core Development
                    </span>
                    <h3 className="font-sans font-black text-lg text-gray-950">
                      Badar
                    </h3>
                    <p className="text-xs font-semibold text-gray-400">
                      Frontend Developer
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Passionate about building fast, responsive and high-performance websites.
                  </p>

                  <div className="flex gap-2.5 pt-3 text-gray-400">
                    <a href="#github" className="hover:text-violet-600 transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="#linkedin" className="hover:text-violet-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#twitter" className="hover:text-violet-600 transition-colors"><Twitter className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 6 — FAQ (ACCORDION STYLE) */}
      <section className="py-20 bg-white border-b border-gray-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-violet-600 font-bold font-mono text-[10px] uppercase tracking-widest bg-violet-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-violet-100">
              Clear Answers
            </span>
            <h2 className="text-gray-950 font-sans font-black text-3xl sm:text-4xl tracking-tight leading-none">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Review details on custom Next.js engineering process, flat-rate quotes, turnaround timelines, and launch support.
            </p>
          </div>

          {/* Interactive Accordion FAQs */}
          <div className="space-y-4" id="contact_faq_accordion_container">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-violet-200 transition-colors duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-gray-900 hover:text-violet-700 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    <HelpCircle className={`w-5 h-5 shrink-0 text-violet-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="p-5 pt-0 border-t border-gray-50 text-xs sm:text-sm text-gray-500 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7 — FINAL CONVERSION CTA */}
      <section className="py-20 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Deep colored glowing backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-bold tracking-widest uppercase rounded-full">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            Let&apos;s Build Together
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-none text-balance">
            Let&apos;s Turn Your Vision Into Reality
          </h2>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            Contact us today to receive a comprehensive speed, security, and conversion audit layout. Book a discovery Sync or submit a custom project briefing directly.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center pt-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-300 cursor-pointer"
            >
              Send a Message
              <Send className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/212781783586?text=Hello%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20discovery%20call.%0APlease%20provide%20available%20times%20and%20next%20steps."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/25 text-white font-bold text-xs px-6 py-3.5 rounded-full transition-all duration-300"
            >
              Book discovery Sync
              <ArrowUpRight className="w-3.5 h-3.5 text-violet-300" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold text-xs px-6 py-3.5 hover:bg-white/5 rounded-full transition-all duration-300"
            >
              View Services
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
