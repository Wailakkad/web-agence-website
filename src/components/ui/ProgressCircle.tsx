interface ProgressCircleProps {
  percentage: number;
  label: string;
  id: string;
}

export const ProgressCircle = ({ percentage, label, id }: ProgressCircleProps) => {
  return (
    <div className="flex flex-col items-center flex-1" id={`progress_circle_wrapper_${id}`}>
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-gray-100/70 fill-none"
            strokeWidth="8"
          />
          {/* Animated Foreground Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-[#22c55e] fill-none progress-circle"
            data-target-offset={Math.round(283 * (1 - percentage / 100))}
            strokeWidth="8"
            strokeDasharray="283"
            strokeDashoffset="283"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xs sm:text-sm font-black text-gray-900">{percentage}%</span>
      </div>
      <span className="text-[10px] uppercase font-mono font-bold text-gray-400 mt-2 text-center leading-none tracking-tight">
        {label}
      </span>
    </div>
  );
};
