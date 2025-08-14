import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdInputLabelComponent } from './ud-input-label.component';

describe('UdInputLabelComponent', () => {
  let component: UdInputLabelComponent;
  let fixture: ComponentFixture<UdInputLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdInputLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdInputLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
