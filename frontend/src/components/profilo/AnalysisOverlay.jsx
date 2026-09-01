import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const DEFAULT_STEPS = [
  "Lecture du CV",
  "Extraction des mots-clés",
  "Comparaison à l'offre",
  "Rédaction du rapport",
];

export const AnalysisOverlay = ({ onDone, title = "Notre IA lit votre CV…", steps = DEFAULT_STEPS, duration = 4800 }) => {
  const [step, setStep] = useState(0);
  const [tenth, setTenth] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => setStep((s) => Math.min(s + 1, steps.length)), duration / 4.4);
    const chrono = setInterval(() => setTenth((t) => t + 1), 100);
    const done = setTimeout(onDone, duration);
    return () => {
      clearInterval(stepTimer);
      clearInterval(chrono);
      clearTimeout(done);
    };
  }, [onDone, steps.length, duration]);

  const seconds = (tenth / 10).toFixed(1);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-cream/90 px-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-testid="analysis-overlay"
      role="status"
      aria-live="polite"
    >
      <div className="card-glow w-full max-w-md rounded-2xl border border-black/5 bg-white p-8">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow">Analyse en cours</p>
          <span className="font-mono text-sm text-brand-mute" data-testid="analysis-chrono">
            {seconds} s
          </span>
        </div>
        <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <ul className="mt-6 space-y-4">
          {steps.map((label, i) => {
            const done = i < step;
            const active = i === step;
            return (
              <li key={label} className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-300 ${
                    done
                      ? "border-brand-cyan bg-brand-cyan text-white"
                      : active
                        ? "border-brand-violet text-brand-violet"
                        : "border-black/10 text-brand-mute/40"
                  }`}
                >
                  {done ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : active ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <span className="font-mono text-[10px]">{i + 1}</span>
                  )}
                </span>
                <span className={`text-sm ${done || active ? "text-brand-ink" : "text-brand-mute/50"}`}>
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mt-7 h-1 overflow-hidden rounded-full bg-black/8">
          <motion.div
            className="h-full rounded-full bg-brand-violet"
            initial={{ width: "4%" }}
            animate={{ width: "96%" }}
            transition={{ duration: 4.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};
