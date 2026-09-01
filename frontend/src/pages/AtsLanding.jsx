import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import {
  ArrowRight, Upload, FileText, ShieldCheck, Zap, Lock, Gauge, Tags, ListChecks,
  FileDown, ClipboardCheck, Linkedin, LayoutTemplate, SplitSquareHorizontal,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { MaskedLines, FadeUp } from "@/components/profilo/Reveal";
import { Marquee } from "@/components/profilo/Marquee";
import { CvDocument } from "@/components/profilo/CvDocument";
import { AnalysisOverlay } from "@/components/profilo/AnalysisOverlay";
import { MARQUEE_ITEMS, FAQ } from "@/data/mockReport";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FEATURES = [
  { icon: Gauge, title: "Score d'alignement CV / offre", text: "Un chiffre clair pour savoir où vous vous situez." },
  { icon: Tags, title: "Mots-clés trouvés et manquants", text: "Les termes que les ATS et les recruteurs recherchent." },
  { icon: ListChecks, title: "Analyse section par section", text: "Titre, résumé, expérience, compétences, formation." },
  { icon: FileDown, title: "CV optimisé exportable", text: "Une version réécrite, alignée avec l'offre, en PDF designé." },
  { icon: ClipboardCheck, title: "Checklist avant envoi", text: "Ce qu'il faut vérifier avant de postuler." },
  { icon: Linkedin, title: "Recommandation LinkedIn", text: "Pour rester cohérent entre votre CV et votre profil." },
];

const STEPS = [
  { n: "01", title: "Importez votre CV", text: "PDF ou DOCX, ou collez le texte directement." },
  { n: "02", title: "Collez l'offre", text: "Le poste que vous visez, avec missions et compétences." },
  { n: "03", title: "Obtenez l'analyse", text: "Score d'alignement, mots-clés manquants, CV optimisé." },
];

const HeroVisual = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useTransform(my, [0, 1], [7, -7]);
  const rotateY = useTransform(mx, [0, 1], [-9, 9]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div
      ref={ref}
      className="relative hidden justify-end lg:flex"
      style={{ perspective: 1200 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <motion.div style={{ rotateX, rotateY, y: yParallax, transformStyle: "preserve-3d" }} className="relative">
        <div className="card-glow-strong overflow-hidden rounded-xl border border-black/5">
          <CvDocument template="paris" className="cv-zoom-hero" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-glow absolute -left-10 top-16 rounded-xl border border-black/5 bg-white px-4 py-3"
          style={{ transform: "translateZ(50px)" }}
        >
          <p className="font-mono text-lg font-bold text-brand-violet">+24 pts</p>
          <p className="text-xs text-brand-mute">après optimisation</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-glow absolute -right-6 bottom-24 rounded-xl border border-black/5 bg-white px-4 py-3"
          style={{ transform: "translateZ(70px)" }}
        >
          <p className="flex items-center gap-1.5 text-xs font-medium text-brand-amber">
            <Zap className="h-3.5 w-3.5" /> SQL détecté dans l'offre
          </p>
          <p className="mt-0.5 text-xs text-brand-mute">absent de votre CV</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function AtsLanding() {
  const navigate = useNavigate();
  const [pasteMode, setPasteMode] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setAnalyzing(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <SiteHeader nav>
        <a
          href="#audit"
          data-testid="header-cta"
          className="rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
        >
          Analyser mon CV
        </a>
      </SiteHeader>

      <main id="main-content">
        {/* HERO */}
        <section className="grain relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-28">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="eyebrow"
                data-testid="hero-eyebrow"
              >
                Gratuit · Résultat en 30 s · Sans inscription
              </motion.p>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                <MaskedLines
                  lines={[
                    "Votre CV mérite",
                    "d'être lu avant",
                    <>d'être <span className="text-brand-violet">filtré.</span></>,
                  ]}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-md text-base leading-relaxed text-brand-mute md:text-lg"
              >
                Comparez votre CV à une offre d'emploi, repérez les mots-clés et compétences manquants,
                puis obtenez des recommandations concrètes pour renforcer votre candidature.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#audit"
                  data-testid="hero-cta-analyze"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                >
                  Analyser mon CV gratuitement
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <Link
                  to="/audit-b"
                  data-testid="hero-cta-sample"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-medium text-brand-ink transition-colors duration-200 hover:border-brand-violet/40 hover:text-brand-violet"
                >
                  Voir un exemple de rapport
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05, duration: 0.8 }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-brand-mute"
              >
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" /> CV anonymisé avant analyse</span>
                <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-brand-cyan" /> Score instantané</span>
                <span className="flex items-center gap-1.5"><FileText className="h-3.5 w-3.5 text-brand-cyan" /> PDF & DOCX</span>
              </motion.div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Marquee items={MARQUEE_ITEMS} />

        {/* FORM */}
        <section id="audit" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
          <FadeUp>
            <p className="eyebrow">Étape 01 — Déposer</p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Analysez votre CV gratuitement
            </h2>
            <p className="mt-3 max-w-lg text-base text-brand-mute">
              Importez votre CV, collez l'offre, recevez votre rapport en 30 secondes. Sans inscription, sans carte bancaire.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form
              onSubmit={submit}
              className="card-glow mt-10 grid gap-8 rounded-2xl border border-black/5 bg-white p-6 md:p-10 lg:grid-cols-2"
              data-testid="ats-form"
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm font-medium text-brand-ink">Votre CV</label>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand-cyan">Gratuit · Sans inscription</span>
                </div>
                {pasteMode ? (
                  <textarea
                    data-testid="cv-paste-textarea"
                    rows={9}
                    placeholder="Collez ici le texte complet de votre CV…"
                    className="mt-3 w-full resize-none rounded-xl border border-black/10 bg-brand-cream/50 p-4 text-sm text-brand-ink outline-none transition-colors duration-200 placeholder:text-brand-mute/50 focus:border-brand-violet"
                  />
                ) : (
                  <div
                    data-testid="cv-upload-zone"
                    className="mt-3 flex h-[218px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-brand-violet/30 bg-brand-violet/[0.03] text-center transition-colors duration-200 hover:border-brand-violet/60 hover:bg-brand-violet/[0.06]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-violet/10">
                      <Upload className="h-5 w-5 text-brand-violet" />
                    </span>
                    <p className="text-sm font-medium text-brand-ink">Glissez votre CV ici (PDF ou DOCX)</p>
                    <p className="font-mono text-xs text-brand-mute">5 Mo max · ou cliquez pour parcourir</p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setPasteMode((v) => !v)}
                  data-testid="paste-toggle"
                  className="mt-3 text-sm text-brand-violet underline-offset-4 transition-colors duration-200 hover:underline"
                >
                  {pasteMode ? "Préférer importer un fichier" : "Préférer coller le texte de mon CV"}
                </button>
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-brand-mute">
                  <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-cyan" />
                  Nous ne demandons jamais vos identifiants. Votre CV est anonymisé (e-mails, téléphones supprimés) avant l'analyse IA.
                </p>
              </div>

              <div className="flex flex-col">
                <label htmlFor="job-offer" className="text-sm font-medium text-brand-ink">Offre d'emploi ciblée</label>
                <textarea
                  id="job-offer"
                  data-testid="job-offer-input"
                  rows={6}
                  placeholder="Collez ici l'annonce complète : missions, compétences requises, stack…"
                  className="mt-3 w-full resize-none rounded-xl border border-black/10 bg-brand-cream/50 p-4 text-sm text-brand-ink outline-none transition-colors duration-200 placeholder:text-brand-mute/50 focus:border-brand-violet"
                />
                <label htmlFor="target-role" className="mt-5 text-sm font-medium text-brand-ink">
                  Rôle visé <span className="font-normal text-brand-mute">(optionnel)</span>
                </label>
                <input
                  id="target-role"
                  data-testid="role-input"
                  type="text"
                  placeholder="Ex. Product Ops Manager"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-brand-cream/50 px-4 py-3 text-sm text-brand-ink outline-none transition-colors duration-200 placeholder:text-brand-mute/50 focus:border-brand-violet"
                />
                <label className="mt-5 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    data-testid="consent-checkbox"
                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-md border-2 border-brand-violet accent-brand-violet"
                  />
                  <span className="text-xs leading-relaxed text-brand-mute">
                    J'accepte que mon CV soit analysé par notre IA. Mes données sont anonymisées avant traitement.{" "}
                    <a href="/politique-confidentialite" className="text-brand-violet underline-offset-2 hover:underline">En savoir plus</a>
                  </span>
                </label>
                <button
                  type="submit"
                  data-testid="analyze-submit-button"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                >
                  Analyser mon CV gratuitement
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </FadeUp>
        </section>

        {/* HOW IT WORKS */}
        <section id="comment" className="border-y border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
            <FadeUp>
              <p className="eyebrow">Comment ça marche</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                Trois étapes, trente secondes.
              </h2>
            </FadeUp>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((s, i) => (
                <FadeUp key={s.n} delay={i * 0.12}>
                  <div className="group relative border-t-2 border-black/8 pt-6 transition-colors duration-300 hover:border-brand-violet">
                    <span className="font-mono text-4xl font-bold text-brand-violet/25 transition-colors duration-300 group-hover:text-brand-violet">
                      {s.n}
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-brand-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-mute">{s.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="rapport" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
          <FadeUp>
            <p className="eyebrow">Ce que vous obtenez</p>
            <h2 className="mt-3 max-w-lg font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Un rapport complet, actionnable.
            </h2>
            <p className="mt-3 max-w-lg text-base text-brand-mute">
              Tout ce qu'il faut pour transformer votre CV en candidature présélectionnable.
            </p>
          </FadeUp>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07}>
                <div className="card-glow group h-full rounded-2xl border border-black/5 bg-white p-7 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:card-glow-strong">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-violet/10 transition-colors duration-300 group-hover:bg-brand-violet">
                    <f.icon className="h-5 w-5 text-brand-violet transition-colors duration-300 group-hover:text-white" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold text-brand-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-mute">{f.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* STUDIO REPORT PREVIEW — Direction B retenue */}
        <section className="border-y border-black/5 bg-white/60">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2">
            <FadeUp>
              <p className="eyebrow">Le rapport repensé — Studio progressif</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                Un studio, pas un mur de texte.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-brand-mute">
                Le diagnostic à gauche, votre CV réécrit et designé en aperçu live à droite. Débloquez, choisissez
                parmi 6 templates, téléchargez : trois interactions suffisent.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Verdict synthétique : le frein n°1 lisible en 5 secondes",
                  "Aperçu live du CV designé, déflouté au moment du déblocage",
                  "Galerie de 6 templates intégrée directement au rapport",
                  "Un seul CTA par écran — l'action suivante est évidente",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-ink">
                    <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-violet" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/audit-b"
                data-testid="studio-preview-cta"
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-medium text-brand-ink transition-colors duration-200 hover:border-brand-violet/40 hover:text-brand-violet"
              >
                Explorer le studio
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="card-glow-strong relative overflow-hidden rounded-2xl border border-black/5 bg-brand-sand/60 p-5">
                <div className="mx-auto max-h-[420px] overflow-hidden">
                  <CvDocument template="paris" skeleton className="cv-zoom-preview mx-auto" />
                </div>
                <div className="watermark-band pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-sand via-brand-sand/70 to-transparent" />
                <p className="absolute inset-x-0 bottom-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-mute">
                  Aperçu teaser — débloqué après paiement
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* LINKEDIN CROSS-SELL */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
          <FadeUp>
            <div className="card-glow flex flex-col items-start gap-6 rounded-2xl border border-black/5 bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="eyebrow">Profilo · Audit LinkedIn</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-brand-ink">
                  Votre profil LinkedIn est-il cohérent avec votre CV ?
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-mute">
                  Les recruteurs croisent les deux. Auditez votre profil LinkedIn gratuitement pour aligner titre,
                  résumé et expériences avec votre CV fraîchement optimisé.
                </p>
              </div>
              <a
                href="/linkedin"
                data-testid="linkedin-crosssell-cta"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-brand-ink transition-colors duration-200 hover:border-brand-violet/40 hover:text-brand-violet"
              >
                <Linkedin className="h-4 w-4" /> Auditer mon profil LinkedIn
              </a>
            </div>
          </FadeUp>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 pb-28 md:px-8">
          <FadeUp>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Questions fréquentes
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion type="single" collapsible className="mt-10" data-testid="faq-accordion">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-black/8">
                  <AccordionTrigger
                    data-testid={`faq-trigger-${i}`}
                    className="text-left font-heading text-base font-medium text-brand-ink hover:text-brand-violet hover:no-underline"
                  >
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-brand-mute">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-black/5 bg-brand-violet">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <FadeUp>
              <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Votre prochain entretien commence par un CV qui passe le filtre.
              </h2>
              <a
                href="#audit"
                data-testid="final-cta"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-violet transition-[background-color,transform] duration-200 hover:bg-brand-cream hover:-translate-y-0.5"
              >
                Analyser mon CV maintenant
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />

      {analyzing && <AnalysisOverlay onDone={() => navigate("/audit-b")} />}
    </div>
  );
}
