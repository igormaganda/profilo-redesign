import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Lock, AlertCircle, Check, LayoutTemplate, SplitSquareHorizontal, FileDown } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { JourneyProgress } from "@/components/profilo/JourneyProgress";
import { ScoreRing } from "@/components/profilo/ScoreRing";
import { KeywordChip } from "@/components/profilo/Chips";
import { CvDocument } from "@/components/profilo/CvDocument";
import { FadeUp } from "@/components/profilo/Reveal";
import { REPORT, TEMPLATES } from "@/data/mockReport";
import { PremiumSwitch } from "@/pages/AuditA";

const DirectionToggle = () => (
  <div className="flex items-center rounded-full border border-black/10 bg-white p-1" data-testid="direction-toggle">
    <Link
      to="/audit-a"
      data-testid="direction-toggle-a"
      className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-brand-mute transition-colors duration-200 hover:text-brand-ink"
    >
      <LayoutTemplate className="h-3.5 w-3.5" /> Direction A
    </Link>
    <Link
      to="/audit-b"
      data-testid="direction-toggle-b"
      className="flex items-center gap-1.5 rounded-full bg-brand-violet px-3.5 py-1.5 text-xs font-medium text-white"
    >
      <SplitSquareHorizontal className="h-3.5 w-3.5" /> Direction B
    </Link>
  </div>
);

const DiagnosticPanel = ({ premium, unlock }) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col gap-8" data-testid="diagnostic-panel">
      <div className="flex items-center gap-6">
        <ScoreRing value={REPORT.score} size={120} stroke={9} />
        <div>
          <p className="eyebrow">Verdict</p>
          <h1 className="mt-2 font-heading text-xl font-bold leading-snug tracking-tight text-brand-ink sm:text-2xl">
            {REPORT.verdict}
          </h1>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-brand-mute">{REPORT.role}</p>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-sm font-semibold text-brand-ink">Top 3 des écarts</h2>
        <ul className="mt-4 space-y-3">
          {REPORT.gaps.map((g, i) => (
            <li key={g.title} className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-amber/10">
                <AlertCircle className="h-3.5 w-3.5 text-brand-amber" />
              </span>
              <div>
                <p className="text-sm font-medium text-brand-ink">
                  <span className="mr-1.5 font-mono text-xs text-brand-violet">{String(i + 1).padStart(2, "0")}</span>
                  {g.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-brand-mute">{g.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-heading text-sm font-semibold text-brand-ink">
          Mots-clés manquants <span className="ml-1 font-mono text-xs font-normal text-brand-amber">{REPORT.keywordsMissing.length}</span>
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {REPORT.keywordsMissing.slice(0, 6).map((k) => <KeywordChip key={k} label={k} status="missing" />)}
        </div>
        <h2 className="mt-5 font-heading text-sm font-semibold text-brand-ink">
          Trouvés <span className="ml-1 font-mono text-xs font-normal text-brand-cyan">{REPORT.keywordsFound.length}</span>
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {REPORT.keywordsFound.slice(0, 5).map((k) => <KeywordChip key={k} label={k} status="found" />)}
        </div>
      </div>

      <div className="mt-auto pt-2">
        {premium ? (
          <button
            onClick={() => navigate("/cv")}
            data-testid="download-cta-b"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
          >
            <FileDown className="h-4 w-4" /> Télécharger le PDF
          </button>
        ) : (
          <button
            onClick={unlock}
            data-testid="unlock-cta"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
          >
            <Lock className="h-4 w-4" /> Débloquer mon CV optimisé — 6,99 €
          </button>
        )}
        <p className="mt-3 text-center font-mono text-[10px] text-brand-mute">
          {premium ? "6 designs disponibles · export vectoriel" : "Paiement unique · rapport valable 24 h"}
        </p>
      </div>
    </div>
  );
};

const StudioPreview = ({ premium, template, unlock }) => (
  <div className="relative flex flex-col" data-testid="studio-preview">
    <div className="card-glow relative flex-1 overflow-hidden rounded-2xl border border-black/5 bg-brand-sand/60 p-4 md:p-6">
      <div className="flex h-full items-start justify-center overflow-hidden">
        <motion.div
          className="cv-zoom-preview"
          initial={false}
          animate={{ filter: premium ? "blur(0px)" : "blur(6px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={premium ? {} : { maxHeight: "62%", overflow: "hidden" }}
        >
          <CvDocument template={template} skeleton={!premium} />
        </motion.div>
      </div>
      {!premium && (
        <>
          <div className="watermark-band pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-sand via-brand-sand/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-6 text-center">
            <p className="text-sm font-medium text-brand-ink">Voici votre CV, réécrit et designé.</p>
            <button
              onClick={unlock}
              data-testid="unlock-cta-preview"
              className="inline-flex items-center gap-2 rounded-full bg-brand-violet px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-violet-500 hover:-translate-y-0.5"
            >
              <Lock className="h-4 w-4" /> Débloquer l'aperçu complet — 6,99 €
            </button>
          </div>
        </>
      )}
    </div>
    <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-mute">
      {premium ? `Template ${template} · aperçu live` : "Aperçu tronqué à 60 % — le vrai rendu après déblocage"}
    </p>
  </div>
);

export default function AuditB() {
  const [premium, setPremium] = useState(false);
  const [template, setTemplate] = useState("paris");
  const [tab, setTab] = useState("diagnostic");

  const unlock = () => {
    setPremium(true);
    toast.success("Paiement simulé — l'aperçu se débloque en place.", {
      description: "Démo : aucun paiement réel n'a été effectué.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <SiteHeader>
        <PremiumSwitch premium={premium} onChange={() => (premium ? setPremium(false) : unlock())} />
        <DirectionToggle />
      </SiteHeader>
      <JourneyProgress current={2} />

      {/* Mobile tabs */}
      <div className="border-b border-black/5 bg-white/70 lg:hidden">
        <div className="mx-auto flex max-w-6xl gap-2 px-5 py-3" role="tablist" aria-label="Vue rapport">
          <button
            role="tab"
            aria-selected={tab === "diagnostic"}
            onClick={() => setTab("diagnostic")}
            data-testid="tab-diagnostic"
            className={`flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              tab === "diagnostic" ? "bg-brand-violet text-white" : "text-brand-mute"
            }`}
          >
            Diagnostic
          </button>
          <button
            role="tab"
            aria-selected={tab === "cv"}
            onClick={() => setTab("cv")}
            data-testid="tab-cv"
            className={`flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              tab === "cv" ? "bg-brand-violet text-white" : "text-brand-mute"
            }`}
          >
            Mon CV
          </button>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-10 md:px-8">
        {/* Desktop split 40/60 */}
        <div className="hidden flex-1 gap-10 lg:grid lg:grid-cols-[2fr_3fr]">
          <FadeUp className="border-r border-black/5 pr-10">
            <DiagnosticPanel premium={premium} unlock={unlock} />
          </FadeUp>
          <FadeUp delay={0.15}>
            <StudioPreview premium={premium} template={template} unlock={unlock} />
          </FadeUp>
        </div>

        {/* Mobile tab content */}
        <div className="lg:hidden">
          {tab === "diagnostic" ? (
            <DiagnosticPanel premium={premium} unlock={unlock} />
          ) : (
            <StudioPreview premium={premium} template={template} unlock={unlock} />
          )}
        </div>

        {/* Gallery row */}
        <section className="mt-12 border-t border-black/5 pt-8" data-testid="template-row">
          <div className="flex items-baseline justify-between">
            <h2 className="font-heading text-sm font-semibold text-brand-ink">Choisissez votre design</h2>
            <Link to="/cv" data-testid="open-full-gallery" className="group inline-flex items-center gap-1.5 text-xs font-medium text-brand-violet">
              Mode plein écran <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
            {TEMPLATES.map((t) => {
              const active = template === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  aria-pressed={active}
                  data-testid={`gallery-template-${t.id}`}
                  className={`group relative overflow-hidden rounded-lg border-2 bg-white p-1.5 text-left transition-[border-color,box-shadow] duration-200 ${
                    active ? "border-brand-violet card-glow" : "border-black/8 hover:border-brand-violet/40"
                  }`}
                >
                  <div className="pointer-events-none overflow-hidden rounded">
                    <CvDocument template={t.id} skeleton={!premium} className="cv-zoom-thumb" />
                  </div>
                  <div className="flex items-center justify-between px-1 py-1.5">
                    <span className="text-[11px] font-medium text-brand-ink">{t.label}</span>
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-200 ${
                        active ? "border-brand-violet bg-brand-violet" : "border-black/20"
                      }`}
                    >
                      {active && <Check className="h-2.5 w-2.5 text-white" />}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
