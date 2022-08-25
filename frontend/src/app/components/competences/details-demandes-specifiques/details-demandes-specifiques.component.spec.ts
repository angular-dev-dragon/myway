import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDemandesSpecifiquesComponent } from './details-demandes-specifiques.component';

describe('DetailsDemandesSpecifiquesComponent', () => {
  let component: DetailsDemandesSpecifiquesComponent;
  let fixture: ComponentFixture<DetailsDemandesSpecifiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDemandesSpecifiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDemandesSpecifiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
