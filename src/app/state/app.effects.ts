import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { appInit } from './app.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  logInit$ = createEffect(
    () =>
      this.actions$?.pipe(
        ofType(appInit),
        tap(() => console.log('App initialized'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
