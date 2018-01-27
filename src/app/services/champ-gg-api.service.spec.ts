import { TestBed, inject } from '@angular/core/testing';

import { ChampGgApiService } from './champ-gg-api.service';

describe('ChampGgApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampGgApiService]
    });
  });

  it('should be created', inject([ChampGgApiService], (service: ChampGgApiService) => {
    expect(service).toBeTruthy();
  }));
});
