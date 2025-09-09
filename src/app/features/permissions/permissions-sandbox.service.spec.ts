import { TestBed } from '@angular/core/testing';

import { PermissionsSandboxService } from './permissions-sandbox.service';

describe('PermissionsSandboxService', () => {
  let service: PermissionsSandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionsSandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
