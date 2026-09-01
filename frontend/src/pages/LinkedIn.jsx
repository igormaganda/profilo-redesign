import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Linkedin, ShieldCheck, Zap, Lock, Check, Star,
  Type, AlignLeft, Briefcase, Award, Users, Puzzle, Camera, MessageSquareQuote,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { MaskedLines, FadeUp } from "@/components/profilo/Reveal";
import { AnalysisOverlay } from "@/components/profilo/AnalysisOverlay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CRITERIA = [
  { icon: Type, title: "Headline", text: "Votre titre est-il percutant et optimisé pour les recherches recruteurs ?" },
  { icon: AlignLeft, title: "Section À propos", text: "Votre pitch donne-t-il envie de vous contacter ?" },
  { icon: Briefcase, title: "Expérience", text: "Vos expériences sont-elles chiffrées, avec des résultats ?" },
  { icon: Award, title: "Compétences", text: "Vos compétences clés sont-elles mises en avant ?" },
  { icon: Users, title: "Réseau", text: "Votre activité reflète-t-elle votre expertise ?" },
  { icon: Puzzle, title: "Cohérence", text: "Votre profil raconte-t-il une histoire crédible ?" },
  { icon: Camera, title: "Photo de profil", text: "Votre photo inspire-t-elle confiance et professionnalisme ?" },
  { icon: MessageSquareQuote, title: "Recommandations", text: "Vos recommandations renforcent-elles votre crédibilité ?" },
];

const FAQ_LINKEDIN = [
  {
    q: "Comment fonctionne l'audit gratuit ?",
    a: "Collez l'URL publique de votre profil (ou son texte). Notre IA analyse 8 critères et vous recevez votre score /100, un diagnostic et 6 actions concrètes en 30 secondes. Sans inscription.",
  },
  {
    q: "Que contient le rapport expert ?",
    a: "Tout l'audit gratuit, plus : le diagnostic détaillé par critère, 3 headlines réécrites, la section À propos réécrite, 2 expériences reformulées, le verdict recruteur et votre valeur estimée sur le marché.",
  },
  {
    q: "Mes données LinkedIn sont-elles protégées ?",
    a: "Nous ne demandons jamais vos identifiants LinkedIn. Seules les informations publiques du profil sont analysées, et vous pouvez supprimer vos données à tout moment.",
  },
  {
    q: "Pourquoi 6,99 € au lieu de 12,99 € ?",
    a: "C'est notre offre de lancement : nous préférons rendre le rapport expert accessible au plus grand nombre pendant la phase de démarrage.",
  },
  {
    q: "Convient-il aux profils non francophones ?",
    a: "Oui. L'audit fonctionne en français, anglais, espagnol et portugais (brésilien).",
  },
];

const STEPS = [
  { n: "01", tag: "Gratuit", title: "Collez votre profil", text: "Copiez votre URL LinkedIn ou le texte visible de votre profil." },
  { n: "02", tag: "30 sec", title: "Recevez votre audit", text: "Notre IA analyse 8 critères : score, diagnostic et actions concrètes." },
  { n: "03", tag: "6,99 €", title: "Débloquez l'expert", text: "Textes réécrits prêts à copier-coller et verdict recruteur." },
];

export default function LinkedIn() {
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
          Auditer mon profil
        </a>
      </SiteHeader>

      <main id="main-content">
        {/* HERO + FORM */}
        <section className="grain relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-20 md:px-8 lg:grid-cols-2 lg:items-start lg:pt-28">
            <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="eyebrow">
                Gratuit · Sans inscription
              </motion.p>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                <MaskedLines
                  lines={[
                    "Votre profil LinkedIn",
                    "vous coûte des",
                    <><span className="text-brand-violet">opportunités.</span></>,
                  ]}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-md text-base leading-relaxed text-brand-mute md:text-lg"
              >
                Collez l'URL de votre profil LinkedIn. Audit IA complet en 30 secondes : score sur 8 critères,
                diagnostic et plan d'action.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-brand-mute"
              >
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" /> Aucun identifiant requis</span>
                <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-brand-cyan" /> 8 critères analysés</span>
                <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-brand-cyan" /> Sans carte bancaire</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="mt-8 flex items-center gap-3"
              >
                <div className="flex -space-x-2.5">
                  {[["K", "bg-brand-violet"], ["L", "bg-brand-cyan"], ["T", "bg-brand-amber"]].map(([i, bg]) => (
                    <span key={i} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-cream font-heading text-xs font-semibold text-white ${bg}`}>{i}</span>
                  ))}
                </div>
                <p className="flex items-center gap-1.5 text-xs text-brand-mute">
                  <Star className="h-3.5 w-3.5 fill-brand-amber text-brand-amber" />
                  <span className="font-mono font-bold text-brand-ink">4,8/5</span> · 12 847+ profils analysés
                </p>
              </motion.div>
            </div>

            <FadeUp delay={0.3}>
              <form
                onSubmit={submit}
                id="audit"
                className="card-glow scroll-mt-24 rounded-2xl border border-black/5 bg-white p-6 md:p-8"
                data-testid="linkedin-form"
              >
                <div className="flex items-baseline justify-between">
                  <label htmlFor="linkedin-url" className="text-sm font-medium text-brand-ink">
                    L'URL de votre profil LinkedIn
                  </label>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand-cyan">Gratuit</span>
                </div>
                {pasteMode ? (
                  <textarea
                    data-testid="linkedin-paste-textarea"
                    rows={5}
                    placeholder="Collez ici le texte visible de votre profil (headline, à propos, expériences)…"
                    className="mt-3 w-full resize-none rounded-xl border border-black/10 bg-brand-cream/50 p-4 text-sm text-brand-ink outline-none transition-colors duration-200 placeholder:text-brand-mute/50 focus:border-brand-violet"
                  />
                ) : (
                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-black/10 bg-brand-cream/50 px-4 transition-colors duration-200 focus-within:border-brand-violet">
                    <Linkedin className="h-4 w-4 shrink-0 text-brand-violet" />
                    <input
                      id="linkedin-url"
                      type="url"
                      data-testid="linkedin-url-input"
                      placeholder="https://www.linkedin.com/in/votre-profil"
                      className="w-full bg-transparent py-3.5 text-sm text-brand-ink outline-none placeholder:text-brand-mute/50"
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setPasteMode((v) => !v)}
                  data-testid="linkedin-paste-toggle"
                  className="mt-3 text-sm text-brand-violet underline-offset-4 transition-colors duration-200 hover:underline"
                >
                  {pasteMode ? "J'ai mon URL sous la main" : "Pas votre URL ? Collez le texte de votre profil"}
                </button>
                <label className="mt-5 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    data-testid="linkedin-consent-checkbox"
                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-md border-2 border-brand-violet accent-brand-violet"
                  />
                  <span className="text-xs leading-relaxed text-brand-mute">
                    J'accepte que mon profil soit analysé par notre IA. Mes données ne sont jamais partagées et je peux
                    les supprimer à tout moment.{" "}
                    <Link to="/politique-confidentialite" className="text-brand-violet underline-offset-2 hover:underline">En savoir plus</Link>
                  </span>
                </label>
                <button
                  type="submit"
                  data-testid="linkedin-submit-button"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
                >
                  Auditer mon profil gratuitement
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-center font-mono text-[10px] text-brand-mute">
                  Gratuit · Résultat en 30 s · Sans inscription
                </p>
              </form>
            </FadeUp>
          </div>
        </section>

        {/* STEPS */}
        <section className="border-y border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <FadeUp>
              <p className="eyebrow">Simple et rapide</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Comment ça marche</h2>
            </FadeUp>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((s, i) => (
                <FadeUp key={s.n} delay={i * 0.12}>
                  <div className="group border-t-2 border-black/8 pt-6 transition-colors duration-300 hover:border-brand-violet">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-4xl font-bold text-brand-violet/25 transition-colors duration-300 group-hover:text-brand-violet">{s.n}</span>
                      <span className="font-mono text-xs text-brand-cyan">{s.tag}</span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-brand-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-mute">{s.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <FadeUp>
            <p className="eyebrow">Comparer les offres</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Gratuit vs rapport expert.
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FadeUp>
              <div className="card-glow flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8">
                <p className="font-heading text-lg font-semibold text-brand-ink">Audit gratuit</p>
                <p className="mt-2 font-mono text-3xl font-bold text-brand-ink">0 €<span className="text-sm font-normal text-brand-mute"> / audit</span></p>
                <p className="mt-2 text-sm text-brand-mute">Pour découvrir votre score et vos axes d'amélioration.</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {["Score global /100", "8 sous-scores détaillés", "Diagnostic en 3 phrases", "6 actions concrètes"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-brand-ink">
                      <Check className="h-4 w-4 shrink-0 text-brand-cyan" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#audit" data-testid="pricing-free-cta" className="mt-8 inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3.5 text-sm font-medium text-brand-ink transition-colors duration-200 hover:border-brand-violet/40 hover:text-brand-violet">
                  Essayer gratuitement
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="card-glow-strong relative flex h-full flex-col rounded-2xl border-2 border-brand-violet bg-white p-8">
                <span className="absolute -top-3 left-8 rounded-full bg-brand-violet px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  Offre de lancement
                </span>
                <p className="font-heading text-lg font-semibold text-brand-ink">Rapport expert</p>
                <p className="mt-2 font-mono text-3xl font-bold text-brand-ink">
                  6,99 €<span className="text-sm font-normal text-brand-mute"> / rapport</span>
                  <span className="ml-2 align-middle font-mono text-sm text-brand-mute line-through">12,99 €</span>
                </p>
                <p className="mt-2 text-sm text-brand-mute">Textes réécrits prêts à copier-coller + verdict recruteur.</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {["Tout l'audit gratuit", "Diagnostic détaillé par critère", "3 headlines réécrites", "Section À propos réécrite", "2 expériences reformulées", "Verdict recruteur", "Valeur estimée sur le marché"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-brand-ink">
                      <Check className="h-4 w-4 shrink-0 text-brand-violet" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#audit" data-testid="pricing-expert-cta" className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5">
                  Lancer l'audit
                </a>
                <p className="mt-3 text-center font-mono text-[10px] text-brand-mute">Paiement sécurisé · Accès immédiat</p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CRITERIA */}
        <section className="border-y border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
            <FadeUp>
              <p className="eyebrow">Analyse complète</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                8 critères passés au crible.
              </h2>
            </FadeUp>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CRITERIA.map((c, i) => (
                <FadeUp key={c.title} delay={i * 0.05}>
                  <div className="card-glow h-full rounded-2xl border border-black/5 bg-white p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                    <c.icon className="h-5 w-5 text-brand-violet" />
                    <h3 className="mt-4 font-heading text-sm font-semibold text-brand-ink">{c.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-brand-mute">{c.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.2}>
              <p className="mt-8 font-mono text-xs text-brand-mute">Chaque critère est noté sur 20 · Score global sur 100</p>
            </FadeUp>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-24 md:px-8">
          <FadeUp>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Des questions ?</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion type="single" collapsible className="mt-10" data-testid="linkedin-faq-accordion">
              {FAQ_LINKEDIN.map((item, i) => (
                <AccordionItem key={i} value={`li-faq-${i}`} className="border-black/8">
                  <AccordionTrigger data-testid={`linkedin-faq-trigger-${i}`} className="text-left font-heading text-base font-medium text-brand-ink hover:text-brand-violet hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-brand-mute">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </section>

        {/* FINAL CTA */}
        <section className="bg-brand-violet">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <FadeUp>
              <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Prêt à transformer votre profil LinkedIn ?
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/80">
                Collez votre profil et découvrez votre score en 30 secondes. Rejoint par 12 847+ professionnels.
              </p>
              <a
                href="#audit"
                data-testid="linkedin-final-cta"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-violet transition-[background-color,transform] duration-200 hover:bg-brand-cream hover:-translate-y-0.5"
              >
                Auditer mon profil
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />

      {analyzing && (
        <AnalysisOverlay
          title="Notre IA audite votre profil…"
          steps={["Lecture du profil", "Analyse des 8 critères", "Comparaison aux profils qui recrutent", "Rédaction du diagnostic"]}
          duration={4200}
          onDone={() => navigate("/audit-linkedin")}
        />
      )}
    </div>
  );
}
