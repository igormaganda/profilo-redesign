import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Sparkles, TrendingUp, AlertCircle, SplitSquareHorizontal, LayoutTemplate } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { JourneyProgress } from "@/components/profilo/JourneyProgress";
import { ScoreRing } from "@/components/profilo/ScoreRing";
import { KeywordChip } from "@/components/profilo/Chips";
import { CvDocument } from "@/components/profilo/CvDocument";
import { FadeUp } from "@/components/profilo/Reveal";
import { REPORT } from "@/data/mockReport";

const DirectionToggle = ({ active }) => (
  <div className="flex items-center rounded-full border border-black/10 bg-white p-1" data-testid="direction-toggle">
    <Link
      to="/audit-a"
      data-testid="direction-toggle-a"
      className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
        active === "a" ? "bg-brand-violet text-white" : "text-brand-mute hover:text-brand-ink"
      }`}
    >
      <LayoutTemplate className="h-3.5 w-3.5" /> Direction A
    </Link>
    <Link
      to="/audit-b"
      data-testid="direction-toggle-b"
      className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
        active === "b" ? "bg-brand-violet text-white" : "text-brand-mute hover:text-brand-ink"
      }`}
    >
      <SplitSquareHorizontal className="h-3.5 w-3.5" /> Direction B
    </Link>
  </div>
);

export const PremiumSwitch = ({ premium, onChange }) => (
  <label className="flex cursor-pointer items-center gap-2.5" data-testid="premium-toggle">
    <span className="font-mono text-[10px] uppercase tracking-wider text-brand-mute">Démo · état premium</span>
    <button
      type="button"
      role="switch"
      aria-checked={premium}
      onClick={onChange}
      className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${premium ? "bg-brand-violet" : "bg-black/15"}`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-[left] duration-300 ${premium ? "left-[22px]" : "left-0.5"}`}
      />
    </button>
  </label>
);

const Gauge = ({ label, value, display }) => (
  <div className="card-glow rounded-2xl border border-black/5 bg-white p-5" data-testid={`gauge-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
    <div className="flex items-baseline justify-between gap-2">
      <p className="text-xs font-medium text-brand-mute">{label}</p>
      <span className="font-mono text-sm font-bold text-brand-ink">{display}</span>
    </div>
    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/8">
      <motion.div
        className={`h-full rounded-full ${value >= 75 ? "bg-brand-cyan" : value >= 50 ? "bg-brand-violet" : "bg-brand-amber"}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </div>
);

export default function AuditA() {
  const [premium, setPremium] = useState(false);
  const navigate = useNavigate();

  const unlock = () => {
    setPremium(true);
    toast.success("Paiement simulé — votre CV optimisé est débloqué.", {
      description: "Démo : aucun paiement réel n'a été effectué.",
    });
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <SiteHeader>
        <PremiumSwitch premium={premium} onChange={() => (premium ? setPremium(false) : unlock())} />
        <DirectionToggle active="a" />
      </SiteHeader>
      <JourneyProgress current={2} />

      <main className="mx-auto max-w-6xl px-5 pb-28 md:px-8">
        {/* VERDICT */}
        <section className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[auto_1fr]" data-testid="verdict-band">
          <FadeUp>
            <div className="card-glow mx-auto flex items-center justify-center rounded-full border border-black/5 bg-white p-6">
              <ScoreRing value={REPORT.score} size={190} stroke={12} />
            </div>
          </FadeUp>
          <div>
            <FadeUp delay={0.1}>
              <p className="eyebrow">Direction A — Diagnostic clinique</p>
              <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-brand-ink sm:text-4xl">
                {REPORT.verdict}
              </h1>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-brand-mute">{REPORT.role}</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand-amber/25 bg-brand-amber/[0.07] p-4">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                <p className="text-sm text-brand-ink">
                  Le frein n°1 : <strong className="text-brand-amber">{REPORT.topGap}.</strong>
                </p>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-brand-mute">
                <TrendingUp className="h-4 w-4 text-brand-cyan" />
                Gain estimé après optimisation : <span className="font-mono font-bold text-brand-cyan">+{REPORT.gain} points</span>
              </p>
              <div className="mt-8">
                {premium ? (
                  <button
                    onClick={() => navigate("/cv")}
                    data-testid="choose-design-cta"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                  >
                    Choisir mon design
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    onClick={unlock}
                    data-testid="unlock-cta"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                  >
                    <Lock className="h-4 w-4" /> Débloquer mon CV optimisé — 6,99 €
                  </button>
                )}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* PREUVES */}
        <section className="border-t border-black/5 py-14 md:py-20">
          <FadeUp>
            <p className="eyebrow">Preuves</p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
              Pourquoi ce score, en quatre chiffres.
            </h2>
          </FadeUp>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {REPORT.metrics.map((m, i) => (
              <FadeUp key={m.id} delay={i * 0.07}>
                <Gauge label={m.label} value={m.value} display={m.display} />
              </FadeUp>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <FadeUp>
              <h3 className="font-heading text-base font-semibold text-brand-ink">
                Mots-clés trouvés <span className="ml-1 font-mono text-sm font-normal text-brand-cyan">{REPORT.keywordsFound.length}</span>
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {REPORT.keywordsFound.map((k) => <KeywordChip key={k} label={k} status="found" />)}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="font-heading text-base font-semibold text-brand-ink">
                Mots-clés manquants <span className="ml-1 font-mono text-sm font-normal text-brand-amber">{REPORT.keywordsMissing.length}</span>
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {REPORT.keywordsMissing.map((k) => <KeywordChip key={k} label={k} status="missing" />)}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <h3 className="mt-12 font-heading text-base font-semibold text-brand-ink">Santé par section</h3>
            <div className="mt-5 space-y-3">
              {REPORT.sections.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-sm text-brand-mute">{s.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/8">
                    <motion.div
                      className={`h-full rounded-full ${s.value >= 75 ? "bg-brand-cyan" : s.value >= 50 ? "bg-brand-violet" : "bg-brand-amber"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="w-10 text-right font-mono text-xs font-bold text-brand-ink">{s.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* ORDONNANCE */}
        <section className="border-t border-black/5 py-14 md:py-20">
          <FadeUp>
            <p className="eyebrow">Ordonnance</p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
              Trois actions, par ordre de priorité.
            </h2>
          </FadeUp>
          <div className="mt-10 space-y-4">
            {REPORT.actions.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.08}>
                <div className="card-glow flex items-start gap-5 rounded-2xl border border-black/5 bg-white p-6">
                  <span className="font-mono text-2xl font-bold text-brand-violet/40">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-brand-ink">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-mute">{a.detail}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* PROMESSE — AVANT / APRÈS */}
        <section className="border-t border-black/5 py-14 md:py-20" data-testid="promise-section">
          <FadeUp>
            <p className="eyebrow">La promesse</p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
              Voici votre CV, réécrit et designé.
            </h2>
          </FadeUp>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FadeUp>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-mute">Avant — votre CV actuel</p>
                <div className="relative overflow-hidden rounded-xl border border-black/10 bg-white">
                  <div className="cv-zoom-thumb p-4">
                    <CvDocument template="tokyo" skeleton={false} />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/85 to-transparent" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-ink/80 px-4 py-1.5 text-xs text-white backdrop-blur">
                    Extrait — le reste est illisible par un ATS
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-violet">Après — optimisé par Profilo</p>
                <div className="card-glow relative overflow-hidden rounded-xl border border-brand-violet/20 bg-white">
                  <motion.div
                    className="cv-zoom-thumb p-4"
                    initial={false}
                    animate={{ filter: premium ? "blur(0px)" : "blur(7px)" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <CvDocument template="paris" skeleton={!premium} />
                  </motion.div>
                  {!premium && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/40 p-6 text-center backdrop-blur-[2px]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-violet text-white">
                        <Lock className="h-5 w-5" />
                      </span>
                      <p className="max-w-[240px] text-sm font-medium text-brand-ink">
                        Votre CV optimisé est prêt — débloquez-le pour le voir.
                      </p>
                      <button
                        onClick={unlock}
                        data-testid="unlock-cta-card"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                      >
                        <Sparkles className="h-4 w-4" /> Débloquer — 6,99 €
                      </button>
                    </div>
                  )}
                </div>
                {premium && (
                  <button
                    onClick={() => navigate("/cv")}
                    data-testid="choose-design-cta-card"
                    className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                  >
                    Choisir mon design
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
