import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { UdHorizantalMenuComponent } from '../../../../shared/components/ud-horizantal-menu/ud-horizantal-menu.component';

@Component({
  selector: 'app-user-customer-dashboard',
  imports: [
    SharedModule,
    UdHorizantalMenuComponent
  ],
  templateUrl: './user-customer-dashboard.component.html',
  styleUrl: './user-customer-dashboard.component.css'
})
export class UserCustomerDashboardComponent {
 menuBar:Array<any>=[
    {
      uuid:'LIST_OF_PERMISSIONS',
      path:'update',
      name:'Update'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'profile',
      name:'Profile'
    },
    {
      uuid:'LIST_OF_PERMISSIONS',
      path:'bookings',
      name:'Bookings'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'referrals',
      name:'Referral Earnings'
    },
    {
      uuid:'LIST_OF_PERMISSIONS',
      path:'transactions',
      name:'Transactions'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'payouts',
      name:'Payouts'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'complaints',
      name:'Complaints'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'requests',
      name:'Requests'
    },
    {
      uuid:'ADD_PERMISSIONS',
      path:'feedbacks',
      name:'Feedbacks'
    }
  ];
}
