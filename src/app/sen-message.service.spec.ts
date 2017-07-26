import { TestBed, inject } from '@angular/core/testing';

import { SenMessageService } from './sen-message.service';

describe('SenMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenMessageService]
    });
  });

  it('should be created', inject([SenMessageService], (service: SenMessageService) => {
    expect(service).toBeTruthy();
  }));
});
