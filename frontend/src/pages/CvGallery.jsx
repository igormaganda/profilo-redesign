import { useState } from "react";
import { motion } from "framer-motion";
import { Check, FileDown } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { JourneyProgress } from "@/components/profilo/JourneyProgress";
import { CvDocument } from "@/components/profilo/CvDocument";
import { FadeUp } from "@/components/profilo/Reveal";
import { TEMPLATES, CANDIDATE } from "@/data/mockReport";

export default function CvGallery() {
  const [template, setTemplate] = useState("paris");
  const active = TEMPLATES.find((t) => t.id === template);

  const download = () => {
    toast.success("Votre CV est prêt. Gardez ce lien : il reste disponible 24 h.", {
      description: `CV_${CANDIDATE.name.replace(" ", "_")}_${template}.pdf — téléchargement simulé (démo).`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <SiteHeader>
        <span className="hidden font-mono text-xs text-brand-mute md:inline">
          CV de {CANDIDATE.name} · expire dans <span className="text-brand-amber">23 h 41</span>
        </span>
        <button
          onClick={download}
          data-testid="download-pdf-button"
          className="group inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
        >
          <FileDown className="h-4 w-4" /> Télécharger le PDF
        </button>
      </SiteHeader>
      <JourneyProgress current={3} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-12 md:px-8">
        <FadeUp>
          <p className="eyebrow">Étape 03 — Choisir</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Choisissez votre design.
          </h1>
          <p className="mt-3 max-w-lg text-base text-brand-mute">
            Six templates vectoriels, pensés pour les ATS et les recruteurs. Le contenu optimisé reste identique —
            seule la forme change.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto]">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3" role="radiogroup" aria-label="Designs de CV">
            {TEMPLATES.map((t, i) => {
              const isActive = template === t.id;
              return (
                <FadeUp key={t.id} delay={i * 0.06}>
                  <button
                    onClick={() => setTemplate(t.id)}
                    onKeyDown={(e) => e.key === "Enter" && setTemplate(t.id)}
                    aria-pressed={isActive}
                    data-testid={`cv-template-${t.id}`}
                    className={`group relative w-full overflow-hidden rounded-xl border-2 bg-white p-2 text-left transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 ${
                      isActive ? "border-brand-violet card-glow-strong" : "border-black/8 card-glow hover:border-brand-violet/40"
                    }`}
                  >
                    <div className="pointer-events-none overflow-hidden rounded-lg">
                      <CvDocument template={t.id} className="cv-zoom-thumb" />
                    </div>
                    <div className="flex items-center justify-between px-1.5 py-2.5">
                      <div>
                        <p className="text-sm font-semibold text-brand-ink">{t.label}</p>
                        <p className="text-xs text-brand-mute">{t.tagline}</p>
                      </div>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                          isActive ? "border-brand-violet bg-brand-violet" : "border-black/15 group-hover:border-brand-violet/50"
                        }`}
                      >
                        {isActive && <Check className="h-3.5 w-3.5 text-white" />}
                      </span>
                    </div>
                  </button>
                </FadeUp>
              );
            })}
          </div>

          {/* Live preview */}
          <div className="lg:sticky lg:top-24 lg:self-start" data-testid="cv-live-preview">
            <FadeUp delay={0.1}>
              <p className="mb-4 flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.2em] text-brand-mute">
                <span>Aperçu live</span>
                <span className="text-brand-violet">{active.label} — {active.tagline}</span>
              </p>
              <div className="card-glow-strong overflow-hidden rounded-xl border border-black/5 bg-brand-sand/50 p-4">
                <motion.div
                  key={template}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="cv-zoom-preview mx-auto"
                >
                  <CvDocument template={template} />
                </motion.div>
              </div>
              <button
                onClick={download}
                data-testid="download-pdf-button-secondary"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5 lg:hidden"
              >
                <FileDown className="h-4 w-4" /> Télécharger le PDF — {active.label}
              </button>
            </FadeUp>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
