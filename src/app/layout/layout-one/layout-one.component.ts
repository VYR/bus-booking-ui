import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { ROUTES } from '../../shared/shared.constants';
import { MobileScreenService } from '../../shared/services/mobile-screen.service';
import { IMobileScreen } from '../../shared/shared.models';

@Component({
  selector: 'app-layout-one',
  imports: [
    RouterModule,
    RouterOutlet,
    FooterComponent
],
  templateUrl: './layout-one.component.html',
  styleUrl: './layout-one.component.css'
})
export class LayoutOneComponent implements OnInit{
  routes=ROUTES;
  menu:Array<any>=[
    {
      path:'/authentication/login',
      name:'My Account',
      icon:'las la-user',
      right:true
    },
    {
      path:'',
      name:'Bookings',
      icon:'las la-address-book',
      right:true
    },
    {
      path:'',
      name:"FAQ's",
      icon:'las la-question-circle',
      right:true
    },
    {
      path:'',
      name:"Help",
      icon:'las la-info-circle',
      right:true
    },
    {
      path:'',
      name:'Logout',
      icon:'las la-sign-out-alt',
      right:true
    }
  ];
  mobileScreen:MobileScreenService = inject(MobileScreenService);
  mobileParams:IMobileScreen;
  constructor(private router:Router){

  } 
  ngOnInit(): void {
    this.mobileScreen.mobileScreen.subscribe(
      (res:IMobileScreen) => {
        this.mobileParams=res;
      }
    );
  }

  onNameClicked(item:any){
    console.log(item);
    this.onCloseClick();
    this.router.navigate([item.path]);
  }

  onCloseClick(){
    this.mobileParams.main={showSideMenu:false};;
    this.mobileScreen.setMobileScreenData(this.mobileParams);
  }
  onOpenClick(){    
    this.mobileParams.main={showSideMenu:true};
    this.mobileScreen.setMobileScreenData(this.mobileParams);
  }
}
