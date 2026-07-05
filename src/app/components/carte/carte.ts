import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu';

/** Affiche la carte du restaurant : plat du jour, filtres et liste des plats. */
@Component({
  selector: 'app-carte',
  imports: [CurrencyPipe],
  templateUrl: './carte.html',
  styleUrl: './carte.css',
})
export class Carte {
  /** Couche de données injectée avec inject() (aucune injection par constructeur). */
  protected readonly menuService = inject(MenuService);
}
