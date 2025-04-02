import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Outfits } from '../../../interfaces/outfit.interface';

@Component({
  selector: 'njz-outfit-list',
  imports: [],
  templateUrl: './outfit-list.component.html',
})
export class OutfitListComponent {
  outfits = input.required<Outfits[]>();

}
