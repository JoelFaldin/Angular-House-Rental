import { Component, signal } from '@angular/core';
import { OutfitListComponent } from "../../components/njz/outfit-list/outfit-list.component";

interface Outfits {
  id: number;
  song: string;
  coolness: number;
}

@Component({
  selector: 'hanni-njz',
  templateUrl: './hanni-njz-page.component.html',
  imports: [OutfitListComponent],
})

export class HanniNjzPageComponent {
  song = signal('');
  coolness = signal(0);

  outfits = signal<Outfits[]>([
    { id: 1, song: 'Go hanni', coolness: 100 },
    { id: 2, song: 'New Jeans', coolness: 70 },
  ]);

  addOutfit() {
    if (!this.song() || !this.coolness() || this.coolness() < 0) {
      return;
    }

    const newOutfit: Outfits = {
      id: this.outfits().length + 1,
      song: this.song(),
      coolness: this.coolness(),
    }

    this.outfits.update(list => [...list, newOutfit])

    this.resetFields();
  }

  resetFields() {
    this.song.set('');
    this.coolness.set(0);
  }
}
