import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomerDashboardComponent } from './user-customer-dashboard.component';

describe('UserCustomerDashboardComponent', () => {
  let component: UserCustomerDashboardComponent;
  let fixture: ComponentFixture<UserCustomerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCustomerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
