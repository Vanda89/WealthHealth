# Bootcamp Project WealthHealth - Faites passer une librairie jQuery vers React

## Scénario

Vous travaillez pour WealthHealth, une grande société financière, sur une application interne appelée HRnet qui gère les dossiers des employés. L'application utilise jQuery côté front-end, ce qui entraîne des problèmes de performance et des plaintes des utilisateurs.

La mission est de convertir l'application HRnet en React et de remplacer les plugins jQuery existants par des composants React pour améliorer les performances et la stabilité.

## Objectifs du projet

1. **Convertir l'ensemble du projet HRnet en React** :

   - Créer les pages "Create Employee" et "Employee List" en React.
   - Remplacer le système de stockage local par une gestion d'état centralisée.
   - Moderniser l'apparence de l'application tout en maintenant la cohérence avec le style actuel.

2. **Remplacer les plugins jQuery existants** :

   - Convertir **un des quatre plugins jQuery** suivants en React :
     - Plugin de sélection de date
     - Plugin de fenêtre modale (jQuery.modal.js)
     - Menus déroulants
     - Plugin pour les tableaux de données
   - Les autres plugins peuvent être remplacés par des composants React codés manuellement ou issus de librairies existantes.

3. **Tests de performance** :
   - Effectuer des audits de performance Lighthouse pour comparer les performances avant et après conversion.
   - Inclure des rapports détaillant les améliorations (temps de chargement, appels réseau, etc.).

## Instructions de conversion

### 1. Conversion du projet HRnet en React

- Recréer les principales fonctionnalités de l'application en React, y compris les pages de création d'employés et de liste des employés.
- Utiliser un système de gestion d'état pour remplacer le stockage local actuel.
- Si possible, ajouter des tests unitaires pour le code React.
- Tester manuellement l'application pour s'assurer que tout fonctionne correctement.

### 2. Plugins à convertir

Choisissez l'un des plugins jQuery suivants à convertir en un composant React :

- **Sélecteur de date** : Remplacer le sélecteur jQuery par une solution native React.
- **Fenêtre modale** : Créer une fenêtre modale réutilisable en React.
- **Menus déroulants** : Créer un composant de menu déroulant léger et performant.
- **Tableaux de données** : Créer un tableau réactif avec tri et pagination.

### 3. Tests de performance

- Effectuer un audit de performance Lighthouse avant et après la conversion pour évaluer les améliorations.
- Comparer les résultats de l'application jQuery avec ceux de l'application convertie en React.

### 4. Publication et documentation

- Publier le composant React converti sur npm ou GitHub.
- Documenter le composant avec des instructions claires sur son utilisation et son intégration dans HRnet.
- Fournir une documentation détaillée dans ce fichier README ainsi que des commentaires dans le code source.

## Installation

Clonez ce dépôt Git :

```bash
git clone https://github.com/Vanda89/WealthHealth
```

Installez les dépendances :

```bash
npm install
```

Lancez l'application :

```bash
npm run dev
```

## Tests

Pour exécuter les tests unitaires :

```bash
npx vitest
```

## Rapports de performance

Après la conversion, utilisez Lighthouse pour évaluer les performances et fournir un rapport avec les comparaisons entre l'ancienne version jQuery et la nouvelle version React.

[Lighthouse Hrnet jQuery](https://drive.google.com/file/d/1pqsVwL2KOlkcl6IScuWvxXjAxOBUaDxl/view?usp=drive_link)

[Lighthouse Hrnet React](https://drive.google.com/file/d/12cVjns6PFEfZucXs54XDzvf-IxpZWzdl/view?usp=drive_link)

## Modal-ReactJS-TailwindCSS

Plugin converti en React qui fournit une fenêtre modale flexible et accessible, idéale pour afficher des messages ou confirmer des actions.

Il comprend des icônes personnalisables, gère le focus pour une meilleure accessibilité et vous permet de fermer le modal en cliquant à l'extérieur.

Parfait pour notre cas d'utilisation dans lequel un message de confirmation est nécessaire lors de la validation du formulaire.

[Github de modal-reactjs-tailwindcss](https://github.com/Vanda89/modal-reactjs-tailwindcss)

[Page npm](https://www.npmjs.com/package/modal-reactjs-tailwindcs)
