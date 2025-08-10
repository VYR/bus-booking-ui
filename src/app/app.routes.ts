import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.routes').then(m => m.routes),
  },
  {
    path:"**",
    redirectTo:"/"
  }
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./features/users/users.routes').then(m => m.routes),
  // },
  // {
  //   path: 'orders',
  //   loadChildren: () =>
  //     import('./features/orders/orders.routes').then(m => m.routes),
  // },
];
