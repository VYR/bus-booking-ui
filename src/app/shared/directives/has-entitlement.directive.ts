import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasEntitlement]',
  standalone:false
})
export class HasEntitlementDirective {
  entitlements:Array<any>=[
    'ADD_USERS',
    'ADD_ROLES',
    'CUSTOMERS',
    'PERMISSIONS',
    'ROLE_PERMISSIONS',
    'DASHBOARD',
    'LIST_OF_PERMISSIONS',
    'ADD_PERMISSIONS'
  ];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input() set appHasEntitlement(commaSeparatedEntitlements: string) {
    const inputEntitlements:Array<any>=(commaSeparatedEntitlements || '').split(',');
    if (inputEntitlements.some(e => this.entitlements.includes(e)) || !inputEntitlements.length) {
      this.viewContainerRef.createEmbeddedView(this.templateRef); // Add the element back
    } else {
      this.viewContainerRef.clear(); // Remove the element from the DOM
    }
  }
}
