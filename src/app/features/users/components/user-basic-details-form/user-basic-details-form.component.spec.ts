import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasicDetailsFormComponent } from './user-basic-details-form.component';

describe('UserBasicDetailsFormComponent', () => {
  let component: UserBasicDetailsFormComponent;
  let fixture: ComponentFixture<UserBasicDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBasicDetailsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasicDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
