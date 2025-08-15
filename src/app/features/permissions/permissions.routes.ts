import { Routes } from '@angular/router';
import { PermissionsListComponent } from './pages/permissions-list/permissions-list.component';
import { PermissionsAddComponent } from './pages/permissions-add/permissions-add.component';
export const routes: Routes = [
  {
    path: 'list',
    component: PermissionsListComponent
  },
  {
    path: 'add',
    component: PermissionsAddComponent
  },
  {
    path:'**',
    redirectTo:"list",
    pathMatch:"prefix"
  }
];
