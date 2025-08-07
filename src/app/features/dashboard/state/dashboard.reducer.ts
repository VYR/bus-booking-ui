import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

export interface DashboardState {
  stats: any;
  loading: boolean;
}

export const initialState: DashboardState = {
  stats: null,
  loading: false,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboard, state => ({
    ...state,
    loading: true,
  })),
  on(DashboardActions.loadDashboardSuccess, (state, { stats }) => ({
    ...state,
    stats,
    loading: false,
  }))
);
