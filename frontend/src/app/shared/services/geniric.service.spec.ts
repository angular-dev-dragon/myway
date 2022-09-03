import { TestBed } from '@angular/core/testing';

import { GeniricService } from './generic.service';

describe('GeniricService', () => {
  let service: GeniricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeniricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
