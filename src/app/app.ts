import { Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { Carte } from './components/carte/carte';
import { MenuService } from './services/menu';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [Header, Carte],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly menuService = inject(MenuService);

  /** Nom du restaurant externalisé dans l'environnement. */
  protected readonly restaurantName = environment.restaurantName;

  /** Nombre de plats disponibles à la carte (dérivé du menu). */
  protected readonly platsDisponibles = this.menuService.nombreDisponibles;
}
