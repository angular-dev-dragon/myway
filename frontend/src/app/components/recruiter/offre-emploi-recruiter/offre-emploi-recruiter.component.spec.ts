import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEmploiRecruiterComponent } from './offre-emploi-recruiter.component';

describe('OffreEmploiRecruiterComponent', () => {
  let component: OffreEmploiRecruiterComponent;
  let fixture: ComponentFixture<OffreEmploiRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreEmploiRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreEmploiRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
