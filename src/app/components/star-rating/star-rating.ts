import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class StarRating {
  /** Note actuelle du restaurant (0 = non noté). */
  currentRating = input.required<number>();

  /** Émet la nouvelle note choisie au clic. */
  ratingChanged = output<number>();

  /** Étoile actuellement survolée (0 = aucun survol). */
  protected readonly hoveredStar = signal(0);

  protected readonly stars = [1, 2, 3, 4, 5];

  /** La note affichée privilégie le survol, sinon la note fixée. */
  protected readonly displayedRating = computed(() =>
    this.hoveredStar() || this.currentRating()
  );

  protected onHover(position: number): void {
    this.hoveredStar.set(position);
  }

  protected onLeave(): void {
    this.hoveredStar.set(0);
  }

  protected onClick(position: number): void {
    this.ratingChanged.emit(position);
  }
}
