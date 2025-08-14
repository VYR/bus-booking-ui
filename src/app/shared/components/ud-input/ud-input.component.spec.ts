import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdInputComponent } from './ud-input.component';

describe('UdInputComponent', () => {
  let component: UdInputComponent;
  let fixture: ComponentFixture<UdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
