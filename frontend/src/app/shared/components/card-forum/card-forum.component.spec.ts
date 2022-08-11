import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForumComponent } from './card-forum.component';

describe('CardForumComponent', () => {
  let component: CardForumComponent;
  let fixture: ComponentFixture<CardForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
