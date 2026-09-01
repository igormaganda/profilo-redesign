import { Link } from "react-router-dom";
import { ArrowRight, Check, Package, ShieldCheck, Zap } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { MaskedLines, FadeUp } from "@/components/profilo/Reveal";

const PLANS = [
  {
    id: "free",
    name: "Découverte",
    price: "0 €",
    period: "/ audit",
    oldPrice: null,
    tagline: "Pour découvrir votre score et vos axes d'amélioration.",
    features: ["Score LinkedIn /100 ou score d'alignement CV", "Sous-scores détaillés", "Diagnostic synthétique", "6 actions concrètes"],
    cta: "Commencer gratuitement",
    to: "/linkedin",
    highlight: false,
  },
  {
    id: "linkedin",
    name: "Audit LinkedIn Expert",
    price: "6,99 €",
    period: "/ rapport",
    oldPrice: "12,99 €",
    tagline: "Textes réécrits prêts à copier-coller + verdict recruteur.",
    features: ["Tout l'audit gratuit", "3 headlines réécrites", "Section À propos réécrite", "2 expériences reformulées", "Verdict recruteur", "Valeur estimée sur le marché"],
    cta: "Choisir LinkedIn Expert",
    to: null,
    highlight: false,
  },
  {
    id: "ats",
    name: "Analyse ATS Premium",
    price: "6,99 €",
    period: "/ analyse",
    oldPrice: null,
    tagline: "Votre CV optimisé pour l'offre, prêt à envoyer.",
    features: ["Toute l'analyse gratuite", "CV optimisé complet", "6 designs PDF vectoriels", "Export illimité pendant 24 h"],
    cta: "Choisir ATS Premium",
    to: null,
    highlight: false,
  },
  {
    id: "bundle",
    name: "Le Bundle",
    price: "10,99 €",
    period: "paiement unique",
    oldPrice: "13,98 €",
    badge: "-21 %",
    tagline: "Les deux rapports premium + 3 analyses ATS supplémentaires.",
    features: ["Audit LinkedIn Premium", "Analyse ATS Premium", "3 analyses ATS supplémentaires", "Priorité de traitement", "Idéal pour plusieurs candidatures"],
    cta: "Obtenir le bundle",
    to: null,
    highlight: true,
  },
];

export default function Bundle() {
  const buy = (plan) => {
    toast.info(`Paiement simulé — « ${plan.name} » (${plan.price}).`, {
      description: "Démo : aucun paiement réel n'a été effectué.",
    });
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <SiteHeader nav>
        <a
          href="#plans"
          data-testid="header-cta"
          className="rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-cyan-500 hover:-translate-y-0.5"
        >
          Voir les offres
        </a>
      </SiteHeader>

      <main id="main-content">
        {/* HERO */}
        <section className="grain relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:px-8 lg:pt-28">
            <p className="eyebrow">Offre de lancement</p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              <MaskedLines
                lines={[
                  "LinkedIn + CV :",
                  <>le duo à <span className="text-brand-violet">10,99 €</span></>,
                  "au lieu de 13,98 €.",
                ]}
              />
            </h1>
            <FadeUp delay={0.7}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-mute md:text-lg">
                Audit LinkedIn Premium + Analyse ATS Premium + 3 analyses ATS supplémentaires.
                Une candidature cohérente de bout en bout — et 21 % d'économie.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-brand-mute">
                <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-brand-cyan" /> Accès immédiat</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" /> Paiement sécurisé</span>
                <span className="flex items-center gap-1.5"><Package className="h-3.5 w-3.5 text-brand-cyan" /> -21 % vs achat séparé</span>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* PLANS */}
        <section id="plans" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
          <FadeUp>
            <p className="eyebrow">Toutes les offres</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Choisissez votre formule.
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.id} delay={i * 0.08}>
                <div
                  data-testid={`plan-${plan.id}`}
                  className={`relative flex h-full flex-col rounded-2xl p-7 ${
                    plan.highlight
                      ? "card-glow-strong border-2 border-brand-violet bg-white"
                      : "card-glow border border-black/5 bg-white"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-7 rounded-full bg-brand-violet px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                      {plan.badge} · le plus choisi
                    </span>
                  )}
                  <p className="font-heading text-base font-semibold text-brand-ink">{plan.name}</p>
                  <p className="mt-3 font-mono text-3xl font-bold text-brand-ink">
                    {plan.price}
                    <span className="ml-1 text-xs font-normal text-brand-mute">{plan.period}</span>
                  </p>
                  {plan.oldPrice && (
                    <p className="mt-1 font-mono text-xs text-brand-mute line-through">{plan.oldPrice}</p>
                  )}
                  <p className="mt-3 text-xs leading-relaxed text-brand-mute">{plan.tagline}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs leading-relaxed text-brand-ink">
                        <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.highlight ? "text-brand-violet" : "text-brand-cyan"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.to ? (
                    <Link
                      to={plan.to}
                      data-testid={`plan-cta-${plan.id}`}
                      className="mt-7 inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-brand-ink transition-colors duration-200 hover:border-brand-violet/40 hover:text-brand-violet"
                    >
                      {plan.cta}
                    </Link>
                  ) : (
                    <button
                      onClick={() => buy(plan)}
                      data-testid={`plan-cta-${plan.id}`}
                      className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[background-color,transform] duration-200 hover:-translate-y-0.5 ${
                        plan.highlight
                          ? "bg-brand-violet text-white hover:bg-violet-500"
                          : "bg-brand-cyan text-white hover:bg-cyan-500"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-center font-mono text-xs text-brand-mute">
              Paiement unique, sans abonnement · Accès immédiat · Résultats disponibles 24 h
            </p>
          </FadeUp>
        </section>

        {/* WHY BUNDLE */}
        <section className="border-y border-black/5 bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
            <FadeUp>
              <p className="eyebrow">Pourquoi le bundle</p>
              <h2 className="mt-3 max-w-lg font-heading text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                Les recruteurs croisent LinkedIn et CV. Systématiquement.
              </h2>
            </FadeUp>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { n: "83 %", text: "des recruteurs consultent LinkedIn avant de contacter un candidat" },
                { n: "75 %", text: "des CV sont filtrés par un ATS avant d'être lus par un humain" },
                { n: "×2", text: "de réponses en plus quand profil et CV racontent la même histoire" },
              ].map((s, i) => (
                <FadeUp key={s.n} delay={i * 0.08}>
                  <div className="rounded-2xl border border-black/5 bg-brand-cream p-7">
                    <p className="font-mono text-3xl font-bold text-brand-violet">{s.n}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-mute">{s.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-brand-violet">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <FadeUp>
              <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Une seule décision pour aligner toute votre candidature.
              </h2>
              <a
                href="#plans"
                data-testid="bundle-final-cta"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-violet transition-[background-color,transform] duration-200 hover:bg-brand-cream hover:-translate-y-0.5"
              >
                Obtenir le bundle — 10,99 €
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </FadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
