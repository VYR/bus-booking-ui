import { createReducer, on } from '@ngrx/store';
import { appInit } from './app.actions';

export interface AppState {
  initialized: boolean;
}

export const initialState: AppState = {
  initialized: false,
};

export const appReducer = createReducer(
  initialState,
  on(appInit, state => ({ ...state, initialized: true }))
);
