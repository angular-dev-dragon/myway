import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOffreComponent } from './card-offre.component';

describe('CardOffreComponent', () => {
  let component: CardOffreComponent;
  let fixture: ComponentFixture<CardOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
