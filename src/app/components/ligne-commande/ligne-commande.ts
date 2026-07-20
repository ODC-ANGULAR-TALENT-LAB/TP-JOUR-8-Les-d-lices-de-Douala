import { Component, input, output } from '@angular/core';
import { LigneCommande as LigneCommandeModel } from '../../models/plat';

@Component({
  selector: 'app-ligne-commande',
  imports: [],
  templateUrl: './ligne-commande.html',
  styleUrl: './ligne-commande.css',
})
export class LigneCommande {
  ligne = input.required<LigneCommandeModel>();
  incrementer = output<LigneCommandeModel>();
  decrementer = output<LigneCommandeModel>();
}
