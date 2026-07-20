
export interface Restaurant {
  id: number;
  name: string;
  district: string;
  specialty: string;
  currentRating: number; // 0 = non noté
}

export interface RatingChange {
  id: number;
  rating: number;
}

export interface Plat {
  id: number;
  name: string;
  district: string;
  specialty: string;
  currentRating: number;
  description: string;
  prix: number;   //en FCFA
}
export interface LigneCommande {
  id: number;
  plat: Plat;
  quantité: number;
}