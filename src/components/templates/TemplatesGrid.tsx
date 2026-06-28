import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { templates, categories, styles } from "../../lib/templatesData";
import TemplateCard from "./TemplateCard";

export default function TemplatesGrid() {
  // Sidebar and Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [freeOnly, setFreeOnly] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false); // Mobile Drawer Toggle

  // Reset all filters at once
  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedStyles([]);
    setFreeOnly(false);
  };

  // Toggle Category
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((item) => item !== cat) : [...prev, cat]
    );
  };

  // Toggle Style
  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((item) => item !== style) : [...prev, style]
    );
  };

  // Filter Logic matching Search, Categories (OR), Styles (OR), and FreeOnly
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // 1. Search filter: matches name, category, or tags
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = template.name.toLowerCase().includes(query);
        const matchesCategory = template.category.toLowerCase().includes(query);
        const matchesTag = template.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesName && !matchesCategory && !matchesTag) {
          return false;
        }
      }

      // 2. Multi-category filter (OR logic if multiple selected)
      if (selectedCategories.length > 0 && !selectedCategories.includes(template.category)) {
        return false;
      }

      // 3. Multi-style filter (OR logic if multiple selected)
      if (selectedStyles.length > 0 && !template.style.some((s) => selectedStyles.includes(s))) {
        return false;
      }

      // 4. Free only trigger
      if (freeOnly && !template.isFree) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategories, selectedStyles, freeOnly]);

  // Aggregate active filter counts to display badges
  const activeFilterCount =
    (searchQuery ? 1 : 0) +
    selectedCategories.length +
    selectedStyles.length +
    (freeOnly ? 1 : 0);

  // Reusable Search and filter JSX for desktop layout or mobile drawer
  const FilterContent = () => (
    <div className="flex flex-col gap-7">
      
      {/* Reset Triggers */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 className="font-extrabold text-sm text-[#0a0a0a] uppercase tracking-wider font-sans">
          Refine Results
        </h3>
        {activeFilterCount > 0 && (
          <button
            onClick={handleReset}
            className="text-orange-500 hover:text-orange-600 font-bold text-xs select-none cursor-pointer transition-colors"
          >
            Reset All ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Dynamic Native Lookup */}
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for templates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 text-xs font-medium rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 text-gray-950 focus:outline-none focus:ring-3 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all font-sans"
        />
      </div>

      {/* Category Checkboxes Section */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <h4 className="font-extrabold text-xs text-[#0a0a0a] uppercase tracking-wider font-mono">
            Category
          </h4>
          {selectedCategories.length > 0 && (
            <button
              onClick={() => setSelectedCategories([])}
              className="text-orange-500 font-bold text-[10px] uppercase tracking-wider hover:text-orange-600"
            >
              Clear
            </button>
          )}
        </div>
        
        {/* Scrollable list of categories */}
        <div className="space-y-3 max-h-56 overflow-y-auto pr-1.5 custom-scrollbar select-none">
          {categories.map((cat) => {
            const isActive = selectedCategories.includes(cat);
            return (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer group py-0.5"
              >
                {/* Custom designed visual checklist */}
                <div
                  onClick={() => toggleCategory(cat)}
                  className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#4f46e5] border-[#4f46e5] shadow-xs"
                      : "border-gray-200 bg-white group-hover:border-gray-400"
                  }`}
                >
                  {isActive && (
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>

                <span
                  className={`text-xs font-sans transition-colors duration-150 ${
                    isActive ? "text-[#0a0a0a] font-bold" : "text-gray-500 group-hover:text-[#0a0a0a]"
                  }`}
                >
                  {cat}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Style Filters Section */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <h4 className="font-extrabold text-xs text-[#0a0a0a] uppercase tracking-wider font-mono">
            Visual Style
          </h4>
          {selectedStyles.length > 0 && (
            <button
              onClick={() => setSelectedStyles([])}
              className="text-orange-500 font-bold text-[10px] uppercase tracking-wider hover:text-orange-600"
            >
              Clear
            </button>
          )}
        </div>

        <div className="space-y-3 select-none">
          {styles.map((style) => {
            const isActive = selectedStyles.includes(style);
            return (
              <label
                key={style}
                className="flex items-center gap-3 cursor-pointer group py-0.5"
              >
                <div
                  onClick={() => toggleStyle(style)}
                  className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#4f46e5] border-[#4f46e5] shadow-xs"
                      : "border-gray-200 bg-white group-hover:border-gray-400"
                  }`}
                >
                  {isActive && (
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-xs font-sans transition-colors duration-150 ${
                    isActive ? "text-[#0a0a0a] font-bold" : "text-gray-500 group-hover:text-[#0a0a0a]"
                  }`}
                >
                  {style}
                </span>
              </label>
            );
          })}
        </div>
      </div>

    </div>
  );

  return (
    <section id="templates-grid" className="px-6 md:px-12 lg:px-20 py-24 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-10 items-start">
          
          {/* LEFT SIDEBAR — FILTER PANEL (Desktop only) */}
          <aside className="w-[230px] flex-shrink-0 sticky top-24 self-start hidden lg:block">
            <FilterContent />
          </aside>

          {/* RIGHT PANEL — GRID AREA */}
          <div className="flex-1 min-w-0">
            
            {/* Grid title & controls header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8 pb-5 border-b border-gray-100/60">
              <div>
                <h2 className="font-black text-3xl md:text-4xl text-[#0a0a0a] tracking-tight font-sans">
                  Choose Your Template
                </h2>
                <p className="text-gray-400 text-xs mt-1 font-mono uppercase tracking-wider font-semibold">
                  SaaS Boilerplates & Bespoke Layouts
                </p>
              </div>

              {/* Free Only Custom Toggle Switch Accent */}
              <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                <span className="text-sm font-semibold text-gray-400 font-sans">Free only</span>
                
                {/* Custom Toggle Box */}
                <button
                  onClick={() => setFreeOnly(!freeOnly)}
                  className={`relative w-12 h-6.5 rounded-full transition-colors duration-300 pointer-events-auto cursor-pointer focus:outline-none ${
                    freeOnly ? "bg-[#4f46e5]" : "bg-gray-200"
                  }`}
                  aria-label="Filter free templates"
                  role="switch"
                  aria-checked={freeOnly}
                >
                  <motion.div
                    className="absolute top-1 left-1 w-4.5 h-4.5 bg-white rounded-full shadow-sm"
                    animate={{ x: freeOnly ? 22 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </div>

            {/* Mobile filter buttons block */}
            <div className="lg:hidden flex items-center justify-between gap-4 mb-8">
              <button
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-2.5 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold text-[#0a0a0a] bg-white shadow-xs hover:bg-gray-50 active:scale-97 transition-all cursor-pointer font-sans"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="8" y1="12" x2="20" y2="12" />
                  <line x1="12" y1="18" x2="20" y2="18" />
                </svg>
                Filter Templates
                {activeFilterCount > 0 && (
                  <span className="bg-[#4f46e5] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <div className="text-xs text-gray-400 font-mono font-semibold">
                {filteredTemplates.length} matches
              </div>
            </div>

            {/* Results Counters information banner */}
            {(selectedCategories.length > 0 || selectedStyles.length > 0 || searchQuery || freeOnly) && (
              <p className="text-sm text-gray-500 mb-6 font-medium">
                Found <span className="text-[#0a0a0a] font-extrabold">{filteredTemplates.length}</span> template{filteredTemplates.length !== 1 ? "s" : ""} matching your selection.
              </p>
            )}

            {/* Staggered layout and empty list screens handler */}
            <AnimatePresence mode="popLayout">
              {filteredTemplates.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  layout
                >
                  {filteredTemplates.map((template, index) => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="w-full text-center py-20 border border-dashed border-gray-200 rounded-3xl p-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-gray-400 font-bold text-lg mb-2 font-sans">
                    No matching templates found
                  </p>
                  <p className="text-gray-400 text-xs max-w-sm mx-auto mb-6">
                    Try typing something else, toggling off "Free only", or resetting categories to discover all available premium resources.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-sm transition-all shadow-indigo-600/15"
                  >
                    Reset All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>

      {/* MOBILE FLYOUT DRAWER FOR FILTERS */}
      <AnimatePresence>
        {filterOpen && (
          <>
            {/* Dark glassy responsive backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-xs z-50 lg:hidden"
            />

            {/* Drawer side panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white z-55 lg:hidden p-6 overflow-y-auto shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-extrabold text-base text-gray-900 font-sans uppercase tracking-wider">
                    Filters
                  </h3>
                  {/* Close button with simple SVG */}
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-gray-400 hover:text-gray-800 p-2 cursor-pointer"
                    aria-label="Close filters"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <FilterContent />
              </div>

              {/* Apply & Close actions inside drawer */}
              <button
                onClick={() => setFilterOpen(false)}
                className="w-full bg-[#0a0a0a] text-white font-bold py-3.5 rounded-xl text-xs mt-8 absolute.bottom-6 select-none cursor-pointer hover:bg-gray-900 transition-colors"
              >
                Apply Filters ({filteredTemplates.length} matches)
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
