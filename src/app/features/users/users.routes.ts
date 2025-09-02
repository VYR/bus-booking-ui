import { Routes } from "@angular/router";
import { UserCustomerComponent } from "./pages/user-customer/user-customer.component";
import { UserDriverComponent } from "./pages/user-driver/user-driver.component";
import { UserVehicleOwnerComponent } from "./pages/user-vehicle-owner/user-vehicle-owner.component";
import { UserEmployeeComponent } from "./pages/user-employee/user-employee.component";
import { UserAdminComponent } from "./pages/user-admin/user-admin.component";
import { UserSuperAdminComponent } from "./pages/user-super-admin/user-super-admin.component";
import { UserCustomerListComponent } from "./components/user-customer-list/user-customer-list.component";
import { UserCustomerDashboardComponent } from "./components/user-customer-dashboard/user-customer-dashboard.component";
import { UserCustomerAddComponent } from "./components/user-customer-add/user-customer-add.component";

export const routes: Routes = [
  {
    path: 'customers',
    component: UserCustomerComponent,
    children:[
      {
        path:'details',
        component:UserCustomerDashboardComponent,
        loadChildren: () => import('./customer.routes').then((m) => m.routes)
      },
      {
        path:'add',
        component:UserCustomerAddComponent
      },
      {
        path:'list',
        component:UserCustomerListComponent
      },
      {
        path:'**',
        redirectTo:"list",
        pathMatch:"prefix"
      }
    ]
  },
  {
    path: 'drivers',
    component: UserDriverComponent
  },
  {
    path: 'vehicle-owners',
    component: UserVehicleOwnerComponent
  },
  {
    path: 'employees',
    component: UserEmployeeComponent
  },
  {
    path: 'admin',
    component: UserAdminComponent
  },
  {
    path: 'super-admin',
    component: UserSuperAdminComponent
  },
  {
    path:'**',
    redirectTo:"customers",
    pathMatch:"prefix"
  }
];