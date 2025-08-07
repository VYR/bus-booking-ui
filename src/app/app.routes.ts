import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./layout/shell.routes').then(m => m.routes),
  // },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(m => m.routes),
  },
  {
    path:"**",
    redirectTo:"/dashboard"
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
