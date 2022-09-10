import { TestBed } from '@angular/core/testing';

import { CountriesInfoService } from './countries-info.service';

describe('CountriesInfoService', () => {
  let service: CountriesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
