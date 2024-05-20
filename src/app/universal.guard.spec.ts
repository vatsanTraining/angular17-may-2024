import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { universalGuard } from './universal.guard';

describe('universalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => universalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
