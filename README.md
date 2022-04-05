Projet 7 OpenClassrooms

Créer un réseau social d'entreprise.

Réalisation complète d'une application web (frontend et backend)

Pour ce projet je devais réaliser un réseau social interne pour l'entreprise Groupomania afin que ses employés puissent communiquer entre eux par le biai de textes et d'images. L'accès au site nécessite une inscription puis une connexion. Les utilisateurs peuvent ensuite créer des postes et les supprimer. Un rôle administrateur existe afin de modérer le réseau social.

BACKEND :

L'application a été réalisée avec NodeJS et Express. Une API REST a été créée et utilisée. En ce qui concerne l'API, les règles de sécurité OWASP ont été respectées. Une base de donnée SQL a été utilisée via Sequelize.

FRONTEND :

Le site a été réalisé avec VueJS, Javascript, HTML, CSS et Vuetify.

INSTALLATION :

- Installer un logiciel de traitement SQL (ex: MySQL)
- Dans le dossier backend : npm install
- Créer le fichier .env dans le dossier backend
- Dans ce fichier, copier les variables d'environnement provenant du fichier .env.dist en utilisant vos variables.
- Dans le dossier backend, via le terminal : nodemon server
- Dans le dossier groupomania, via le terminal : npm install npm run serve
