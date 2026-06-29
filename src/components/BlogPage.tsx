import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  Tag, 
  ChevronRight, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Mail,
  ThumbsUp,
  Award,
  Link as LinkIcon
} from "lucide-react";
import { BLOG_ARTICLES, BlogArticle } from "../data/blogData";

interface BlogPageProps {
  initialSlug?: string | null;
}

export default function BlogPage({ initialSlug }: BlogPageProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [articleLikes, setArticleLikes] = useState<Record<string, number>>({});

  // Sync state if initialSlug changes externally (e.g. from routing)
  useEffect(() => {
    setSelectedSlug(initialSlug || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [initialSlug]);

  const handleArticleClick = (slug: string) => {
    window.location.hash = `#blog/${slug}`;
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToListing = () => {
    window.location.hash = "#blog";
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLike = (articleId: string) => {
    setArticleLikes(prev => ({
      ...prev,
      [articleId]: (prev[articleId] || 0) + 1
    }));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsNewsletterSubscribed(true);
    setEmailInput("");
    setTimeout(() => setIsNewsletterSubscribed(false), 5000);
  };

  // Find active article
  const activeArticle = BLOG_ARTICLES.find(art => art.slug === selectedSlug);

  // Filter listings
  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Design & UX", "SEO & Speed", "Development"];

  // Related articles selector (articles excluding current active one)
  const relatedArticles = activeArticle 
    ? BLOG_ARTICLES.filter(art => art.id !== activeArticle.id).slice(0, 2)
    : [];

  // SEO Schema dynamic Injection
  useEffect(() => {
    if (activeArticle) {
      // 1. Dynamic document title & meta description update
      document.title = activeArticle.seoTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", activeArticle.seoDescription);
      }

      // 2. Generate JSON-LD Schema
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": activeArticle.title,
        "image": [activeArticle.featuredImage],
        "datePublished": "2026-06-24T12:00:00+00:00",
        "dateModified": "2026-06-24T12:00:00+00:00",
        "author": [{
          "@type": "Person",
          "name": activeArticle.author.name,
          "jobTitle": activeArticle.author.role,
          "url": activeArticle.canonicalUrl
        }]
      };

      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": activeArticle.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nextcraft.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://nextcraft.com/#blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": activeArticle.title,
            "item": activeArticle.canonicalUrl
          }
        ]
      };

      // Inject schemas into DOM
      const scriptId = "blog-injected-schema";
      let scriptTag = document.getElementById(scriptId);
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        scriptTag.id = scriptId;
        document.head.appendChild(scriptTag);
      }
      scriptTag.innerHTML = JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]);

      return () => {
        // Reset document metadata on unmount / change
        document.title = "FrameLab | Elite Web Design & Next.js Agency";
        const schemaToRemove = document.getElementById(scriptId);
        if (schemaToRemove) schemaToRemove.remove();
      };
    } else {
      document.title = "FrameLab Insights | Web Design, SEO & Conversion Optimization Blog";
    }
  }, [selectedSlug, activeArticle]);

  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen pt-24 pb-12 selection:bg-violet-100 selection:text-violet-900">
      
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] right-5 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* ARTICLE READER VIEW */}
      {activeArticle ? (
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumb row & Back button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
            <button 
              onClick={handleBackToListing}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-950 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </button>
            
            <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
              <a href="#" className="hover:text-gray-600">Home</a>
              <ChevronRight className="w-3 h-3" />
              <button onClick={handleBackToListing} className="hover:text-gray-600">Blog</button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-xs">{activeArticle.title}</span>
            </div>
          </div>

          {/* Article Header Details */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-xs font-bold tracking-wider uppercase rounded-full mb-4">
              {activeArticle.category}
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-gray-950 mt-2 mb-6 leading-tight">
              {activeArticle.title}
            </h1>

            {/* Author details card */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2.5">
                <img 
                  src={activeArticle.author.avatar} 
                  alt={activeArticle.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-gray-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-gray-950">{activeArticle.author.name}</div>
                  <div className="text-[11px] text-gray-400">{activeArticle.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-gray-400" />
                {activeArticle.date}
              </div>

              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-gray-400" />
                {activeArticle.readTime}
              </div>
            </div>
          </div>

          {/* Featured Header Image */}
          <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl mb-16 border border-gray-100">
            <img 
              src={activeArticle.featuredImage} 
              alt={activeArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Core Layout (Grid with right side rail of key takeaways/TOC) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Left Main Content Pillar */}
            <div className="lg:col-span-8">
              
              {/* Table of contents inside mobile view */}
              <div className="block lg:hidden bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet-600" />
                  Table of Contents
                </h4>
                <ul className="space-y-2">
                  {activeArticle.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a 
                        href={`#${toc.id}`} 
                        className="text-sm font-semibold text-violet-600 hover:text-violet-800 flex items-center gap-1.5"
                      >
                        {toc.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Injected HTML Body Content */}
              <div 
                className="prose prose-violet max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              {/* Key Takeaways Card */}
              <div className="bg-violet-50/50 border border-violet-100 p-8 rounded-3xl mb-12">
                <h3 className="text-lg font-sans font-black text-violet-950 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                  Key Takeaways
                </h3>
                <ul className="space-y-3">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Accordion Component */}
              <div className="border-t border-gray-100 pt-10 mb-12">
                <h3 className="text-xl font-sans font-black text-gray-950 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {activeArticle.faq.map((faqItem, idx) => (
                    <div 
                      key={idx}
                      className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm"
                    >
                      <h4 className="font-sans font-bold text-gray-900 text-sm mb-2">
                        {faqItem.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {faqItem.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Likes and sharing panel */}
              <div className="flex items-center justify-between gap-6 py-6 border-y border-gray-100 mb-12">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleLike(activeArticle.id)}
                    className="inline-flex items-center gap-2 bg-gray-50 hover:bg-violet-50 text-gray-700 hover:text-violet-700 px-4 py-2.5 rounded-full text-xs font-semibold border border-gray-100 transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Helpful ({articleLikes[activeArticle.id] || 8})
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2.5 rounded-full text-xs font-semibold border border-gray-100 transition-colors cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <LinkIcon className="w-4 h-4" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Author Biography Footer Card */}
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img 
                  src={activeArticle.author.avatar} 
                  alt={activeArticle.author.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-600">
                    Written by Author
                  </span>
                  <h4 className="text-base font-sans font-black text-gray-950 mt-0.5 mb-2">
                    {activeArticle.author.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {activeArticle.author.bio}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Side Sticky Navigation Rail */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8 hidden lg:block">
              
              {/* Sticky TOC */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet-600" />
                  Table of Contents
                </h4>
                <ul className="space-y-3.5">
                  {activeArticle.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a 
                        href={`#${toc.id}`} 
                        className="text-xs font-bold text-gray-600 hover:text-violet-600 flex items-center gap-1.5 transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                        {toc.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sticky Newsletter Sign up widget */}
              <div className="bg-[#0a0a0a] text-white rounded-3xl p-6 relative overflow-hidden shadow-xl border border-gray-800">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans font-black text-base mb-1">
                    Stay Ahead of Rivals
                  </h4>
                  <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                    Get award-winning conversion methods, Next.js optimization layouts, and SEO ranking strategies directly in your inbox.
                  </p>

                  {isNewsletterSubscribed ? (
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-center text-xs font-semibold">
                      Successfully Subscribed!
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="space-y-2">
                      <input 
                        type="email" 
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter email address"
                        className="w-full bg-gray-900 border border-gray-800 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                      />
                      <button 
                        type="submit"
                        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* RELATED ARTICLES SYSTEM SECTION */}
          <div className="mt-24 border-t border-gray-100 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="text-violet-600 font-mono text-xs uppercase tracking-wider font-bold">
                  Recommended Reading
                </span>
                <h3 className="text-2xl font-sans font-black text-gray-950 mt-1">
                  Continue Elevating Your Brand
                </h3>
              </div>
              <button 
                onClick={handleBackToListing}
                className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-950 transition-colors"
              >
                Browse All Guides
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => handleArticleClick(article.slug)}
                  className="group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden relative bg-gray-100">
                    <img 
                      src={article.featuredImage} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-950 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2 font-medium">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="font-sans font-bold text-base text-gray-950 group-hover:text-violet-600 transition-colors mb-2 leading-tight">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-violet-600 mt-4 group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </article>
      ) : (
        /* BLOG LISTING DASHBOARD */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-50 text-violet-700 text-xs font-bold tracking-wider uppercase rounded-full w-fit mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              FrameLab Insights
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-gray-950 mt-2 mb-4 leading-none">
              Insights, Strategies & <span className="text-violet-600">Growth Guides.</span>
            </h1>
            
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Actionable web design, conversion architecture, and high-performance React optimization tutorials built for elite scaling startups.
            </p>
          </div>

          {/* Search bar & Category filter Row */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12 bg-gray-50 border border-gray-100 p-4 rounded-3xl">
            
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === cat 
                      ? "bg-[#0a0a0a] text-white shadow-sm" 
                      : "bg-white text-gray-600 hover:text-gray-950 border border-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <span className="absolute inset-y-0 left-3.5 flex items-center justify-center text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 shadow-sm"
              />
            </div>

          </div>

          {/* FEATURED ARTICLES SYSTEM */}
          {searchQuery === "" && selectedCategory === "All" && BLOG_ARTICLES.length > 0 && (
            <div 
              onClick={() => handleArticleClick(BLOG_ARTICLES[0].slug)}
              className="group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
            >
              <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[21/10] lg:aspect-auto rounded-2xl overflow-hidden bg-gray-100 relative">
                <img 
                  src={BLOG_ARTICLES[0].featuredImage} 
                  alt={BLOG_ARTICLES[0].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#0a0a0a] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                  Featured Resource
                </span>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div className="space-y-4">
                  <span className="text-xs font-bold font-mono text-violet-600 uppercase tracking-wide">
                    {BLOG_ARTICLES[0].category}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-sans font-black text-gray-950 leading-tight group-hover:text-violet-600 transition-colors">
                    {BLOG_ARTICLES[0].title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {BLOG_ARTICLES[0].excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-gray-500">
                    <img 
                      src={BLOG_ARTICLES[0].author.avatar} 
                      alt="Author" 
                      className="w-8 h-8 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-bold text-gray-950">{BLOG_ARTICLES[0].author.name}</span>
                    <span>•</span>
                    <span>{BLOG_ARTICLES[0].date}</span>
                  </div>
                  
                  <span className="w-9 h-9 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* LATEST ARTICLES MATRIX */}
          <div>
            <h3 className="font-sans font-black text-xl text-gray-950 mb-8">
              {searchQuery !== "" || selectedCategory !== "All" ? "Search Results" : "Latest Insights & Guides"}
            </h3>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100">
                <span className="text-sm font-semibold text-gray-400">No guides match your search specifications.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <div 
                    key={article.id}
                    onClick={() => handleArticleClick(article.slug)}
                    className="group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative bg-gray-100">
                      <img 
                        src={article.featuredImage} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-950 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-2.5 text-[10px] sm:text-xs text-gray-400 mb-3 font-medium">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        
                        <h4 className="font-sans font-bold text-base text-gray-950 group-hover:text-violet-600 transition-colors mb-2 leading-tight line-clamp-2">
                          {article.title}
                        </h4>
                        
                        <p className="text-xs text-gray-500 line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-6">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <img 
                            src={article.author.avatar} 
                            alt="Author" 
                            className="w-6 h-6 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="font-semibold text-gray-800">{article.author.name}</span>
                        </div>
                        <span className="text-xs font-bold text-violet-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read Guide
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* NEWSLETTER CTA BOX */}
          <div className="mt-24 relative rounded-3xl overflow-hidden bg-[#0a0a0a] text-white p-8 md:p-12 shadow-xl border border-gray-800">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                Weekly Insights Letter
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-sans font-black tracking-tight leading-none">
                Subscribe for Conversion & Next.js Growth Strategies
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                Join startups reading FrameLab insights to optimize core Web vitals, design landing components, and boost search rankings. No spam, ever.
              </p>

              {isNewsletterSubscribed ? (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl text-xs font-bold min-w-[200px] mt-2">
                  Thanks for subscribing! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md mt-2">
                  <input 
                    type="email" 
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter business email address"
                    className="flex-grow bg-gray-900 border border-gray-800 px-4 py-3 rounded-2xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                  />
                  <button 
                    type="submit"
                    className="bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>

        </section>
      )}

    </div>
  );
}
