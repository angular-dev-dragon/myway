import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemoignageComponent } from './card-temoignage.component';

describe('CardTemoignageComponent', () => {
  let component: CardTemoignageComponent;
  let fixture: ComponentFixture<CardTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTemoignageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
