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
      icon:'las la-building',
      name:'Dashboard'
    },
    {
      uuid:'DASHBOARD',
      path:'permissions',
      icon:'las la-key',
      name:'Permissions'
    },
    {
      uuid:'DASHBOARD',
      path:'users',
      icon:'las la-users',
      name:'Users'
    },
    {
      uuid:'DASHBOARD',
      path:'vehicles',
      icon:'las la-bus',
      name:'Vehicles'
    },
    {
      uuid:'DASHBOARD',
      path:'transport-routes',
      icon:'las la-map',
      name:'Transport Routes'
    },
    {
      uuid:'DASHBOARD',
      path:'payments',
      icon:'las la-rupee-sign',
      name:'Payments'
    },
    {
      uuid:'DASHBOARD',
      path:'complaints',
      icon:'las la-file-alt',
      name:'Complaints'
    },
    {
      uuid:'DASHBOARD',
      path:'enquiries',
      icon:'las la-microphone',
      name:'Enquiries'
    }
  ];
}
