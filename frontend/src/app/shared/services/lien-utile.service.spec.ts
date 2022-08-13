import { TestBed } from '@angular/core/testing';

import { LienUtileService } from './lien-utile.service';

describe('LienUtileService', () => {
  let service: LienUtileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LienUtileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
