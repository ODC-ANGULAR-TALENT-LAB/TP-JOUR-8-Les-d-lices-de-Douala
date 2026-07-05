import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  /** Nom du restaurant (issu des variables d'environnement). */
  restaurantName = input.required<string>();

  /** Nombre de plats disponibles à la carte. */
  platsDisponibles = input.required<number>();
}
