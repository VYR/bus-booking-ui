import { TestBed } from '@angular/core/testing';

import { AuthSandboxService } from './auth-sandbox.service';

describe('AuthSandboxService', () => {
  let service: AuthSandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
