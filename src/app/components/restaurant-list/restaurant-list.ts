import { Component, input, output } from '@angular/core';
import { RatingChange, Restaurant } from '../../models/restaurant';
import { RestaurantCard } from '../restaurant-card/restaurant-card';

@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css'
})
export class RestaurantList {
  /** Liste des restaurants à afficher. */
  restaurants = input.required<Restaurant[]>();

  /** Retransmet la notation d'une carte vers App. */
  restaurantRated = output<RatingChange>();
}
