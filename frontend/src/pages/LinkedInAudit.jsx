import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Sparkles, AlertCircle, TrendingUp, Euro } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { ScoreRing } from "@/components/profilo/ScoreRing";
import { FadeUp } from "@/components/profilo/Reveal";
import { PremiumSwitch } from "@/pages/AuditA";

const REPORT = {
  score: 51,
  profile: "linkedin.com/in/cmoreau — Camille Moreau",
  criteria: [
    { label: "Headline", value: 8 },
    { label: "Section À propos", value: 10 },
    { label: "Expérience", value: 13 },
    { label: "Compétences", value: 14 },
    { label: "Réseau", value: 7 },
    { label: "Cohérence", value: 12 },
    { label: "Photo de profil", value: 16 },
    { label: "Recommandations", value: 11 },
  ],
  diagnostic: [
    "Votre profil est crédible mais invisible.",
    "Votre titre actuel ne contient aucun des mots-clés que les recruteurs tapent pour un poste de Product Manager.",
    "Vos expériences sont solides mais racontées sans chiffres — elles ne prouvent pas votre impact.",
  ],
  actions: [
    "Réécrivez votre headline avec 3 mots-clés recherchés par les recruteurs",
    "Chiffrez vos 2 dernières expériences (résultats mesurables)",
    "Passez la section À propos en mode « problème → résultat »",
    "Ajoutez 5 compétences recherchées : SQL, discovery, roadmap…",
    "Demandez 2 recommandations ciblées ce mois-ci",
    "Publiez 1 post d'expertise par semaine pendant 1 mois",
  ],
  headlines: [
    "J'aide les équipes produit à livrer plus vite — Product Manager · 8 ans · SaaS B2B",
    "Product Manager | De l'idée au lancement : +38 % d'activation sur 12 produits",
    "PM orientée data — SQL, discovery, roadmap · Ex-Novamedia",
  ],
  verdict:
    "Profil crédible mais invisible : le titre actuel ne contient aucun mot-clé recherché. Avec la headline n°2 et une section À propos chiffrée, vous passez dans le top 10 % des profils PM de votre marché.",
  marketValue: "52 – 58 k€ · Lyon / remote",
};

export default function LinkedInAudit() {
  const [premium, setPremium] = useState(false);

  const unlock = () => {
    setPremium(true);
    toast.success("Paiement simulé — rapport expert débloqué.", {
      description: "Démo : aucun paiement réel n'a été effectué.",
    });
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <SiteHeader>
        <PremiumSwitch premium={premium} onChange={() => (premium ? setPremium(false) : unlock())} />
      </SiteHeader>

      <main className="mx-auto max-w-6xl px-5 pb-28 md:px-8">
        {/* VERDICT */}
        <section className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[auto_1fr]" data-testid="linkedin-verdict">
          <FadeUp>
            <div className="card-glow mx-auto flex items-center justify-center rounded-full border border-black/5 bg-white p-6">
              <ScoreRing value={REPORT.score} size={180} stroke={12} />
            </div>
          </FadeUp>
          <div>
            <FadeUp delay={0.1}>
              <p className="eyebrow">Audit LinkedIn — Diagnostic</p>
              <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-brand-ink sm:text-4xl">
                Votre profil est à <span className="text-brand-violet">51 / 100</span> — crédible, mais invisible.
              </h1>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-brand-mute">{REPORT.profile}</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand-amber/25 bg-brand-amber/[0.07] p-4">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                <p className="text-sm text-brand-ink">
                  Le frein n°1 : <strong className="text-brand-amber">votre headline ne contient aucun mot-clé recruteur.</strong>
                </p>
              </div>
              <div className="mt-8">
                {premium ? (
                  <a href="#expert" data-testid="expert-scroll-cta" className="group inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5">
                    Voir mes textes réécrits
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <button onClick={unlock} data-testid="unlock-cta" className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5">
                    <Lock className="h-4 w-4" /> Débloquer le rapport expert — 6,99 €
                  </button>
                )}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CRITERIA */}
        <section className="border-t border-black/5 py-14 md:py-20">
          <FadeUp>
            <p className="eyebrow">Preuves</p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
              Vos 8 critères, un par un.
            </h2>
          </FadeUp>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REPORT.criteria.map((c, i) => (
              <FadeUp key={c.label} delay={i * 0.05}>
                <div className="card-glow rounded-2xl border border-black/5 bg-white p-5" data-testid={`criterion-${c.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs font-medium text-brand-mute">{c.label}</p>
                    <span className="font-mono text-sm font-bold text-brand-ink">{c.value}<span className="text-[10px] font-normal text-brand-mute">/20</span></span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/8">
                    <motion.div
                      className={`h-full rounded-full ${c.value >= 15 ? "bg-brand-cyan" : c.value >= 10 ? "bg-brand-violet" : "bg-brand-amber"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(c.value / 20) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <div className="card-glow mt-10 rounded-2xl border border-black/5 bg-white p-7">
              <p className="eyebrow">Diagnostic</p>
              <div className="mt-4 space-y-3">
                {REPORT.diagnostic.map((d, i) => (
                  <p key={i} className="flex items-start gap-3 text-base leading-relaxed text-brand-ink">
                    <span className="mt-1 font-mono text-xs font-bold text-brand-violet">{String(i + 1).padStart(2, "0")}</span>
                    {d}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <h3 className="mt-12 font-heading text-base font-semibold text-brand-ink">6 actions concrètes</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {REPORT.actions.map((a, i) => (
                <div key={a} className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4">
                  <span className="font-mono text-sm font-bold text-brand-violet/50">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-brand-ink">{a}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* EXPERT (PREMIUM) */}
        <section id="expert" className="scroll-mt-24 border-t border-black/5 py-14 md:py-20" data-testid="expert-section">
          <FadeUp>
            <p className="eyebrow">Rapport expert</p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
              Vos textes, réécrits et prêts à copier-coller.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="card-glow-strong relative mt-10 overflow-hidden rounded-2xl border border-brand-violet/20 bg-white p-7 md:p-9">
              <motion.div
                initial={false}
                animate={{ filter: premium ? "blur(0px)" : "blur(7px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                aria-hidden={!premium}
              >
                <h3 className="font-heading text-sm font-semibold text-brand-ink">3 headlines réécrites</h3>
                <div className="mt-4 space-y-3">
                  {REPORT.headlines.map((h, i) => (
                    <div key={i} className="rounded-xl border border-brand-violet/15 bg-brand-violet/[0.04] p-4 text-sm text-brand-ink">
                      {premium ? h : "█ ██████ ███ ████████ ██████ à ██████ ████ ████ — ███████ ███████ · █ ███"}
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-brand-ink">Verdict recruteur</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-mute">
                      {premium ? REPORT.verdict : "██████ ████████ ████ █████████ : ██ █████ ██████ ██ ████████ ██████ ███−███ ██████████. ████ ██ ████████ n°2 █████ ██████ ████ ██ ███ ██ ██████ ██████ █████ ████ ██ ███ ██ ███████."}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-brand-ink">Valeur estimée sur le marché</h3>
                    <p className="mt-3 flex items-center gap-2 font-mono text-xl font-bold text-brand-ink">
                      <Euro className="h-5 w-5 text-brand-cyan" />
                      {premium ? REPORT.marketValue : "██ – ██ k€"}
                    </p>
                  </div>
                </div>
              </motion.div>
              {!premium && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/50 p-6 text-center backdrop-blur-[2px]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-violet text-white">
                    <Lock className="h-5 w-5" />
                  </span>
                  <p className="max-w-sm text-sm font-medium text-brand-ink">
                    Headlines réécrites, À propos optimisée, 2 expériences reformulées, verdict recruteur et valeur de marché.
                  </p>
                  <button onClick={unlock} data-testid="unlock-cta-expert" className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5">
                    <Sparkles className="h-4 w-4" /> Débloquer — 6,99 €
                  </button>
                </div>
              )}
            </div>
          </FadeUp>
        </section>

        {/* CROSS-SELL */}
        <section className="border-t border-black/5 py-14">
          <FadeUp>
            <div className="grid gap-5 md:grid-cols-2">
              <Link to="/ats" data-testid="crosssell-ats" className="card-glow group rounded-2xl border border-black/5 bg-white p-7 transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                <TrendingUp className="h-5 w-5 text-brand-cyan" />
                <h3 className="mt-4 font-heading text-base font-semibold text-brand-ink">Votre profil brille. Et votre CV ?</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-mute">
                  Alignez maintenant votre CV avec l'offre que vous visez : mots-clés, score d'alignement et CV designé.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan">
                  Optimiser mon CV <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
              <Link to="/bundle" data-testid="crosssell-bundle" className="card-glow group rounded-2xl border-2 border-brand-violet/30 bg-white p-7 transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-violet">-21 %</p>
                <h3 className="mt-3 font-heading text-base font-semibold text-brand-ink">Le bundle LinkedIn + CV à 10,99 €</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-mute">
                  Les deux rapports premium + 3 analyses ATS supplémentaires. Au lieu de 13,98 €.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-violet">
                  Voir le bundle <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </FadeUp>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
