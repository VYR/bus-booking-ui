import { Component } from '@angular/core';
import { CARD_DESIGN_TYPES } from '../../shared/shared.enums';
import { SharedModule } from '../../shared/shared.module';
import { UdCardComponent } from '../../shared/components/ud-card/ud-card.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

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
export class DashboardRightHeaderComponent {
  cardTypes=CARD_DESIGN_TYPES;
}
