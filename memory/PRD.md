# PRD — Profilo · Redesign parcours ATS

## Problème initial (statement)
« Build a landing page : appuie-toi sur le brief ci-joint pour refondre le design et l'ergonomie du projet https://profilo-v8.vercel.app/ats. Génère les en HTML/CSS. »
Brief joint : BRIEF-DESIGN-PARCOURS-ATS.md — refonte du parcours dépôt CV → rapport → déblocage premium → choix du design → téléchargement PDF.

## Choix utilisateur
- Directions design : **A et B** (comparaison)
- Écrans : **parcours complet** (/ats + rapport + page choix du design)
- Langue : **Français**
- Livraison : **React intégré** + **fichiers HTML/CSS autonomes** (/app/mockups/)

## Personas
- Candidat francophone stressé, en cours de candidature, ~50 % mobile (375 px)
- Équipe Profilo : compare deux directions de rapport avant implémentation Next.js

## Design system (conservé du brief §6)
- Fond crème #FAFAF8, cartes blanches + halo violet, accents violet #7053cd / cyan #06b6d4 (CTA primaires) / ambre #a16207
- Poppins (titres), Work Sans (texte), JetBrains Mono (données, tabular-nums)
- ScoreRing, chips mots-clés, vignettes A4 210/297 en `zoom` (jamais transform: scale), 1 CTA primaire par écran, fil d'Ariane 4 étapes

## Implémenté (01/09/2026)
- **/ats** : hero avec reveal ligne par ligne masquée, aperçu CV A4 avec tilt 3D souris + parallaxe scroll, marquee éditorial lent, formulaire complet (upload/paste, offre, rôle, consentement), overlay stepper 4 étapes + chrono (simulé 4,8 s) → redirect /audit-a, sections Comment ça marche / Features / Comparaison A-B / cross-sell LinkedIn / FAQ / CTA final
- **/audit-a (Direction A « Diagnostic clinique »)** : bande Verdict (ScoreRing XL 62, frein n°1, gain +24), Preuves 2×2 jauges, chips trouvés/manquants, santé par section, Ordonnance 3 actions numérotées, carte Avant/Après avec teaser flouté + déblocage en place (transition 600 ms)
- **/audit-b (Direction B « Studio progressif »)** : split 40/60 diagnostic compact / aperçu A4 live tronqué à 60 % + watermark diagonal, déblocage in-place, galerie 6 templates en rangée, onglets « Diagnostic | Mon CV » sur mobile
- **/cv** : galerie 6 templates (paris/london/tokyo/stockholm/berlin/milan) à coche ronde aria-pressed, aperçu A4 live sticky, CTA « Télécharger le PDF » + toast de succès avec rappel 24 h
- **Maquettes HTML/CSS autonomes** : /app/mockups/{styles.css, ats.html, audit-a.html, audit-b.html, cv.html} — pures HTML/CSS (+micro-JS pour onglets/toggles), mêmes tokens, contenu français identique
- Toggle démo « état premium » sur les deux rapports ; navigation croisée A/B
- Motion : framer-motion (reveals, ring animé, unblur 600 ms) + lenis (scroll inertiel)

## État des données
- TOUTES les données sont MOCKED (score 62, mots-clés, CV de « Camille Moreau », 6 templates rendus en CSS). Aucun backend métier, aucun paiement réel.

## Backlog priorisé
- P0 : Brancher l'API réelle d'analyse ATS (LLM) derrière le formulaire /ats
- P0 : Trancher Direction A vs B (test utilisateur 5 s : « quel est le problème n°1 ? »)
- P1 : Export PDF vectoriel réel des 6 templates
- P1 : Paiement Stripe 6,99 € + gate premium serveur (jamais de vrai texte côté client avant 200)
- P2 : i18n 4 locales (fr/en/es/pt-BR) pour tout libellé
- P2 : Direction C « Récit guidé » en bonus, états d'erreur (échec analyse + retry auto, audit expiré 24 h)

## Prochaines tâches
1. ~~Recueillir l'avis utilisateur sur A vs B~~ → **Direction B retenue** (01/09/2026)
2. Connecter le formulaire à une vraie analyse IA
3. Implémenter Stripe + verify-session
4. Générer le PDF réel depuis le template choisi

---

## Refonte globale de l'application (01/09/2026 — itération 2)

**Demande** : refondre tout le design de https://profilo-v8.vercel.app/ (y compris LinkedIn, bundle, ≥1 page légale), en respectant la stack cible Next.js 16 / Tailwind 4 (tokens) / shadcn / lucide / framer-motion / next-themes (dark en oklch). **CV : Direction B retenue (Studio progressif)**.

### Implémenté
- **/** Accueil : hero masked-reveal, visuel double carte flottante (audit LinkedIn 51 + CV 78), marquee, 2 cartes outils, parcours 3 étapes, témoignages (4,8/5), section confidentialité, teaser bundle
- **/linkedin** : landing audit (URL ou texte collé, consentement, overlay stepper paramétrable) → **/audit-linkedin** : rapport mock (score 51/100, 8 critères /20, diagnostic 3 phrases, 6 actions, teaser premium headlines/verdict/valeur de marché, déblocage 600 ms, cross-sell ATS + bundle)
- **/bundle** : 4 formules (Découverte 0 €, LinkedIn Expert 6,99 €, ATS Premium 6,99 €, Bundle 10,99 € −21 %), stats 83 %/75 %/×2, CTAs simulés
- **/politique-confidentialite** : page légale RGPD complète en français (9 sections)
- **Thème clair/sombre** : toggle global (localStorage `profilo-theme`), dark en tokens oklch, le papier A4 reste blanc en dark
- **Bannière cookies** : Refuser/Accepter, fixe bas-droite, ne chevauche aucun CTA, persistée
- Direction B canonique : /ats → /audit-b ; /audit redirige vers /audit-b ; Direction A conservée sur /audit-a pour archive
- Maquettes statiques étendues : /app/mockups/ → index.html, linkedin.html, audit-linkedin.html, bundle.html, politique-confidentialite.html (+ ats/audit-a/audit-b/cv existants), toggle dark partagé

### Toujours MOCKED
Données, paiements (6,99 €/10,99 € simulés), analyses IA, PDF.

### Backlog mis à jour
- P0 : vraie analyse IA (LinkedIn + ATS) derrière les formulaires
- P0 : Stripe + gate premium serveur
- P1 : export PDF réel des 6 templates
- P1 : i18n 4 locales
- P2 : mentions légales + CGV en pages dédiées, états d'erreur (retry auto, audit expiré)
