import { TestBed } from '@angular/core/testing';

import { TemoignageService } from './temoignage.service';

describe('TemoignageService', () => {
  let service: TemoignageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemoignageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
