import { Component, signal } from '@angular/core';
import { OutfitListComponent } from "../../components/njz/outfit-list/outfit-list.component";
import { AddOutfitComponent } from "../../components/njz/outfit-add/outfit-add.component";
import type { Outfit } from '../../interfaces/outfit.interface';

@Component({
  selector: 'hanni-njz',
  templateUrl: './hanni-njz-page.component.html',
  imports: [OutfitListComponent, AddOutfitComponent],
})

export class HanniNjzPageComponent {
  outfits = signal<Outfit[]>([
    { id: 1, song: 'Go hanni', coolness: 100 },
    { id: 2, song: 'New Jeans', coolness: 70 },
  ]);

  addOutfit(outfit: Outfit) {
    this.outfits.update(prev => [...prev, outfit]);
  }
}
