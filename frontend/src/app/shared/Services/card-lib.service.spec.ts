import { TestBed } from '@angular/core/testing';

import { CardLibService } from './card-lib.service';

describe('CardLibService', () => {
  let service: CardLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
