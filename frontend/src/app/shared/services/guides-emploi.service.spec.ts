import { TestBed } from '@angular/core/testing';

import { GuidesEmploiService } from './guides-emploi.service';

describe('GuidesEmploiService', () => {
  let service: GuidesEmploiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidesEmploiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
