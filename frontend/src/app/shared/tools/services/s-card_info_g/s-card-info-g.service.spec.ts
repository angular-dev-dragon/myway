import { TestBed } from '@angular/core/testing';

import { SCardInfoGService } from './s-card-info-g.service';

describe('SCardInfoGService', () => {
  let service: SCardInfoGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCardInfoGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
