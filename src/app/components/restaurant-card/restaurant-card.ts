import { Component, input, output } from '@angular/core';
import { RatingChange, Restaurant } from '../../models/restaurant';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-restaurant-card',
  imports: [StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css'
})
export class RestaurantCard {
  /** Données du restaurant affiché. */
  restaurant = input.required<Restaurant>();

  /** Émet l'id du restaurant et la nouvelle note vers la liste. */
  restaurantRated = output<RatingChange>();

  protected onRatingChanged(rating: number): void {
    this.restaurantRated.emit({ id: this.restaurant().id, rating });
  }
}
