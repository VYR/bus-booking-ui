import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UdCardComponent } from "../../shared/components/ud-card/ud-card.component";
import { CACHE_KEY_NAMES, CARD_DESIGN_TYPES } from '../../shared/shared.enums';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DashboardRightHeaderComponent } from "../dashboard-right-header/dashboard-right-header.component";
import { ApplicationContextService } from '../../state/application-context.service';

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
export class DashboardLayoutComponent implements OnInit{
  cardTypes=CARD_DESIGN_TYPES;
   menuBar:Array<any>=[
    {
      uuid:'',
      path:'dashboard',
      icon:'heart',
      name:'Dashboard'
    }
  ];
  appContext:ApplicationContextService=inject(ApplicationContextService);
  constructor(){
    console.log(this.appContext.getConfigSignalData());
    console.log(this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG));
  }
  ngOnInit(): void {
    console.log(this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG));
  }
}
