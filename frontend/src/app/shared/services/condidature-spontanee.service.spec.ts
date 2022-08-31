import { TestBed } from '@angular/core/testing';

import { CondidatureSpontaneeService } from './condidature-spontanee.service';

describe('CondidatureSpontaneeService', () => {
  let service: CondidatureSpontaneeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidatureSpontaneeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
