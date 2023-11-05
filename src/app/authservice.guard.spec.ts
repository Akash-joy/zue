import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authserviceGuard } from './authservice.guard';

describe('authserviceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authserviceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
