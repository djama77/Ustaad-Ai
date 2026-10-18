# État du dépôt — USTAAD AI

## Dépôt GitHub
La création du dépôt et du README a été effectuée directement via le connecteur GitHub.

## Livraison V6
Le livrable V6 complet est une archive ZIP produite dans la conversation ChatGPT d'origine. **L'archive n'a pas encore été extraite ni importée dans ce dépôt.**

Fichiers attendus au niveau racine :
- `backend/main.py`
- `backend/requirements.txt`
- `backend/hafs_verses.json`
- `backend/quran.sqlite` (base volumineuse, contrôler provenance/droits)
- `web/index.html`
- `web/manifest.webmanifest`
- `DEMARRAGE_WINDOWS.bat`

Le dossier `sources/` contient des extraits/projets tiers ; **ne pas les publier sans vérifier les licences et provenances.**

## Pour terminer le dépôt
1. Décompresser le ZIP USTAAD AI Fusion V6.
2. Déplacer le contenu de `USTAAD_AI_FINAL/` à la racine du clone Git local.
3. Revoir la licence des projets tiers, les contenus coraniques et la confidentialité.
4. Ajouter `backend/`, `web/`, `DEMARRAGE_WINDOWS.bat`, puis pousser avec Git. 
5. Vérifier le serveur et le fonctionnement navigateur avant publication d'une APK.

La correction tajwîd Natlu n'a pas été fusionnée avec le backend FastAPI.
