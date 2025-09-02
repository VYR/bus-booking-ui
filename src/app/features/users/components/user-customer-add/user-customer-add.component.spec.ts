import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomerAddComponent } from './user-customer-add.component';

describe('UserCustomerAddComponent', () => {
  let component: UserCustomerAddComponent;
  let fixture: ComponentFixture<UserCustomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCustomerAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
