"use client";

import { motion } from "motion/react";

export function GrowthGraph() {
  return (
    <div id="cta_abstract_data_growth_visualization" className="relative w-full h-[250px] sm:h-[280px] lg:h-full flex items-center justify-center select-none select-none pointer-events-none">
      <svg 
        viewBox="0 0 400 250" 
        className="w-full h-full max-w-[420px] lg:max-w-none"
        id="abstract_curve_svg_surface"
      >
        {/* Background dark dots grid (8 rows, 10 columns) */}
        <g id="svg_background_dot_grid">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 43 + 12}
                cy={row * 33 + 12}
                r="1.5"
                fill="#333333"
                opacity="0.6"
              />
            ))
          )}
        </g>

        {/* Main growth continuous upward Bezier curve vector */}
        <motion.path
          className="growth-line"
          d="M 20 200 C 80 195, 100 180, 140 160 S 200 130, 240 100 S 300 60, 360 30"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Highlighted key numeric node data dots */}
        {[
          { cx: 20, cy: 200 },
          { cx: 100, cy: 175 },
          { cx: 180, cy: 140 },
          { cx: 260, cy: 95 },
          { cx: 360, cy: 30 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            className="graph-dot"
            cx={point.cx}
            cy={point.cy}
            r="4.5"
            fill="#ffffff"
            stroke="#0a0a0a"
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
          />
        ))}

        {/* Floating "2x Growth" Badge overlay relative to peak inflection curve coordinates */}
        <motion.g
          id="visuals_growth_badge"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* Accent rectangular badge frame with subtle gray outline */}
          <rect x="270" y="5" width="120" height="30" rx="15" fill="#161618" stroke="#333333" strokeWidth="1" />
          
          {/* Badge decorative add symbol */}
          <text x="288" y="24" fill="#a78bfa" fontSize="13" fontWeight="900" fontFamily="sans-serif">+</text>
          
          {/* Accent Badge title typography */}
          <text x="302" y="24" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif">
            2x Growth
          </text>
        </motion.g>

        {/* Brand square stylized mini console box emblem */}
        <motion.g
          id="branding_inflection_cube"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.4, ease: "backOut" }}
        >
          <rect x="215" y="83" width="32" height="32" rx="6" fill="#161618" stroke="#333333" strokeWidth="1" />
          <text x="231" y="103" fill="white" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">N</text>
        </motion.g>

        {/* Animated peak pointer indicator arrow cursor */}
        <motion.g
          className="graph-cursor"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          {/* High-fidelity cursor path arrow icon points at (360, 30) */}
          <path
            d="M 370 20 L 358 42 L 364 39 L 368 48 L 371 47 L 367 38 L 374 36 Z"
            fill="white"
            stroke="#0a0a0a"
            strokeWidth="0.5"
          />
        </motion.g>

      </svg>
    </div>
  );
}
