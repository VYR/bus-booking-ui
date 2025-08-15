import { Component, Input } from '@angular/core';
import { UdCardComponent } from "../ud-card/ud-card.component";
import { CARD_DESIGN_TYPES } from '../../shared.enums';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-ud-horizantal-menu',
  imports: [
    SharedModule,
  ],
  templateUrl: './ud-horizantal-menu.component.html',
  styleUrl: './ud-horizantal-menu.component.css'
})
export class UdHorizantalMenuComponent {
  cardTypes=CARD_DESIGN_TYPES;
  @Input() menuBar:Array<any>=[];
}
