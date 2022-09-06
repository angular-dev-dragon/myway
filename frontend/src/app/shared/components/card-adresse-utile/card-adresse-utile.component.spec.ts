import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdresseUtileComponent } from './card-adresse-utile.component';

describe('CardAdresseUtileComponent', () => {
  let component: CardAdresseUtileComponent;
  let fixture: ComponentFixture<CardAdresseUtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdresseUtileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAdresseUtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
