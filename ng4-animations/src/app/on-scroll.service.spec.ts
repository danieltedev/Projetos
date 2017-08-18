import { TestBed, inject } from '@angular/core/testing';

import { OnScrollService } from './on-scroll.service';

describe('OnScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnScrollService]
    });
  });

  it('should be created', inject([OnScrollService], (service: OnScrollService) => {
    expect(service).toBeTruthy();
  }));
});
