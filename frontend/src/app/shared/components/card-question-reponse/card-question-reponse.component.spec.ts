import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuestionReponseComponent } from './card-question-reponse.component';

describe('CardQuestionReponseComponent', () => {
  let component: CardQuestionReponseComponent;
  let fixture: ComponentFixture<CardQuestionReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardQuestionReponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardQuestionReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
