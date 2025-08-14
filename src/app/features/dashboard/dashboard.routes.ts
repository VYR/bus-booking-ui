import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { dashboardReducer } from './state/dashboard.reducer';
import { DashboardEffects } from './state/dashboard.effects';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { LayoutOneComponent } from '../../layout/layout-one/layout-one.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardHomeComponent
  },
  {
    path:'**',
    redirectTo:"dashboard",
    pathMatch:"prefix"
  }
];
