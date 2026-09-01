import { motion } from "framer-motion";

export const ScoreRing = ({ value, size = 160, stroke = 10, sub = "/ 100" }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
      data-testid="score-ring"
      role="img"
      aria-label={`Score ${value} sur 100`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#EAE7E1" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="#7053cd"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: off }}
          transition={{ duration: 1.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono font-bold leading-none text-brand-ink" style={{ fontSize: size / 3.6 }}>
          {value}
        </span>
        <span className="mt-1 font-mono text-[10px] text-brand-mute">{sub}</span>
      </div>
    </div>
  );
};
