import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServesLandingPageCardsComponent } from './show-serves-landing-page-cards.component';

describe('ShowServesLandingPageCardsComponent', () => {
  let component: ShowServesLandingPageCardsComponent;
  let fixture: ComponentFixture<ShowServesLandingPageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowServesLandingPageCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowServesLandingPageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
