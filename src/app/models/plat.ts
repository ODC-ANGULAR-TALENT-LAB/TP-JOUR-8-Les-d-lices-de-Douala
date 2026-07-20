/** Catégories de la carte du restaurant. */
export type Categorie = 'Plats' | 'Grillades' | 'Végétarien' | 'Boissons';

/** Un plat de la carte « Délices de Douala ». */
export interface Plat {
  id: string;
  nom: string;
  /** Prix en FCFA (XAF). */
  prix: number;
  categorie: Categorie;
  disponible: boolean;
  /** Description du plat, affichée au clic. */
  description: string;
  /** Ids des restaurants (voir Restaurant) qui proposent ce plat. */
  restaurantIds: number[];
}

/** Une ligne de la commande en cours : un plat et sa quantité. */
export interface LigneCommande {
  id: string;
  plat: Plat;
  quantite: number;
}
