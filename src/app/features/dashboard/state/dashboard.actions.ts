import { createAction, props } from '@ngrx/store';

export const loadDashboard = createAction('[Dashboard] Load');
export const loadDashboardSuccess = createAction(
  '[Dashboard] Load Success',
  props<{ stats: any }>()
);
export const loadDashboardFailure = createAction(
  '[Dashboard] Load Failure',
  props<{ error: any }>()
);
