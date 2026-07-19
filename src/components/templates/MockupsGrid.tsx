import { motion } from "motion/react";
import { mockupProducts, MockupProduct } from "../../lib/mockupsData";
import { Smartphone, Monitor, Tablet, Laptop, Sparkles, ArrowUpRight } from "lucide-react";

const deviceIconMap: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-3.5 h-3.5" />,
  Desktop: <Monitor className="w-3.5 h-3.5" />,
  Monitor: <Monitor className="w-3.5 h-3.5" />,
  Tablet: <Tablet className="w-3.5 h-3.5" />,
  Mobile: <Smartphone className="w-3.5 h-3.5" />,
  Smartwatch: <Smartphone className="w-3.5 h-3.5" />,
};

function MockupCard({ product, index }: { product: MockupProduct; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: Math.min(index * 0.05, 0.3),
        duration: 0.4,
      }}
      className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden group cursor-pointer shadow-xs relative flex flex-col justify-between"
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
      onClick={() => {
        window.location.hash = `#templates/mockup/${product.id}`;
      }}
    >
      {/* Preview Image Area */}
      <div className="relative overflow-hidden bg-slate-50 shrink-0">
        <div className="w-full h-56 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 relative flex items-center justify-center">
          <div className="grid grid-cols-2 gap-2 p-6 w-full h-full">
            <div className="rounded-lg bg-gradient-to-br from-slate-900 to-zinc-800 flex items-end p-2.5 shadow-md">
              <span className="text-[7px] text-white/50 font-mono font-bold tracking-wider">LAPTOP</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-slate-800 to-zinc-900 flex items-end p-2.5 shadow-md">
              <span className="text-[7px] text-white/50 font-mono font-bold tracking-wider">MOBILE</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-zinc-100 to-white flex items-end p-2.5 shadow-md border border-gray-200">
              <span className="text-[7px] text-gray-400 font-mono font-bold tracking-wider">TABLET</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-stone-800 to-zinc-900 flex items-end p-2.5 shadow-md">
              <span className="text-[7px] text-white/50 font-mono font-bold tracking-wider">DESKTOP</span>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/35 backdrop-blur-xs flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="bg-white text-gray-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg">
              View Details
            </span>
          </div>
        </div>
      </div>

      {/* Card Info Body */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-extrabold text-base text-[#0a0a0a] tracking-tight group-hover:text-violet-600 transition-colors">
              {product.name}
            </h3>
            <span className="font-mono font-bold text-sm bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-lg text-violet-600">
              ${product.price}
            </span>
          </div>

          <p className="text-gray-400 font-mono text-[11px] mb-3 uppercase tracking-wider font-semibold">
            {product.promptCount} Prompts • {product.category}
          </p>

          <p className="text-gray-500 text-xs leading-relaxed mb-5 line-clamp-2 h-8">
            {product.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1 mb-4">
            {product.devices.slice(0, 4).map((device) => (
              <span
                key={device}
                className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-md"
              >
                {deviceIconMap[device] || null}
                {device}
              </span>
            ))}
            {product.devices.length > 4 && (
              <span className="bg-gray-100 text-gray-400 text-[10px] font-medium px-2 py-0.5 rounded-md">
                +{product.devices.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href={product.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: "#7c3aed", color: "#ffffff" }}
              className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-[#0a0a0a] font-bold text-xs py-3 rounded-xl transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              Buy Prompt Pack
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>

            <motion.div
              whileHover={{ backgroundColor: "#f4f4f5", borderColor: "#0a0a0a" }}
              className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-violet-600 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MockupsGrid() {
  return (
    <section id="mockups-grid" className="px-6 md:px-12 lg:px-20 py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-12 pb-5 border-b border-gray-100/60">
          <div>
            <h2 className="font-black text-3xl md:text-4xl text-[#0a0a0a] tracking-tight font-sans">
              AI Mockup Prompt Packs
            </h2>
            <p className="text-gray-400 text-xs mt-1 font-mono uppercase tracking-wider font-semibold">
              Photorealistic Device Mockups in Seconds
            </p>
          </div>
          <div className="text-xs text-gray-400 font-mono font-semibold">
            {mockupProducts.length} packs available
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockupProducts.map((product, index) => (
            <MockupCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
