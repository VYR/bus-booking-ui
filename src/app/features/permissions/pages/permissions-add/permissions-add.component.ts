import { Component } from '@angular/core';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { SharedModule } from '../../../../shared/shared.module';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { MatTabsModule } from "@angular/material/tabs";
import { IndividualPermissionsComponent } from "../../components/individual-permissions/individual-permissions.component";
import { RoleWisePermissionsComponent } from "../../components/role-wise-permissions/role-wise-permissions.component";

@Component({
  selector: 'app-permissions-add',
  imports: [
    SharedModule,
    UdCardComponent,
    MatTabsModule,
    IndividualPermissionsComponent,
    RoleWisePermissionsComponent
],
  templateUrl: './permissions-add.component.html',
  styleUrl: './permissions-add.component.css'
})
export class PermissionsAddComponent{  
  cardTypes=CARD_DESIGN_TYPES;
}
