import { TestBed, inject } from '@angular/core/testing';

import { RevImgService } from './rev-img.service';

describe('RevImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevImgService]
    });
  });

  it('should be created', inject([RevImgService], (service: RevImgService) => {
    expect(service).toBeTruthy();
  }));
});
