import { Routes } from '@angular/router';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { DashboardHomeComponent } from '../features/dashboard/pages/dashboard-home/dashboard-home.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component:LayoutOneComponent,
    loadChildren: () => import('../features/home/home.routes').then(m => m.routes),
  },
  {
    path: 'authentication',
    component:LayoutTwoComponent,
    loadChildren: () => import('../features/authentication/authentication.routes').then(m => m.routes),

  },
  {
    path: ':id',
    component:DashboardLayoutComponent,
    loadChildren: () => import('../features/dashboard/dashboard.routes').then(m => m.routes),
  },
  {
    path:'**',
    redirectTo:'authentication',
    pathMatch: 'prefix'
  }
];
