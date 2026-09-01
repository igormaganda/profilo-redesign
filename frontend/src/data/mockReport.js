export const REPORT = {
  score: 62,
  gain: 24,
  topGap: "SQL absent des compétences",
  verdict: "Votre CV matche à 62 % avec cette offre.",
  role: "Product Ops Manager — Spendesk",
  metrics: [
    { id: "alignement", label: "Alignement offre / CV", value: 62, max: 100, display: "62 %" },
    { id: "lisibilite", label: "Lisibilité ATS", value: 84, max: 100, display: "84 / 100" },
    { id: "mots-cles", label: "Mots-clés couverts", value: 53, max: 100, display: "9 / 17" },
    { id: "sections", label: "Sections conformes", value: 60, max: 100, display: "3 / 5" },
  ],
  keywordsFound: [
    "Gestion de projet",
    "React",
    "Figma",
    "Agile",
    "Analyse de données",
    "Communication",
    "KPI",
    "A/B testing",
    "Roadmap",
  ],
  keywordsMissing: ["SQL", "Python", "Tableau", "SEO", "Budget", "Stakeholders", "Jira", "Growth"],
  gaps: [
    { title: "SQL absent des compétences", detail: "L'offre le mentionne 4 fois — votre CV, zéro." },
    { title: "Résumé trop générique (45 / 100)", detail: "Il ne cite ni le rôle visé, ni vos chiffres clés." },
    { title: "Réalisations non chiffrées", detail: "2 expériences sur 3 sans aucun résultat mesurable." },
  ],
  actions: [
    {
      title: "Ajoutez « SQL », « Python » et « Tableau » à vos compétences",
      detail: "8 mots-clés de l'offre sont absents de votre CV. C'est le premier filtre de l'ATS.",
    },
    {
      title: "Réécrivez votre résumé autour du rôle visé",
      detail: "Mentionnez « Product Ops » et vos 2 résultats les plus chiffrés dès les 3 premières lignes.",
    },
    {
      title: "Chiffrez deux réalisations par expérience",
      detail: "Les recruteurs scannent les nombres. « +38 % de conversion » vaut mieux qu'un paragraphe.",
    },
  ],
  sections: [
    { label: "Titre", value: 90 },
    { label: "Résumé", value: 45 },
    { label: "Expérience", value: 70 },
    { label: "Compétences", value: 55 },
    { label: "Formation", value: 80 },
  ],
};

export const CANDIDATE = {
  name: "Camille Moreau",
  role: "Product Ops Manager",
  contact: ["camille.moreau@mail.fr", "06 12 34 56 78", "Lyon", "linkedin.com/in/cmoreau"],
  summary:
    "8 ans d'expérience en gestion de projets digitaux. Pilotage de roadmaps produit, analyse de données SQL et coordination d'équipes transverses. +38 % de conversion sur la refonte du parcours d'onboarding.",
  skills: ["Gestion de projet", "SQL", "Python", "Tableau", "Agile", "Roadmap", "KPI", "Stakeholders"],
  experiences: [
    {
      title: "Cheffe de projet digital",
      org: "Agence Novamedia",
      period: "2021 — 2025",
      points: [
        "Pilotage de 12 projets web, budget cumulé 400 k€",
        "+38 % de conversion après refonte du parcours utilisateur",
        "Animation d'une équipe transverse de 6 personnes",
      ],
    },
    {
      title: "Chef de projet junior",
      org: "Studio Kraft",
      period: "2018 — 2021",
      points: [
        "Lancement de 20+ sites vitrines et e-commerce",
        "Mise en place d'un reporting KPI hebdomadaire sous Tableau",
      ],
    },
  ],
  education: [{ title: "Master Management digital", org: "IAE Lyon", period: "2016 — 2018" }],
};

export const TEMPLATES = [
  { id: "paris", label: "Paris", tagline: "L'élégant" },
  { id: "london", label: "London", tagline: "Le structuré" },
  { id: "tokyo", label: "Tokyo", tagline: "Le minimal" },
  { id: "stockholm", label: "Stockholm", tagline: "Le fonctionnel" },
  { id: "berlin", label: "Berlin", tagline: "L'affirmé" },
  { id: "milan", label: "Milan", tagline: "Le raffiné" },
];

export const MARQUEE_ITEMS = [
  "12 847+ profils audités",
  "Score moyen : 51 / 100",
  "« Profilo m'a décroché 3 entretiens » — Karim B.",
  "Analyse en 30 secondes",
  "Propulsé par l'IA",
  "8 critères évalués",
  "Rapport expert : 6,99 € — offre de lancement",
  "« Immédiatement actionnable » — Léa M.",
];

export const FAQ = [
  {
    q: "Qu'est-ce qu'un ATS ?",
    a: "Un ATS (Applicant Tracking System) est un logiciel utilisé par la plupart des grandes entreprises pour filtrer automatiquement les CV. Si le vôtre ne contient pas les bons mots-clés, il peut être rejeté avant même qu'un humain ne le lise.",
  },
  {
    q: "Le service est-il vraiment gratuit ?",
    a: "Oui. L'analyse (score d'alignement, mots-clés, analyse par section, recommandations) est gratuite et sans inscription. Aucune carte bancaire n'est demandée.",
  },
  {
    q: "Mes données sont-elles protégées ?",
    a: "Votre CV est anonymisé (e-mails, téléphones et coordonnées sensibles supprimés) avant d'être envoyé à l'IA. Vos résultats sont supprimés après 24 h.",
  },
  {
    q: "Quels formats de CV sont acceptés ?",
    a: "PDF et DOCX. Vous pouvez aussi coller le texte directement si vous n'avez pas le fichier sous la main.",
  },
  {
    q: "Combien de temps prend l'analyse ?",
    a: "Environ 30 secondes. Vous obtenez un rapport complet : score, mots-clés manquants, analyse section par section et version optimisée.",
  },
  {
    q: "Puis-je analyser plusieurs CV ?",
    a: "Oui, autant que vous voulez — par exemple pour adapter votre CV à différentes offres.",
  },
];
