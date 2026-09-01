import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Linkedin, FileText, ShieldCheck, Zap, Lock, Star, Trash2, EyeOff, Package,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { MaskedLines, FadeUp } from "@/components/profilo/Reveal";
import { Marquee } from "@/components/profilo/Marquee";
import { ScoreRing } from "@/components/profilo/ScoreRing";
import { MARQUEE_ITEMS } from "@/data/mockReport";

const TESTIMONIALS = [
  {
    initials: "KB", name: "Karim B.", role: "Développeur Full-Stack", score: "38 → 72", tint: "bg-brand-violet/10 text-brand-violet",
    quote: "Parti d'un score de 38/100. Après avoir appliqué les 3 headlines proposées, j'ai reçu 5 demandes de contact en une semaine. Bluffant.",
  },
  {
    initials: "LM", name: "Léa M.", role: "Product Manager", score: "67 → 84", tint: "bg-brand-cyan/10 text-cyan-700",
    quote: "Le verdict recruteur m'a ouvert les yeux. J'ai compris en 2 minutes ce que je n'avais pas compris en 2 ans sur LinkedIn.",
  },
  {
    initials: "TR", name: "Thomas R.", role: "Consultant indépendant", score: "81 → 93", tint: "bg-brand-amber/10 text-brand-amber",
    quote: "Le rapport expert vaut largement ses 6,99 €. Les expériences réécrites avec des chiffres ont transformé mon profil.",
  },
];

const STEPS = [
  { n: "01", title: "Auditez LinkedIn", text: "Repérez ce qui bloque votre visibilité et votre crédibilité." },
  { n: "02", title: "Optimisez le CV", text: "Alignez votre CV avec l'offre visée grâce aux bons mots-clés." },
  { n: "03", title: "Racontez la même histoire", text: "LinkedIn et CV cohérents. Les recruteurs confirment." },
];

const Avatars = () => (
  <div className="flex -space-x-2.5">
    {[
      ["K", "bg-brand-violet"], ["L", "bg-brand-cyan"], ["T", "bg-brand-amber"], ["E", "bg-brand-ink"],
    ].map(([initial, bg]) => (
      <span key={initial} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-cream font-heading text-xs font-semibold text-white ${bg}`}>
        {initial}
      </span>
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <SiteHeader nav>
        <Link
          to="/linkedin"
          data-testid="header-cta"
          className="rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
        >
          Auditer mon profil
        </Link>
      </SiteHeader>

      <main id="main-content">
        {/* HERO */}
        <section className="grain relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-28">
            <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="eyebrow">
                1 plateforme · 2 outils · 30 secondes
              </motion.p>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                <MaskedLines
                  lines={[
                    "Votre profil.",
                    "Votre CV.",
                    <>Votre prochain <span className="text-brand-violet">entretien.</span></>,
                  ]}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-md text-base leading-relaxed text-brand-mute md:text-lg"
              >
                83 % des recruteurs consultent LinkedIn avant de vous contacter. Nous auditons votre profil,
                alignons votre CV avec l'offre — et vous disons exactement quoi corriger.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/linkedin"
                  data-testid="hero-cta-linkedin"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                >
                  Auditer mon profil LinkedIn
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/ats"
                  data-testid="hero-cta-ats"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-medium text-brand-ink transition-colors duration-200 hover:border-brand-violet/40 hover:text-brand-violet"
                >
                  Optimiser mon CV
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05, duration: 0.8 }}
                className="mt-10 flex items-center gap-4"
              >
                <Avatars />
                <div>
                  <p className="flex items-center gap-1 text-brand-amber">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    <span className="ml-1 font-mono text-xs font-bold text-brand-ink">4,8/5</span>
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-brand-mute">12 847+ profils déjà audités</p>
                </div>
              </motion.div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden justify-center lg:flex">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="card-glow-strong relative z-10 w-[24rem] rounded-2xl border border-black/5 bg-white p-8"
                >
                  <p className="eyebrow text-sm">Audit LinkedIn</p>
                  <div className="mt-5 flex items-center gap-6">
                    <ScoreRing value={51} size={150} stroke={11} />
                    <div className="flex-1 space-y-3">
                      {["Headline", "À propos", "Expérience"].map((label, i) => (
                        <div key={label}>
                          <p className="text-xs font-medium text-brand-mute">{label}</p>
                          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-black/8">
                            <motion.div
                              className={`h-full rounded-full ${i === 0 ? "bg-brand-amber" : "bg-brand-violet"}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${[40, 52, 65][i]}%` }}
                              transition={{ delay: 1 + i * 0.15, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="card-glow-strong absolute -bottom-20 -right-14 z-20 w-80 rounded-2xl border border-black/5 bg-white p-7"
                >
                  <p className="eyebrow text-sm" style={{ color: "#06b6d4" }}>Optimisation CV</p>
                  <p className="mt-4 font-mono text-5xl font-bold text-brand-ink">
                    78<span className="text-xl text-brand-mute"> /100</span>
                  </p>
                  <p className="mt-1.5 text-sm text-brand-mute">Alignement CV / offre</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "TypeScript", "CI/CD"].map((k) => (
                      <span key={k} className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-cyan-800">
                        {k}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <Marquee items={MARQUEE_ITEMS} />

        {/* TWO TOOLS */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <FadeUp>
            <p className="eyebrow">Deux outils complémentaires</p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              LinkedIn vous fait découvrir. Le CV vous fait choisir.
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FadeUp>
              <Link
                to="/linkedin"
                data-testid="tool-card-linkedin"
                className="card-glow group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:card-glow-strong"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet/10 transition-colors duration-300 group-hover:bg-brand-violet">
                  <Linkedin className="h-5 w-5 text-brand-violet transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-brand-ink">Audit LinkedIn</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-mute">
                  Score sur 8 critères, headlines réécrites, verdict recruteur et valeur estimée sur le marché.
                  Voyez enfin ce qui freine votre profil.
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="font-mono text-sm text-brand-mute">
                    Gratuit · <span className="text-base font-bold text-brand-violet">6,99 €</span> / rapport expert
                  </p>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 group-hover:bg-cyan-500 group-hover:-translate-y-0.5">
                    Auditer mon profil <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeUp>
            <FadeUp delay={0.12}>
              <Link
                to="/ats"
                data-testid="tool-card-ats"
                className="card-glow group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:card-glow-strong"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/10 transition-colors duration-300 group-hover:bg-brand-cyan">
                  <FileText className="h-5 w-5 text-brand-cyan transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-brand-ink">Optimisation CV ATS</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-mute">
                  Mots-clés manquants, score d'alignement et CV optimisé prêt à envoyer, designé dans 6 templates
                  vectoriels.
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="font-mono text-sm text-brand-mute">
                    Gratuit · <span className="text-base font-bold text-brand-violet">6,99 €</span> / rapport expert
                  </p>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 group-hover:bg-cyan-500 group-hover:-translate-y-0.5">
                    Optimiser mon CV <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 font-mono text-xs text-brand-mute">
              <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-brand-cyan" /> Résultat en 30 s</span>
              <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-brand-cyan" /> Sans carte bancaire</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" /> Données chiffrées</span>
            </div>
          </FadeUp>
        </section>

        {/* JOURNEY */}
        <section className="border-y border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
            <FadeUp>
              <p className="eyebrow">Le parcours complet</p>
              <h2 className="mt-3 max-w-lg font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                LinkedIn et CV travaillent ensemble.
              </h2>
              <p className="mt-3 max-w-lg text-base text-brand-mute">
                Un profil cohérent multiplie vos chances. Trois étapes, un objectif : décrocher l'entretien.
              </p>
            </FadeUp>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((s, i) => (
                <FadeUp key={s.n} delay={i * 0.12}>
                  <div className="group border-t-2 border-black/8 pt-6 transition-colors duration-300 hover:border-brand-violet">
                    <span className="font-mono text-4xl font-bold text-brand-violet/25 transition-colors duration-300 group-hover:text-brand-violet">{s.n}</span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-brand-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-mute">{s.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <FadeUp>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">4,8/5 · 12 847+ profils analysés</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                  Ils ont débloqué leur visibilité.
                </h2>
              </div>
            </div>
          </FadeUp>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <figure className="card-glow flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7">
                  <span className="font-mono text-sm font-bold text-brand-violet">{t.score}</span>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink">« {t.quote} »</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full font-heading text-xs font-semibold ${t.tint}`}>
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-brand-ink">{t.name}</span>
                      <span className="block text-xs text-brand-mute">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* PRIVACY */}
        <section className="border-y border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
            <FadeUp>
              <p className="eyebrow">Confidentialité totale</p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                Vos données restent les vôtres.
              </h2>
            </FadeUp>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { icon: EyeOff, text: "Jamais vos identifiants LinkedIn" },
                { icon: ShieldCheck, text: "PII anonymisées avant traitement IA" },
                { icon: Trash2, text: "Suppression de vos données à tout moment" },
              ].map((item, i) => (
                <FadeUp key={item.text} delay={i * 0.08}>
                  <div className="flex items-center gap-3 rounded-xl border border-black/5 bg-brand-cream px-5 py-4">
                    <item.icon className="h-4 w-4 shrink-0 text-brand-cyan" />
                    <p className="text-sm text-brand-ink">{item.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* BUNDLE TEASER */}
        <section className="bg-brand-violet">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <FadeUp>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/70">Offre de lancement</p>
              <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Le bundle à 10,99 € au lieu de 13,98 €.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                Audit LinkedIn Premium + Analyse ATS Premium + 3 analyses ATS supplémentaires.
                Économisez 21 % par rapport à l'achat séparé.
              </p>
              <Link
                to="/bundle"
                data-testid="bundle-teaser-cta"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-violet transition-[background-color,transform] duration-200 hover:bg-brand-cream hover:-translate-y-0.5"
              >
                <Package className="h-4 w-4" /> Découvrir le bundle
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
