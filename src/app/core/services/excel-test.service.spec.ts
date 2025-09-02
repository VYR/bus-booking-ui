import { TestBed } from '@angular/core/testing';

import { ExcelTestService } from './excel-test.service';

describe('ExcelTestService', () => {
  let service: ExcelTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
