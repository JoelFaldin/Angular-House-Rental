import { Component, output, signal } from '@angular/core';
import { Outfit } from '../../../interfaces/outfit.interface';

@Component({
  selector: 'njz-add-outfit',
  templateUrl: './outfit-add.component.html',
})
export class AddOutfitComponent {
  newSong = signal('');
  coolnessValue = signal(0);

  newOutfit = output<Outfit>();

  addOutfit() {
    if (!this.newSong() || !this.coolnessValue() || this.coolnessValue() < 0) {
      return;
    }

    const newOutfit: Outfit = {
      id: Math.floor(Math.random() * 10000),
      song: this.newSong(),
      coolness: this.coolnessValue(),
    }

    // this.outfits.update(list => [...list, newOutfit])
    this.newOutfit.emit(newOutfit);
    this.resetFields();
  }

  resetFields() {
    this.newSong.set('');
    this.coolnessValue.set(0);
  }
}
