import { TestBed } from '@angular/core/testing';

import { CarpoolingRequestService } from './carpooling-request.service';

describe('CarpoolingRequestService', () => {
  let service: CarpoolingRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpoolingRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
