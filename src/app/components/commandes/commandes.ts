import { Component, inject, signal } from '@angular/core';
import { Plat, LigneCommande as LigneCommandeModel } from '../../models/plat';
import { MenuService } from '../../services/menu';
import { PlatCard } from '../plat-card/plat-card';
import { LigneCommande } from '../ligne-commande/ligne-commande';

@Component({
  selector: 'app-commandes',
  imports: [PlatCard, LigneCommande],
  templateUrl: './commandes.html',
  styleUrls: ['./commandes.css'],
})
export class Commandes {
  private readonly menuService = inject(MenuService);

  /** La carte vient de la couche de données, plus de liste en dur. */
  plats = this.menuService.platsFiltres;

  commandes = signal<LigneCommandeModel[]>([]);

  ajouterPlat(plat: Plat) {
    this.commandes.update((lignes) => {
      const existante = lignes.find((ligne) => ligne.plat.id === plat.id);
      if (existante) {
        return lignes.map((ligne) =>
          ligne.plat.id === plat.id
            ? { ...ligne, quantite: ligne.quantite + 1 }
            : ligne
        );
      }
      return [...lignes, { id: plat.id, plat, quantite: 1 }];
    });
  }

  incrementerLigne(ligne: LigneCommandeModel) {
    this.commandes.update((lignes) =>
      lignes.map((l) =>
        l.id === ligne.id ? { ...l, quantite: l.quantite + 1 } : l
      )
    );
  }

  decrementerLigne(ligne: LigneCommandeModel) {
    this.commandes.update((lignes) =>
      lignes
        .map((l) =>
          l.id === ligne.id ? { ...l, quantite: l.quantite - 1 } : l
        )
        .filter((l) => l.quantite > 0) // supprime la ligne si quantité = 0
    );
  }
}
