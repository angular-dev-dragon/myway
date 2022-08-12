import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOffreHorizontaleComponent } from './card-offre-horizontale.component';

describe('CardOffreHorizontaleComponent', () => {
  let component: CardOffreHorizontaleComponent;
  let fixture: ComponentFixture<CardOffreHorizontaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOffreHorizontaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOffreHorizontaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
