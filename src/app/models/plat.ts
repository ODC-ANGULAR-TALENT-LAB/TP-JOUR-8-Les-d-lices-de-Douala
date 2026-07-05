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
}
