import { TestBed, inject } from '@angular/core/testing';

import { RitoApiService } from './rito-api.service';

describe('RitoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RitoApiService]
    });
  });

  it('should be created', inject([RitoApiService], (service: RitoApiService) => {
    expect(service).toBeTruthy();
  }));
});
