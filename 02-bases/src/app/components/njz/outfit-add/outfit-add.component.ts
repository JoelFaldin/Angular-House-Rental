import { Component, signal } from '@angular/core';
import { Outfits } from '../../../interfaces/outfit.interface';

@Component({
  selector: 'njz-add-outfit',
  templateUrl: './outfit-add.component.html',
})
export class AddOutfitComponent {
  newSong = signal('');
  coolnessValue = signal(0);

  addOutfit() {
    if (!this.newSong() || !this.coolnessValue() || this.coolnessValue() < 0) {
      return;
    }

    const newOutfit: Outfits = {
      id: 100,
      song: this.newSong(),
      coolness: this.coolnessValue(),
    }

    console.log({ newOutfit });
    // this.outfits.update(list => [...list, newOutfit])
    this.resetFields();
  }

  resetFields() {
    this.newSong.set('');
    this.coolnessValue.set(0);
  }
}
