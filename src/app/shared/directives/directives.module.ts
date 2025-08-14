import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasEntitlementDirective } from './has-entitlement.directive';



@NgModule({
  declarations: [HasEntitlementDirective],
  imports: [
    CommonModule
  ],
  exports:[
    HasEntitlementDirective
  ]
})
export class DirectivesModule { }
