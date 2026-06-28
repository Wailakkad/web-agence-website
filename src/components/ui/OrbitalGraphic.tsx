export interface OrbitItem {
  label: string;
  color: string;
  letter: string;
  angle: number;
  radius: number;
  textColorClass: string;
}

const ORBIT_ITEMS: OrbitItem[] = [
  { label: "React", color: "#61dafb", letter: "R", angle: 180, radius: 88, textColorClass: "text-[#14b8a6]" }, // left
  { label: "Figma", color: "#f24e1e", letter: "F", angle: 232, radius: 88, textColorClass: "text-[#f43f5e]" }, // bottom-left  
  { label: "Next.js", color: "#000000", letter: "N", angle: 270, radius: 88, textColorClass: "text-black" },   // bottom
  { label: "TypeScript", color: "#3178c6", letter: "TS", angle: 308, radius: 88, textColorClass: "text-[#2563eb]" }, // bottom-right
  { label: "Tailwind", color: "#38bdf8", letter: "TW", angle: 0, radius: 88, textColorClass: "text-[#06b6d4]" },   // right
];

// Calculate x, y offset based on angle & radius
const getOrbitPosition = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
};

export function OrbitalGraphic() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 select-none my-6 pointer-events-none">
      
      {/* Outer circle - large, light gray */}
      <div className="w-48 h-48 rounded-full border border-gray-200/80 absolute" />
      
      {/* Inner circle - medium */}
      <div className="w-32 h-32 rounded-full border border-gray-200/80 absolute" />
      
      {/* Crosshair lines (horizontal + vertical through center) */}
      <div className="absolute w-48 h-px bg-gray-155" />
      <div className="absolute w-px h-48 bg-gray-155" />
      
      {/* Center brand circle - black */}
      <div className="w-14 h-14 rounded-full bg-[#0a0a0a] flex items-center justify-center z-10 shadow-lg border border-neutral-800">
        <span className="text-white font-black text-lg">N</span>
      </div>

      {/* Orbit ring rotating container */}
      <div className="orbit-ring absolute w-full h-full top-0 left-0">
        {ORBIT_ITEMS.map((item, index) => {
          const pos = getOrbitPosition(item.angle, item.radius);
          return (
            <div
              key={`${item.label}_${index}`}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
              }}
            >
              {/* Inner counter-rotating container */}
              <div className="orbit-logo-inner w-10 h-10 rounded-full bg-white border border-gray-200/90 shadow-sm flex items-center justify-center">
                <span className={`font-black text-sm ${item.textColorClass}`}>
                  {item.letter}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
