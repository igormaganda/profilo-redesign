const STEPS = ["Analyser", "Comprendre", "Choisir", "Télécharger"];

export const JourneyProgress = ({ current = 2 }) => (
  <div className="border-b border-black/5 bg-brand-cream/85" data-testid="journey-progress">
    <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
      <div className="flex items-center gap-2 md:gap-4">
        {STEPS.map((label, i) => {
          const n = i + 1;
          const done = n < current;
          const active = n === current;
          return (
            <div key={label} className="flex flex-1 items-center gap-2 md:gap-3">
              <span
                className={`font-mono text-[10px] md:text-xs ${
                  active ? "text-brand-violet" : done ? "text-brand-cyan" : "text-brand-mute/50"
                }`}
              >
                {String(n).padStart(2, "0")}
              </span>
              <span
                className={`whitespace-nowrap text-xs md:text-sm ${
                  active ? "font-medium text-brand-ink" : done ? "text-brand-mute" : "text-brand-mute/50"
                } ${active ? "" : "hidden sm:inline"}`}
              >
                {label}
              </span>
              <div className="h-px flex-1 overflow-hidden rounded-full bg-black/8">
                <div
                  className={`h-full rounded-full transition-[width] duration-700 ${
                    done ? "w-full bg-brand-cyan" : active ? "w-1/2 bg-brand-violet" : "w-0"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
