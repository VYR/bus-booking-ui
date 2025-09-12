import { Component, inject, OnInit, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { MobileScreenService } from '../../../../shared/services/mobile-screen.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    UdCardComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  cardTypes=CARD_DESIGN_TYPES;
  cardsList:Array<any>=[
    {
      pillName:'Bus',
      title:'Save up to Rs 500 on bus tickets',
      validity:'Valid till 31 Aug',
      offerCode:'RED500',
      bgImage:'offer-bg-1'
    },
    {
      pillName:'Bus',
      title:'Save up to Rs 500 on bus tickets',
      validity:'Valid till 31 Aug',
      offerCode:'RED500',
      bgImage:'offer-bg-1'
    },
    {
      pillName:'Bus',
      title:'Save up to Rs 500 on bus tickets',
      validity:'Valid till 31 Aug',
      offerCode:'RED500',
      bgImage:'offer-bg-1'
    },
    {
      pillName:'Bus',
      title:'Save up to Rs 500 on bus tickets',
      validity:'Valid till 31 Aug',
      offerCode:'RED500',
      bgImage:'offer-bg-1'
    },
    {
      pillName:'Bus',
      title:'Save up to Rs 500 on bus tickets',
      validity:'Valid till 31 Aug',
      offerCode:'RED500',
      bgImage:'offer-bg-1'
    },
    {
      pillName:'Bus',
      title:'Save up to Rs 500 on bus tickets',
      validity:'Valid till 31 Aug',
      offerCode:'RED500',
      bgImage:'offer-bg-1'
    }
  ];
  mobileScreen:MobileScreenService = inject(MobileScreenService);

  constructor(){

  }
  ngOnInit(): void {
   
  }


}
