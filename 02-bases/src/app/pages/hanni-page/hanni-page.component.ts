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
  outfits = signal<Outfits[]>([
    { id: 1, song: 'Go hanni', coolness: 100 },
    { id: 2, song: 'New Jeans', coolness: 60 },
    { id: 3, song: 'Right Now', coolness: 80 },
    { id: 4, song: 'OMG', coolness: 60 },
  ]);

  // coolnessClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // })
}
