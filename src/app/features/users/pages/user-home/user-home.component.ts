import { Component } from '@angular/core';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { SharedModule } from '../../../../shared/shared.module';
import { UdHorizantalMenuComponent } from '../../../../shared/components/ud-horizantal-menu/ud-horizantal-menu.component';

@Component({
  selector: 'app-user-home',
  imports: [
    SharedModule,
    UdHorizantalMenuComponent
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  cardTypes=CARD_DESIGN_TYPES;
  menuBar:Array<any>=[
    {
      uuid:'LIST_OF_PERMISSIONS',
      path:'customers',
      name:'Customers'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'drivers',
      name:'Drivers'
    },
    {
      uuid:'LIST_OF_PERMISSIONS',
      path:'vehicle-owners',
      name:'Vehicle Owners'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'employees',
      name:'Employees'
    },
    {
      uuid:'LIST_OF_PERMISSIONS',
      path:'admin',
      name:'Admin'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'super-admin',
      name:'Super Admin'
    }
  ];
}
