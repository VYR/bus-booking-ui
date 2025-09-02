import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVehicleOwnerComponent } from './user-vehicle-owner.component';

describe('UserVehicleOwnerComponent', () => {
  let component: UserVehicleOwnerComponent;
  let fixture: ComponentFixture<UserVehicleOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserVehicleOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVehicleOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
