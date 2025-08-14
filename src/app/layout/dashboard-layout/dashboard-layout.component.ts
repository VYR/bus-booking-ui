import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UdCardComponent } from "../../shared/components/ud-card/ud-card.component";
import { CARD_DESIGN_TYPES } from '../../shared/shared.enums';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DashboardRightHeaderComponent } from "../dashboard-right-header/dashboard-right-header.component";

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    SharedModule,
    UdCardComponent,
    SidebarComponent,
    DashboardRightHeaderComponent
],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {
  cardTypes=CARD_DESIGN_TYPES;
   menuBar:Array<any>=[
    {
      uuid:'',
      path:'dashboard',
      icon:'heart',
      name:'Dashboard'
    }
  ];
}
