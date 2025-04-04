import { effect, Injectable, signal } from "@angular/core";
import { Outfit } from "../interfaces/outfit.interface";

const loadFromLocalStorage = () => {
  const outfits = localStorage.getItem('outfits');

  return outfits ? JSON.parse(outfits) : [];
}

@Injectable({ providedIn: 'root' })
export class NJZService {
  outfits = signal<Outfit[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log('outfit count: ' + this.outfits().length);
    localStorage.setItem('outfits', JSON.stringify(this.outfits()));
  })

  addOutfit(outfit: Outfit) {
    this.outfits.update(prev => [...prev, outfit]);
  }
}
