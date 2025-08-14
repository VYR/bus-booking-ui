import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sidebar',
  imports: [
    SharedModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuBar:Array<any>=[
    {
      uuid:'DASHBOARD',
      path:'dashboard',
      icon:'las la-heart',
      name:'Dashboard'
    },
    {
      uuid:'DASHBOARD',
      path:'permissions',
      icon:'las la-heart',
      name:'Permissions'
    },
    {
      uuid:'DASHBOARD',
      path:'role-permissions',
      icon:'las la-heart',
      name:'Role Permissions'
    }
  ];
}
