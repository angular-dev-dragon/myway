import { TestBed } from '@angular/core/testing';

import { DemandeSpecifiqueService } from './demande-specifique.service';

describe('DemandeSpecifiqueService', () => {
  let service: DemandeSpecifiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeSpecifiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
