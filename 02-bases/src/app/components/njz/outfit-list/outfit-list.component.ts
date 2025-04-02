import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Outfit } from '../../../interfaces/outfit.interface';

@Component({
  selector: 'njz-outfit-list',
  imports: [],
  templateUrl: './outfit-list.component.html',
})
export class OutfitListComponent {
  listName = input.required<string>();
  outfits = input.required<Outfit[]>();
}
