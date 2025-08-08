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
    path: '',
    component: DashboardHomeComponent,
    providers: [
      // provideState('dashboard', dashboardReducer),
      // provideEffects(DashboardEffects),
    ],

  },
];
