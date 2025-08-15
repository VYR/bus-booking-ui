import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdTableComponent } from './ud-table.component';

describe('UdTableComponent', () => {
  let component: UdTableComponent;
  let fixture: ComponentFixture<UdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
