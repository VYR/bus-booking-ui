import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdRadioButtonComponent } from './ud-radio-button.component';

describe('UdRadioButtonComponent', () => {
  let component: UdRadioButtonComponent;
  let fixture: ComponentFixture<UdRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdRadioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
