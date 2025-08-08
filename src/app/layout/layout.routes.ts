import { Routes } from '@angular/router';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { DashboardHomeComponent } from '../features/dashboard/pages/dashboard-home/dashboard-home.component';

export const routes: Routes = [
  {
    path: '',
    component:LayoutOneComponent,
    children:[
      {
        path:'dashboard1',
        component:DashboardHomeComponent,
        loadChildren: () =>
        import('../features/dashboard/dashboard.routes').then(m => m.routes),
      },
      {
        path:'**',
        redirectTo:'dashboard1',
        pathMatch: 'prefix'
      }
    ]
  }
];
