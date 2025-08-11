import { Component, inject, OnInit } from '@angular/core';
import { UdCardComponent } from "../../../../shared/components/ud-card/ud-card.component";
import { CACHE_KEY_NAMES, CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../../../shared/shared.constants';
import { AuthService } from '../../../../core/services/auth.service';
import { ApplicationContextService } from '../../../../state/application-context.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    UdCardComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  cardTypes=CARD_DESIGN_TYPES;
  routes=ROUTES;
  authService:AuthService=inject(AuthService);
  appContext:ApplicationContextService=inject(ApplicationContextService);
  ngOnInit(): void {
    console.log(this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG));
  }
  login(){
    this.authService.login().subscribe();
  }

}
