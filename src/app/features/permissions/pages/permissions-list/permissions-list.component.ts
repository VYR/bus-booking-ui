import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { UdTableComponent } from '../../../../shared/components/ud-table/ud-table.component';

@Component({
  selector: 'app-permissions-list',
  imports: [
    SharedModule,
    UdCardComponent,
    UdTableComponent
  ],
  templateUrl: './permissions-list.component.html',
  styleUrl: './permissions-list.component.css'
})
export class PermissionsListComponent {
  cardTypes=CARD_DESIGN_TYPES;
}
