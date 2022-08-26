import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOffreDetailsVerticaleComponent } from './card-offre-details-verticale.component';

describe('CardOffreDetailsVerticaleComponent', () => {
  let component: CardOffreDetailsVerticaleComponent;
  let fixture: ComponentFixture<CardOffreDetailsVerticaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOffreDetailsVerticaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOffreDetailsVerticaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
