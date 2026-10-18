# USTAAD AI — Application coranique Web et Windows

## Situation du dépôt
Ce dépôt contient une **application Web de découverte dans `index.html`**, prévue pour être servie par GitHub Pages. Elle affiche 114 sourates grâce à une API publique, lit le texte arabe, propose un récitateur, suit les répétitions localement et permet d'exporter la progression. **Une connexion Internet est nécessaire.**

Le logiciel **USTAAD AI Fusion V6 pour Windows (FastAPI + SQLite et corpus local)** reste distribué séparément en archive ZIP, car ses fichiers volumineux ne sont pas encore intégrés au dépôt. L'interface Web GitHub Pages n'utilise pas la base SQLite de cette archive.

## Tester l'interface Web
1. Ouvrir `index.html` dans le navigateur (une connexion Internet est indispensable).
2. Pour publier sous GitHub Pages : **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**, après fusion de la branche de correction.
3. L'adresse attendue après publication est `https://djama77.github.io/Ustaad-Ai/`, sous réserve que GitHub Pages soit activé et que le déploiement réussisse.

## Windows — archive V6
1. Extraire tous les fichiers de l'archive ZIP V6.
2. Garder `backend/`, `web/` et `DEMARRAGE_WINDOWS.bat` à la racine du dossier.
3. Installer Python 3.10+ et double-cliquer sur `DEMARRAGE_WINDOWS.bat`.
4. Ouvrir `http://127.0.0.1:8000`.

Le texte local de la version Windows peut fonctionner hors ligne après installation. Les enregistrements audio distants exigent Internet, sauf cache déjà disponible.

## Limitations connues
- Aucun APK Android disponible dans ce dépôt.
- Pas de professeur conversationnel ou de correction automatique du tajwîd.
- Le microphone ne sert qu'à enregistrer et réécouter localement dans la version ZIP.
- La version Web dépend de `api.alquran.cloud` pour le texte et de `everyayah.com` pour l'audio. Leur disponibilité n'est pas garantie.
- Le corpus et les licences des sources tierces doivent être vérifiés indépendamment avant une diffusion officielle.
- Les progressions sont enregistrées sur l'appareil, pas dans un compte utilisateur.

## Contrôle qualité
Le workflow GitHub Actions `validate-web.yml` vérifie que l'interface existe et que le JavaScript est syntaxiquement valide (Node.js). Ce test ne valide **ni** les performances des API externes, **ni** la conformité religieuse du texte coranique.

## Références
Projet Natlu à étudier pour une intégration future : https://github.com/Recite-Quran/Natlu. Aucune reconnaissance de récitation Natlu n'est intégrée ici.
