import { Component, inject, OnInit, effect, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../state/dashboard.actions';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { SharedModule } from '../../../../shared/shared.module';
import { HighchartsChartComponent, ChartConstructorType } from 'highcharts-angular';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any,
  responsive: ApexResponsive[]
};
@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    SharedModule,
    UdCardComponent,
    NgApexchartsModule,
    HighchartsChartComponent
    
],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent implements OnInit {
  cardTypes=CARD_DESIGN_TYPES;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: ChartOptions;
      //high chart
  chartOptionsH: Highcharts.Options = { 
       title: { "text": "Highcharts chart" },
      series: [
        {
          data: [11,2,3]  ,
          type:"line"    
        }
    ]
  }; // Required
  chartConstructor: ChartConstructorType = 'chart'; // Optional, defaults to 'chart'
  updateFlag: boolean = false; // Optional
  oneToOneFlag: boolean = true; // Optional, defaults to false
    //high chart
 // private store = inject(Store);

 // dashboard$ = this.store.select(state => state.dashboard);
  constructor(){
     this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
      
    };
  }
  ngOnInit() {
    //this.store.dispatch(DashboardActions.loadDashboard());
    console.log("hello dashboard");
  }
}
