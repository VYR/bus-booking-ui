import { Component } from '@angular/core';
import { UdHorizantalMenuComponent } from "../../../../shared/components/ud-horizantal-menu/ud-horizantal-menu.component";
import { UdCardComponent } from "../../../../shared/components/ud-card/ud-card.component";
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { RouterOutlet } from "../../../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-permissions-home',
  imports: [
    SharedModule,
    UdHorizantalMenuComponent
  ],
  templateUrl: './permissions-home.component.html',
  styleUrl: './permissions-home.component.css'
})
export class PermissionsHomeComponent {
  cardTypes=CARD_DESIGN_TYPES;
  menuBar:Array<any>=[
    {
      uuid:'LIST_OF_PERMISSIONS',
      path:'list',
      name:'List of Permissions'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'add',
      name:'Add Permissions'
    }
  ];
}
