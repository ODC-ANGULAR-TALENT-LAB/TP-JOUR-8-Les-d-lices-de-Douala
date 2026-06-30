# Délices de Douala ★★★★★

Système de notation de restaurants camerounais à 5 étoiles, construit avec
Angular 22 (Standalone Components, Signals, `input()` / `output()`).

L'application affiche une grille de 6 restaurants de Douala. Chaque visiteur peut
attribuer une note de 1 à 5 étoiles à un restaurant, et le header indique en temps
réel combien de restaurants ont été notés.

## Lien Vercel

> _À compléter après le déploiement :_ https://...vercel.app

## Fonctionnalités

- Grille de 6 cartes de restaurants (données réelles de Douala).
- Notation par étoiles cliquables avec effet de survol (les étoiles se dorent).
- Affichage de la note `(X/5)` ou `Cliquez !` si le restaurant n'est pas noté.
- Compteur en temps réel `★ X / 6 restaurants notés` dans le header.
- Re-noter un restaurant déjà noté ne modifie pas le compteur.

## Architecture des composants

L'application propage `input()` / `output()` sur 3 niveaux :

```
App
├── Header              [ratedCount], [totalCount]
└── RestaurantList      [restaurants]  (restaurantRated)
    └── RestaurantCard  [restaurant]   (restaurantRated)
        └── StarRating  [currentRating] (ratingChanged)
```

- **App** — détient le signal des 6 restaurants, calcule le nombre de restaurants
  notés via `computed()` et met à jour les notes de façon immuable (`.update()` + `.map()`).
- **Header** — affiche le titre et le compteur reçu en input.
- **RestaurantList** — boucle `@for` sur les restaurants et retransmet l'output.
- **RestaurantCard** — affiche les infos d'un restaurant et la note.
- **StarRating** — gère l'affichage et le survol des 5 étoiles, émet la note choisie.

Le modèle `Restaurant` est défini dans `src/app/models/restaurant.ts`.

## Démarrage

```bash
npm install
npm start
```

Application disponible sur `http://localhost:4200/`.

## Build de production

```bash
npm run build
```

Les artefacts sont générés dans `dist/`.
