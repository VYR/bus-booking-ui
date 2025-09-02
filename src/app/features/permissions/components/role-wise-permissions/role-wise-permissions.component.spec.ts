import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleWisePermissionsComponent } from './role-wise-permissions.component';

describe('RoleWisePermissionsComponent', () => {
  let component: RoleWisePermissionsComponent;
  let fixture: ComponentFixture<RoleWisePermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleWisePermissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleWisePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
