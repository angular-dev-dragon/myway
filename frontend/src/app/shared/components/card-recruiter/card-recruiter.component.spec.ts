import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecruiterComponent } from './card-recruiter.component';

describe('CardRecruiterComponent', () => {
  let component: CardRecruiterComponent;
  let fixture: ComponentFixture<CardRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
