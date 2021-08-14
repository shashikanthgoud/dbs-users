import { TestBed } from '@angular/core/testing';

import { UsersDataResolverService } from './users-data-resolver.service';

describe('UsersDataResolverService', () => {
  let service: UsersDataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
