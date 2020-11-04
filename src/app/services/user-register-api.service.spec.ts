import { TestBed } from '@angular/core/testing';

import { UserRegisterApiService } from './user-register-api.service';

describe('UserRegisterApiService', () => {
  let service: UserRegisterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegisterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
