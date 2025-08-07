import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DashboardActions from './dashboard.actions';
import { DashboardApiService } from '../services/dashboard-api.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardApi: DashboardApiService
  ) {}

  loadDashboard$ = createEffect(() =>
    this.actions$?.pipe(
      ofType(DashboardActions.loadDashboard),
      switchMap(() =>
        this.dashboardApi.getDashboardStats().pipe(
          map(stats => DashboardActions.loadDashboardSuccess({ stats })),
          catchError(error =>
            of(DashboardActions.loadDashboardFailure({ error }))
          )
        )
      )
    )
  );
}
