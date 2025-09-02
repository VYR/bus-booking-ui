import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPermissionsComponent } from './individual-permissions.component';

describe('IndividualPermissionsComponent', () => {
  let component: IndividualPermissionsComponent;
  let fixture: ComponentFixture<IndividualPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualPermissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
