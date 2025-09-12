import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UdCardComponent } from "../../shared/components/ud-card/ud-card.component";
import { CACHE_KEY_NAMES, CARD_DESIGN_TYPES } from '../../shared/shared.enums';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ApplicationContextService } from '../../state/application-context.service';
import { MobileScreenService } from '../../shared/services/mobile-screen.service';
import { IMobileScreen } from '../../shared/shared.models';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    SharedModule,
    UdCardComponent,
    SidebarComponent,
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
  mobileScreen:MobileScreenService = inject(MobileScreenService);
  mobileParams:IMobileScreen;

  constructor(){
   // console.log(this.appContext.getConfigSignalData());
   // console.log(this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG));
  }
  ngOnInit(): void {
    //console.log(this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG));
    this.mobileScreen.mobileScreen.subscribe(
      (res:IMobileScreen) => {
        this.mobileParams=res;
      }
    );
  }

  closeSideMenu(){
    this.mobileParams.dashboard.showSideMenu=false;
    this.mobileScreen.setMobileScreenData(this.mobileParams);

  }
  openSideMenu(){
    this.mobileParams.dashboard={showSideMenu:true};
    console.log(this.mobileParams);
    this.mobileScreen.setMobileScreenData(this.mobileParams);
  }

}
