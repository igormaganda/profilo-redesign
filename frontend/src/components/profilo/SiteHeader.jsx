import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

export const Logo = () => (
  <Link to="/" data-testid="logo-link" className="font-heading text-xl font-semibold tracking-tight text-brand-ink">
    Profilo<span className="text-brand-violet">.</span>
  </Link>
);

export const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("profilo-theme") === "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("profilo-theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-pressed={dark}
      aria-label={dark ? "Passer au thème clair" : "Passer au thème sombre"}
      data-testid="theme-toggle"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-brand-mute transition-colors duration-200 hover:border-brand-violet/40 hover:text-brand-violet"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

const NAV = [
  { to: "/", label: "Accueil", end: true },
  { to: "/linkedin", label: "Audit LinkedIn" },
  { to: "/ats", label: "Optimisation CV" },
  { to: "/bundle", label: "Promotion" },
];

export const SiteHeader = ({ children, nav = false }) => (
  <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cream/85 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
      <Logo />
      {nav && (
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-[-0.005em] transition-colors duration-200 hover:text-brand-ink ${
                  isActive ? "text-brand-violet" : "text-brand-mute"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
      <div className="flex items-center gap-3">
        {children}
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export const SiteFooter = () => (
  <footer className="border-t border-black/5 bg-white/60">
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-brand-mute">
            Audit IA de votre profil LinkedIn et optimisation de CV pour ATS. Deux outils complémentaires pour
            booster votre visibilité auprès des recruteurs.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-mute">Produit</span>
            <Link to="/linkedin" className="text-brand-mute transition-colors duration-200 hover:text-brand-ink">Audit LinkedIn</Link>
            <Link to="/ats" className="text-brand-mute transition-colors duration-200 hover:text-brand-ink">Optimisation CV</Link>
            <Link to="/bundle" className="text-brand-mute transition-colors duration-200 hover:text-brand-ink">Promotion -21 %</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-mute">Exemples</span>
            <Link to="/audit-b" className="text-brand-mute transition-colors duration-200 hover:text-brand-ink">Rapport ATS — Studio</Link>
            <Link to="/audit-linkedin" className="text-brand-mute transition-colors duration-200 hover:text-brand-ink">Rapport LinkedIn</Link>
            <Link to="/cv" className="text-brand-mute transition-colors duration-200 hover:text-brand-ink">Designs de CV</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-mute">Légal</span>
            <Link to="/politique-confidentialite" className="text-brand-mute transition-colors duration-200 hover:text-brand-ink">Confidentialité</Link>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-brand-violet">
              Maquette redesignée <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
      <p className="mt-10 border-t border-black/5 pt-6 font-mono text-xs text-brand-mute">
        © 2026 Profilo · Vos données sont supprimées après 24 h
      </p>
    </div>
  </footer>
);
