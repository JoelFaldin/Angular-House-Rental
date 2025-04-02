import { Component, signal } from '@angular/core';
import { OutfitListComponent } from "../../components/njz/outfit-list/outfit-list.component";
import { AddOutfitComponent } from "../../components/njz/outfit-add/outfit-add.component";

interface Outfits {
  id: number;
  song: string;
  coolness: number;
}

@Component({
  selector: 'hanni-njz',
  templateUrl: './hanni-njz-page.component.html',
  imports: [OutfitListComponent, AddOutfitComponent],
})

export class HanniNjzPageComponent {
  outfits = signal<Outfits[]>([
    { id: 1, song: 'Go hanni', coolness: 100 },
    { id: 2, song: 'New Jeans', coolness: 70 },
  ]);
}
