import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdCardComponent } from './ud-card.component';

describe('UdCardComponent', () => {
  let component: UdCardComponent;
  let fixture: ComponentFixture<UdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
