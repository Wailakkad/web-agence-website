import { useEffect, MouseEvent } from "react";
import { motion } from "motion/react";
import { MockupProduct, mockupProducts } from "../../lib/mockupsData";
import { ArrowUpLeft, ArrowUpRight, Check, Sparkles, ShoppingCart, Smartphone, Monitor, Tablet, Laptop } from "lucide-react";

interface MockupDetailPageProps {
  product: MockupProduct;
}

const deviceIconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-4 h-4" />,
  Desktop: <Monitor className="w-4 h-4" />,
  Monitor: <Monitor className="w-4 h-4" />,
  Tablet: <Tablet className="w-4 h-4" />,
  Mobile: <Smartphone className="w-4 h-4" />,
  Smartwatch: <Smartphone className="w-4 h-4" />,
};

export default function MockupDetailPage({ product }: MockupDetailPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [product.id]);

  const navigateBack = (e: MouseEvent) => {
    e.preventDefault();
    window.location.hash = "templates";
  };

  return (
    <div className="bg-white min-h-screen text-gray-950 text-left antialiased">
      {/* HERO SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white border-b border-gray-100 select-none">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono font-bold uppercase tracking-wider">
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ""; }} className="hover:text-[#0a0a0a] transition-colors">Home</a>
            <span>/</span>
            <a href="#templates" onClick={navigateBack} className="hover:text-[#0a0a0a] transition-colors">Store</a>
            <span>/</span>
            <span className="text-[#0a0a0a] underline decoration-violet-500 decoration-2 underline-offset-4">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div className="lg:col-span-3 text-left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block bg-violet-50 border border-violet-100 text-violet-700 text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-sm shadow-xs">
                  {product.category}
                </span>
                <span className="text-gray-400 text-xs font-semibold font-mono">{product.promptCount} Prompts</span>
              </div>

              <h1 className="font-black text-3xl md:text-4xl lg:text-5xl text-[#0a0a0a] leading-tight tracking-tight mb-5">
                {product.name}
              </h1>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium">
                {product.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {product.devices.map((device) => (
                  <span key={device} className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200">
                    {deviceIconMap[device]}
                    {device}
                  </span>
                ))}
              </div>

              <div className="mb-10">
                <span className="text-[10px] text-gray-400 uppercase font-mono font-black tracking-widest block mb-3">Compatible Platforms</span>
                <div className="flex flex-wrap gap-2.5">
                  {product.techStack.map(tech => (
                    <span key={tech} className="bg-gray-50 text-gray-700 text-xs font-semibold px-3 py-1 rounded-lg border border-gray-200">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <motion.a
                  href={product.buyUrl}
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 bg-violet-600 text-white font-bold px-8 py-4.5 rounded-xl text-sm md:text-base hover:bg-violet-700 transition-all cursor-pointer shadow-lg shadow-violet-600/10 text-center"
                >
                  Buy Now — ${product.price}
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={3} />
                </motion.a>
                <button onClick={navigateBack} className="inline-flex items-center justify-center gap-2 text-xs font-bold text-gray-400 hover:text-[#0a0a0a] transition-colors py-3 px-5 border border-transparent hover:border-gray-200 rounded-xl">
                  <ArrowUpLeft className="w-4 h-4" />
                  Back to store
                </button>
              </div>
            </motion.div>

            {/* PURCHASE CARD */}
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
              <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-xs sticky top-24 select-none">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] bg-violet-50 border border-violet-100 text-violet-700 font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">AI Prompt License</span>
                  <span className="text-gray-400 text-xs font-semibold font-mono">Format: TXT + PDF</span>
                </div>

                <div className="space-y-3.5 mb-7">
                  {[
                    "One-time Payment",
                    "Instant Digital Download",
                    "500+ Tested Prompts",
                    "Commercial Use License",
                    "Free Lifetime Updates",
                    "Works with All AI Platforms"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-violet-600" strokeWidth={3.5} />
                      </div>
                      <span className="text-xs md:text-sm text-[#0a0a0a] font-semibold font-sans">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                <div className="flex items-center justify-between bg-violet-50 border border-violet-100 rounded-xl px-4 py-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded bg-violet-600 flex items-center justify-center text-white">
                      <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-semibold text-[#0a0a0a]">AI Prompt Engineering</span>
                  </div>
                  <span className="text-xs font-black text-violet-600 uppercase bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-md">Included</span>
                </div>

                <motion.a
                  href={product.buyUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, backgroundColor: "#6d28d9" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between w-full bg-violet-600 text-white font-bold px-5 py-4 rounded-xl transition-colors duration-200 group cursor-pointer text-center"
                >
                  <div className="flex items-center gap-3 text-left">
                    <ShoppingCart className="w-4.5 h-4.5 text-white stroke-2" />
                    <span className="text-xs sm:text-sm tracking-wide">Get This Pack</span>
                  </div>
                  <span className="font-mono font-black text-sm sm:text-base">${product.price} USD</span>
                </motion.a>

                <p className="text-center text-[10.5px] text-gray-400 mt-4 leading-normal font-sans">
                  🔒 Secure payment · Instant download · Free updates
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTIONS */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50/30 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-10">
              {product.sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <h3 className="font-black text-lg text-[#0a0a0a] mb-3">{section.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs sticky top-24">
                <h4 className="font-black text-sm text-[#0a0a0a] mb-4 uppercase tracking-wider">What's Included</h4>
                <ul className="space-y-3">
                  {product.whatsIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-2xl md:text-3xl text-[#0a0a0a] tracking-tight mb-10 text-center">Everything You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-violet-600" strokeWidth={3.5} />
                </div>
                <span className="text-xs font-semibold text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-2xl md:text-3xl text-[#0a0a0a] tracking-tight mb-10">Related Prompt Packs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockupProducts
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer group hover:shadow-md transition-all"
                  onClick={() => { window.location.hash = `#templates/mockup/${related.id}`; }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-violet-600 uppercase tracking-wider">{related.category}</span>
                    <span className="font-mono font-bold text-sm text-violet-600">${related.price}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#0a0a0a] group-hover:text-violet-600 transition-colors mb-2">{related.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{related.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
