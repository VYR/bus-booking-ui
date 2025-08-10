import { Component, Input, input } from '@angular/core';
import { CARD_DESIGN_TYPES } from '../../shared.enums';

@Component({
  selector: 'app-ud-card',
  imports: [],
  templateUrl: './ud-card.component.html',
  styleUrl: './ud-card.component.css'
})
export class UdCardComponent {
  CARD_TYPES=CARD_DESIGN_TYPES;
  @Input() type!:CARD_DESIGN_TYPES;
  @Input() classes='rounded-lg w-100';

}
