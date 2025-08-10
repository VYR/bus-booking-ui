import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdIconsComponent } from './ud-icons.component';

describe('UdIconsComponent', () => {
  let component: UdIconsComponent;
  let fixture: ComponentFixture<UdIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
