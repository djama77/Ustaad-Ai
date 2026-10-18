# USTAAD AI — Professeur coranique gratuit

Application expérimentale d'apprentissage du Coran en arabe, en cours de développement.

## Version de travail
**USTAAD AI Fusion V6** : projet Python / FastAPI / SQLite + interface Web.
- Navigation dans 114 sourates et 6 236 versets ;
- Récitation audio distante par verset, répétition et enregistrement vocal ;
- Suivi de mémorisation enregistré localement ;
- Préparation à l'intégration de la reconnaissance vocale de Natlu.

**Important :** la correction automatique de la récitation et du tajwîd n'est pas encore intégrée et validée. Le code n'est pas encore une APK Android testée. Le téléchargement audio nécessite un service tiers.

## Installer la version V6
Décompresser l'archive de la version V6 dans ce dépôt (en conservant `backend/`, `web/` et `DEMARRAGE_WINDOWS.bat` à la racine), puis sur Windows lancer `DEMARRAGE_WINDOWS.bat`, ou installer `backend/requirements.txt` et démarrer le serveur selon les instructions du projet.

**Cette première publication GitHub ne contient pas encore toute l'archive V6** (notamment la base SQLite volumineuse). L'ajout des sources complètes reste nécessaire pour rendre ce dépôt exécutable.

## Intégration Natlu
Projet d'étude : https://github.com/Recite-Quran/Natlu

Ne pas recopier le code tiers sans confirmer les licences et obligations applicables. Vérifier les droits du texte coranique, des traductions et des enregistrements audio avant redistribution.

## Sécurité et validation
Ne pas publier de clés API, de données personnelles, de fichiers audio d'élèves ou de secrets. Vérifier indépendamment l'intégrité du texte coranique avant diffusion officielle.
