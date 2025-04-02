import { Component, computed, signal } from '@angular/core';

interface Outfits {
  id: number;
  song: string;
  coolness: number;
}

@Component({
  imports: [
    // ngClass
  ],
  templateUrl: './hanni-page.component.html',
})

export class HanniPageComponent {
  song = signal('');
  coolness = signal(0);

  outfits = signal<Outfits[]>([
    { id: 1, song: 'Go hanni', coolness: 100 },
    // { id: 2, song: 'New Jeans', coolness: 50 },
    // { id: 3, song: 'Right Now', coolness: 80 },
    // { id: 4, song: 'OMG', coolness: 60 },
  ]);

  // coolnessClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // })

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
