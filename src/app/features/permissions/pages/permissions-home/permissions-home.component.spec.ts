import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsHomeComponent } from './permissions-home.component';

describe('PermissionsHomeComponent', () => {
  let component: PermissionsHomeComponent;
  let fixture: ComponentFixture<PermissionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
