import { TestBed } from '@angular/core/testing';

import { EmailRegisteredService } from './email-registered.service';

describe('EmailRegisteredService', () => {
  let service: EmailRegisteredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailRegisteredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
