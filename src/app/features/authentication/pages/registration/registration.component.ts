import { Component } from '@angular/core';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { RouterModule } from '@angular/router';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { ROUTES } from '../../../../shared/shared.constants';

@Component({
  selector: 'app-registration',
  imports: [
    RouterModule,
    UdCardComponent
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  cardTypes=CARD_DESIGN_TYPES;
  routes=ROUTES;
  showCountryCodes:boolean=false;
}
