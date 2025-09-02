import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { dashboardReducer } from './state/dashboard.reducer';
import { DashboardEffects } from './state/dashboard.effects';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { LayoutOneComponent } from '../../layout/layout-one/layout-one.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { PermissionsHomeComponent } from '../permissions/pages/permissions-home/permissions-home.component';
import { UserHomeComponent } from '../users/pages/user-home/user-home.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardHomeComponent
  },
  {
    path: 'permissions',
    component: PermissionsHomeComponent,
    loadChildren: () => import('../permissions/permissions.routes').then((m) => m.routes)
  },
  {
    path: 'users',
    component: UserHomeComponent,
    loadChildren: () => import('../users/users.routes').then((m) => m.routes)
  },
  {
    path:'**',
    redirectTo:"dashboard",
    pathMatch:"prefix"
  }
];
