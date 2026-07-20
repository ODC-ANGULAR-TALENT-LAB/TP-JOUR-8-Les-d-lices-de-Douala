import { Component, input, output } from '@angular/core';
import { Plat } from '../../models/plat';

@Component({
  selector: 'app-plat-card',
  imports: [],
  templateUrl: './plat-card.html',
  styleUrls: ['./plat-card.css'],
})
export class PlatCard {
  plat = input.required<Plat>();
  ajouter = output<Plat>();
}
