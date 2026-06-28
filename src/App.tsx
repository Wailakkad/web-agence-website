import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import WhyUsSection from "./components/WhyUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TemplatesAndFaqSection from "./components/TemplatesAndFaqSection";
import ContactSection from "./components/ContactSection";
import FinalCtaSection from "./components/FinalCtaSection";
import ServiceCards from "./components/ServiceCards";
import LogoMarquee from "./components/LogoMarquee";
import Footer from "./components/Footer";
import TemplatesPage from "./components/TemplatesPage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "templates" | "about" | "blog" | "services" | "contact">("home");
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Check if hash matches templates list page, about us, or blog details
      if (hash.startsWith("#templates")) {
        setCurrentView("templates");
        setSelectedArticleSlug(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#about") {
        setCurrentView("about");
        setSelectedArticleSlug(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#services" || hash.startsWith("#services")) {
        setCurrentView("services");
        setSelectedArticleSlug(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#contact") {
        setCurrentView("contact");
        setSelectedArticleSlug(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#blog") {
        setCurrentView("blog");
        setSelectedArticleSlug(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash.startsWith("#blog/")) {
        setCurrentView("blog");
        setSelectedArticleSlug(hash.substring(6));
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentView("home");
        setSelectedArticleSlug(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // check initial hash
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-950 antialiased font-sans flex flex-col justify-between selection:bg-violet-100 selection:text-violet-900">
      <Navbar />
      
      <main className="flex-grow">
        {currentView === "templates" ? (
          <TemplatesPage />
        ) : currentView === "about" ? (
          <AboutPage />
        ) : currentView === "services" ? (
          <ServicesPage />
        ) : currentView === "contact" ? (
          <ContactPage />
        ) : currentView === "blog" ? (
          <BlogPage initialSlug={selectedArticleSlug} />
        ) : (
          <>
            {/* Full structural stack of the requested premium template and agency services landing screen */}
            <HeroSection />
            <ServiceCards />
            <LogoMarquee />
            <ServicesSection />
            <PortfolioSection />
            <WhyUsSection />
            <TestimonialsSection />
            <TemplatesAndFaqSection />
            <ContactSection />
            <FinalCtaSection />
          </>
        )}
      </main>

      {/* Professional Next.js Expert Agency Footer */}
      <Footer />
    </div>
  );
}

