import { Component, inject } from '@angular/core';
import { OutfitListComponent } from "../../components/njz/outfit-list/outfit-list.component";
import { AddOutfitComponent } from "../../components/njz/outfit-add/outfit-add.component";
import { NJZService } from '../../services/njz.service';

@Component({
  selector: 'hanni-njz',
  templateUrl: './hanni-njz-page.component.html',
  imports: [OutfitListComponent, AddOutfitComponent],
})

export class HanniNjzPageComponent {
  public njzService = inject(NJZService);
}
