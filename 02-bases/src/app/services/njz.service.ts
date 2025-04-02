import { Injectable, signal } from "@angular/core";
import { Outfit } from "../interfaces/outfit.interface";

@Injectable({ providedIn: 'root' })
export class NJZService {
  outfits = signal<Outfit[]>([
    { id: 1, song: 'Go hanni', coolness: 100 },
    { id: 2, song: 'New Jeans', coolness: 70 },
  ]);

  addOutfit(outfit: Outfit) {
    this.outfits.update(prev => [...prev, outfit]);
  }
}
