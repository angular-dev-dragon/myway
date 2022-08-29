import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMetiersComponent } from './card-metiers.component';

describe('CardMetiersComponent', () => {
  let component: CardMetiersComponent;
  let fixture: ComponentFixture<CardMetiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMetiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
