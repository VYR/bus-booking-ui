import { Component, inject, OnInit } from '@angular/core';
import { CARD_DESIGN_TYPES } from '../../shared/shared.enums';
import { SharedModule } from '../../shared/shared.module';
import { UdCardComponent } from '../../shared/components/ud-card/ud-card.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MobileScreenService } from '../../shared/services/mobile-screen.service';
import { IMobileScreen } from '../../shared/shared.models';

@Component({
  selector: 'app-dashboard-right-header',
  imports: [
    SharedModule,
    UdCardComponent,
    MatSlideToggleModule
  ],
  templateUrl: './dashboard-right-header.component.html',
  styleUrl: './dashboard-right-header.component.css'
})
export class DashboardRightHeaderComponent implements OnInit{


  cardTypes=CARD_DESIGN_TYPES;
  mobileScreen: MobileScreenService = inject(MobileScreenService);
  mobileParams!:IMobileScreen;

  ngOnInit(): void {
    this.mobileParams=this.mobileScreen.getMobileScreenData();
  }

  openSideMenu(){
    this.mobileParams.dashboard={showSideMenu:true};
    console.log(this.mobileParams);
    this.mobileScreen.setMobileScreenData(this.mobileParams);
  }


}
