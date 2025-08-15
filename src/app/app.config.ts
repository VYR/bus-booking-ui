// app.config.ts
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appReducer } from './state/app.reducer';
import { AppEffects } from './state/app.effects';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { provideHttpClient, HttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideAnimations } from "@angular/platform-browser/animations";
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideHighcharts } from "highcharts-angular";
import { ConfigService } from './core/services/config.service';
//  export  function initializeAppConfig() {
//     const appConfigService = inject(ConfigService);
//     return () => appConfigService.loadConfig(); // loadConfig returns a Promise
//   }
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ConfigService,
    provideAppInitializer(
      () => {
        const appConfigService = inject(ConfigService);
        appConfigService.loadConfig();
      }
    ),
    provideHighcharts(
      {
      // Optional: Define the Highcharts instance dynamically
      instance: () => import('highcharts'),

      // Global chart options applied across all charts
      // options: {
      //   title: {
      //     style: {
      //       color: 'tomato',
      //     },
      //   },
      //   legend: {
      //     enabled: false,
      //   },
      // },

      // Include Highcharts additional modules (e.g., exporting, accessibility) or custom themes
      modules: () => {
        return [
          import('highcharts/esm/modules/accessibility'),
          import('highcharts/esm/modules/exporting'),
          import('highcharts/esm/themes/sunset'),
        ];
      },
    }
    ),
    provideAnimations(),
    // provideStore({ app: appReducer }),
    // provideEffects([AppEffects]),
    // provideStoreDevtools(),
    // provideRouterStore()
    provideHttpClient(withInterceptors([authInterceptor])),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json'
      })
    }),
    provideHotToastConfig(),
    provideToastr({autoDismiss:true})
  ]
};
