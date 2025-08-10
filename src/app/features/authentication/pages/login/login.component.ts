import { Component } from '@angular/core';
import { UdCardComponent } from "../../../../shared/components/ud-card/ud-card.component";
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../../../shared/shared.constants';

@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    UdCardComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cardTypes=CARD_DESIGN_TYPES;
  routes=ROUTES;
}
