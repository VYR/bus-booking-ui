import { TestBed } from '@angular/core/testing';

import { MobileScreenService } from './mobile-screen.service';

describe('MobileScreenService', () => {
  let service: MobileScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
