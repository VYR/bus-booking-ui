import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

// Disable all console statements in production
if (!isDevMode()) {
  window.console.log = function () {};
  window.console.warn = function () {};
  window.console.error = function () {};
  window.console.info = function () {};
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
