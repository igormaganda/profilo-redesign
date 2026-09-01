import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/profilo/SiteHeader";
import { FadeUp } from "@/components/profilo/Reveal";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <SiteHeader nav />

      <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24" id="main-content">
        <FadeUp>
          <Link
            to="/"
            data-testid="legal-back-link"
            className="inline-flex items-center gap-2 text-sm text-brand-mute transition-colors duration-200 hover:text-brand-violet"
          >
            <ArrowLeft className="h-4 w-4" /> Retour
          </Link>
          <p className="eyebrow mt-8">Document légal</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-brand-mute">
            La présente politique informe les utilisateurs du site profilo.app de la manière dont leurs données
            personnelles sont collectées, traitées et protégées, conformément au Règlement Général sur la Protection
            des Données (RGPD — Règlement UE 2016/679). Dernière mise à jour : juillet 2026.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <article className="legal mt-4 text-brand-ink" data-testid="legal-content">
            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données est :</p>
            <p>
              <strong>Cité Tech</strong> (Association loi 1901 ou assimilée)
              <br />SIREN : 847 978 509
              <br />123 Rue Édouard Vaillant, 93140 Bondy, France
              <br />
              <a href="mailto:contact@profilo.app" className="text-brand-violet underline-offset-2 hover:underline">contact@profilo.app</a>
            </p>

            <h2>2. Délégué à la protection des données</h2>
            <p>
              Compte tenu de la nature et du volume des données traitées, Cité Tech n'est pas tenu de désigner un
              délégué à la protection des données (DPO). Toute question relative à la protection des données peut
              être adressée à :{" "}
              <a href="mailto:contact@profilo.app" className="text-brand-violet underline-offset-2 hover:underline">contact@profilo.app</a>.
            </p>

            <h2>3. Données collectées</h2>
            <p>Profilo collecte les catégories de données suivantes :</p>
            <ul>
              <li><strong>Données d'identification</strong> : adresse e-mail (uniquement lors de la création d'un compte), nom d'affichage du profil LinkedIn analysé.</li>
              <li><strong>Données professionnelles</strong> : contenu du profil LinkedIn ou du CV soumis pour analyse (headline, résumé, expériences, compétences, formation, recommandations).</li>
              <li><strong>Données de connexion</strong> : adresse IP, type de navigateur, langue préférée, pages visitées, durée de visite.</li>
              <li><strong>Données de transaction</strong> : historique d'achats, reçus de paiement (traités par Stripe, notre prestataire de paiement sécurisé).</li>
            </ul>

            <h2>4. Finalités du traitement</h2>
            <p>Les données personnelles sont traitées pour les finalités suivantes :</p>
            <ul>
              <li>Fourniture des services d'audit LinkedIn et d'analyse CV/ATS.</li>
              <li>Amélioration et personnalisation des services proposés.</li>
              <li>Envoi de communications commerciales (uniquement avec consentement préalable).</li>
              <li>Support client et réponse aux demandes.</li>
              <li>Prévention de la fraude et sécurité du service.</li>
            </ul>

            <h2>5. Base légale</h2>
            <p>Les traitements reposent sur les fondements suivants :</p>
            <ul>
              <li><strong>Consentement</strong> (art. 6.1.a RGPD) : analyse de votre profil LinkedIn ou CV, envoi de communications commerciales.</li>
              <li><strong>Exécution du contrat</strong> (art. 6.1.b RGPD) : fourniture des services premium payants.</li>
              <li><strong>Intérêt légitime</strong> (art. 6.1.f RGPD) : amélioration du service, sécurité et prévention de la fraude.</li>
            </ul>

            <h2>6. Durées de conservation</h2>
            <ul>
              <li><strong>Résultats d'audit</strong> : 24 heures après la fin de la session (suppression automatique ensuite).</li>
              <li><strong>Données de compte</strong> : durée de la relation contractuelle, puis 3 ans après le dernier contact.</li>
              <li><strong>Données de paiement</strong> : 5 ans à compter de la clôture de l'exercice (obligation légale).</li>
              <li><strong>Données de connexion</strong> : 13 mois maximum.</li>
            </ul>

            <h2>7. Vos droits</h2>
            <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès</strong> : obtenir confirmation et informations sur le traitement de vos données.</li>
              <li><strong>Droit de rectification</strong> : faire corriger des données inexactes.</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données (droit à l'oubli).</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré.</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données.</li>
              <li><strong>Droit à la limitation du traitement</strong>.</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez le responsable du traitement à :{" "}
              <a href="mailto:contact@profilo.app" className="text-brand-violet underline-offset-2 hover:underline">contact@profilo.app</a>.
              Vous recevrez une réponse dans un délai d'un mois. Si vous estimez que le traitement n'est pas conforme
              au RGPD, vous pouvez saisir la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-violet underline-offset-2 hover:underline">cnil.fr</a>.
            </p>

            <h2>8. Cookies et technologies similaires</h2>
            <p>Le site utilise des cookies pour :</p>
            <ul>
              <li>Mémoriser vos préférences de langue et de thème (cookies <span className="font-mono text-xs">profilo_locale</span>, <span className="font-mono text-xs">profilo-theme</span>).</li>
              <li>Assurer le fonctionnement technique du site (cookies de session).</li>
              <li>Mesurer l'audience de manière anonymisée.</li>
            </ul>

            <h2>9. Modifications</h2>
            <p>
              Cette politique peut être modifiée à tout moment. Toute modification sera publiée sur cette page avec
              sa date de mise à jour. Nous vous invitons à la consulter régulièrement.
            </p>
          </article>
        </FadeUp>
      </main>

      <SiteFooter />
    </div>
  );
}
