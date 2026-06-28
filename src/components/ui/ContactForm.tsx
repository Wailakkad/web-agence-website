"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";

interface ContactFormData {
  name: string;
  email: string;
  websiteUrl: string;
  projectType: string;
  message: string;
}

const inputStyles = `
  w-full px-4 py-3 rounded-lg border border-gray-200
  bg-white text-[#0a0a0a] text-sm
  placeholder:text-gray-400
  focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 
  focus:border-[#7c3aed]
  transition-all duration-200
`;

const labelStyles = `
  block text-xs font-medium text-gray-600 mb-1.5
`;

const errorStyles = `
  text-red-500 text-xs mt-1
`;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulated remote api dispatch
    console.log("Contact form payload:", data);
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSuccess(true);

    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const phone = "N/A";
    const company = data.websiteUrl || "N/A";
    const projectType = data.projectType || "N/A";
    const budget = "N/A";
    const timeline = "N/A";
    const details = data.message || "N/A";

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

    reset();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212781783586?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Auto-dismiss success feedback context after a few seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      id="contact_form_card_container"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="contact_form_element">
        
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Name Field */}
          <div id="contact_form_field_name">
            <label className={labelStyles}>
              Name<span className="text-red-400 ml-0.5">*</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className={`${inputStyles} ${errors.name ? "border-red-300 focus:border-red-400" : ""}`}
            />
            {errors.name && (
              <p className={errorStyles}>{errors.name.message}</p>
            )}
          </div>
          
          {/* Email Address Field */}
          <div id="contact_form_field_email">
            <label className={labelStyles}>
              Email Address<span className="text-red-400 ml-0.5">*</span>
            </label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: { 
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email"
                }
              })}
              type="email"
              placeholder="Email Address"
              className={`${inputStyles} ${errors.email ? "border-red-300 focus:border-red-400" : ""}`}
            />
            {errors.email && (
              <p className={errorStyles}>{errors.email.message}</p>
            )}
          </div>
          
        </div>
        
        {/* Row 2: Website URL */}
        <div id="contact_form_field_website">
          <label className={labelStyles}>Website URL</label>
          <input
            {...register("websiteUrl")}
            type="url"
            placeholder="your website"
            className={inputStyles}
          />
        </div>
        
        {/* Row 3: Project Type dropdown */}
        <div id="contact_form_field_project_type">
          <label className={labelStyles}>
            Project Type<span className="text-red-400 ml-0.5">*</span>
          </label>
          <div className="relative">
            <select
              {...register("projectType", { 
                required: "Please select a project type" 
              })}
              defaultValue=""
              className={`${inputStyles} appearance-none cursor-pointer ${errors.projectType ? "border-red-300 focus:border-red-400" : ""}`}
            >
              <option value="" disabled>Select one...</option>
              <option value="custom-website">Custom Website Build</option>
              <option value="template-purchase">Template Purchase</option>
              <option value="template-customization">Template Customization</option>
              <option value="seo-performance">SEO & Performance</option>
              <option value="redesign">Website Redesign</option>
              <option value="other">Other</option>
            </select>
            
            {/* Custom SVG select chevron accent */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
          {errors.projectType && (
            <p className={errorStyles}>{errors.projectType.message}</p>
          )}
        </div>
        
        {/* Row 4: Message text box description area */}
        <div id="contact_form_field_message">
          <label className={labelStyles}>
            About your project<span className="text-red-400 ml-0.5">*</span>
          </label>
          <textarea
            {...register("message", { 
              required: "Please tell us about your project" 
            })}
            placeholder="Tell about your project..."
            rows={5}
            className={`${inputStyles} resize-none ${errors.message ? "border-red-300 focus:border-red-400" : ""}`}
          />
          {errors.message && (
            <p className={errorStyles}>{errors.message.message}</p>
          )}
        </div>
        
        {/* Submit action panel trigger indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1" id="contact_form_submit_wrapper">
          <motion.button
            id="contact_form_submit_action_btn"
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
            className={`
              inline-flex items-center justify-center gap-2
              bg-[#7c3aed] hover:bg-[#6d28d9] 
              text-white font-semibold 
              px-8 py-3.5 rounded-xl text-sm
              transition-all duration-200 cursor-pointer
              disabled:opacity-60 disabled:cursor-not-allowed
              shadow-lg shadow-violet-500/15
            `}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              "Send a Message"
            )}
          </motion.button>

          {isSuccess && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-emerald-600 text-sm font-bold flex items-center gap-1"
              id="contact_form_success_feedback"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Message sent! We&apos;ll respond within 24 hours.
            </motion.p>
          )}
        </div>
        
      </form>
    </motion.div>
  );
}
