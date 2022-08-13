import { TestBed } from '@angular/core/testing';

import { AdresseUtileService } from './adresse-utile.service';

describe('AdresseUtileService', () => {
  let service: AdresseUtileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdresseUtileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
