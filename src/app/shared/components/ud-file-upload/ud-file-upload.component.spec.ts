import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdFileUploadComponent } from './ud-file-upload.component';

describe('UdFileUploadComponent', () => {
  let component: UdFileUploadComponent;
  let fixture: ComponentFixture<UdFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdFileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
