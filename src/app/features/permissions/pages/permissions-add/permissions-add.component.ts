import { Component } from '@angular/core';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { SharedModule } from '../../../../shared/shared.module';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';

@Component({
  selector: 'app-permissions-add',
  imports: [
    SharedModule,
    UdCardComponent
  ],
  templateUrl: './permissions-add.component.html',
  styleUrl: './permissions-add.component.css'
})
export class PermissionsAddComponent {
  cardTypes=CARD_DESIGN_TYPES;
}
