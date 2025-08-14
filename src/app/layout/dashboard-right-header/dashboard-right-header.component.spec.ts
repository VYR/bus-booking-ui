import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRightHeaderComponent } from './dashboard-right-header.component';

describe('DashboardRightHeaderComponent', () => {
  let component: DashboardRightHeaderComponent;
  let fixture: ComponentFixture<DashboardRightHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRightHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRightHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
