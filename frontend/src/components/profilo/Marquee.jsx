import { Asterisk } from "lucide-react";

export const Marquee = ({ items }) => (
  <div className="overflow-hidden border-y border-black/5 bg-white/70 py-4" data-testid="social-proof-marquee" aria-hidden="true">
    <div className="marquee-track flex w-max items-center gap-10 pr-10">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-4 whitespace-nowrap text-sm text-brand-mute">
          <Asterisk className="h-4 w-4 text-brand-violet" />
          {item}
        </span>
      ))}
    </div>
  </div>
);
