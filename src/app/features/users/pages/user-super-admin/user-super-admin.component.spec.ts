import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuperAdminComponent } from './user-super-admin.component';

describe('UserSuperAdminComponent', () => {
  let component: UserSuperAdminComponent;
  let fixture: ComponentFixture<UserSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSuperAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
