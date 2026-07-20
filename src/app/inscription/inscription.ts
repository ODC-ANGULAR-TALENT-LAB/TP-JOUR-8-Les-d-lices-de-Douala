import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Signal } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
nom = '';

private readonly _clients = signal<string[]>([]);
readonly clients = this._clients.asReadonly();


private readonly _indexEdite = signal<number | null>(null);
readonly enEdition = computed(() => this._indexEdite() !== null);


enregistrer(): void {
  const valeur = this.nom.trim();
  if (!valeur) return;
  
  const i = this._indexEdite();
  if (i === null) {
    this._clients.update((l) => [...l, valeur]);          // ajout
  } else {
    this._clients.update((l) =>
      l.map((c, idx) => (idx === i ? valeur : c)));         // modification
    this._indexEdite.set(null);
  }
  this.nom = '';                                            // vider le champ
}
modifier(i: number): void {
this.nom = this.clients()[i];   // recharge la ligne dans le champ
this._indexEdite.set(i);
}
supprimer(i: number): void {
this._clients.update((l) => l.filter((_, idx) => idx !== i));
}
}
