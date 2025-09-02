import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomerUpdateComponent } from './user-customer-update.component';

describe('UserCustomerUpdateComponent', () => {
  let component: UserCustomerUpdateComponent;
  let fixture: ComponentFixture<UserCustomerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCustomerUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
