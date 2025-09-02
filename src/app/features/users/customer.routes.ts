import { Routes } from "@angular/router";
import { UserCustomerUpdateComponent } from "./components/user-customer-update/user-customer-update.component";

export const routes: Routes = [
  {
    path: 'update',
    component: UserCustomerUpdateComponent
  },
  {
    path:'**',
    redirectTo:"update",
    pathMatch:"prefix"
  }
];