import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdCheckboxComponent } from './ud-checkbox.component';

describe('UdCheckboxComponent', () => {
  let component: UdCheckboxComponent;
  let fixture: ComponentFixture<UdCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
