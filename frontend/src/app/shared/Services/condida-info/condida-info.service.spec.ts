import { TestBed } from '@angular/core/testing';

import { CondidaInfoService } from './condida-info.service';

describe('CondidaInfoService', () => {
  let service: CondidaInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidaInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
