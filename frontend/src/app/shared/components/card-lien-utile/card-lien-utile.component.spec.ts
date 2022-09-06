import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLienUtileComponent } from './card-lien-utile.component';

describe('CardLienUtileComponent', () => {
  let component: CardLienUtileComponent;
  let fixture: ComponentFixture<CardLienUtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLienUtileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLienUtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
