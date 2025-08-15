import { Component } from '@angular/core';
import { UdTableComponent } from "../../../../shared/components/ud-table/ud-table.component";
@Component({
  selector: 'app-dashboard-requests',
  imports: [
    UdTableComponent
],
  templateUrl: './dashboard-requests.component.html',
  styleUrl: './dashboard-requests.component.css'
})
export class DashboardRequestsComponent {}