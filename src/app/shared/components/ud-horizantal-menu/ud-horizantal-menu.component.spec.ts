import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdHorizantalMenuComponent } from './ud-horizantal-menu.component';

describe('UdHorizantalMenuComponent', () => {
  let component: UdHorizantalMenuComponent;
  let fixture: ComponentFixture<UdHorizantalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdHorizantalMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdHorizantalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
