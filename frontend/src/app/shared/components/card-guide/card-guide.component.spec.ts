import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGuideComponent } from './card-guide.component';

describe('CardGuideComponent', () => {
  let component: CardGuideComponent;
  let fixture: ComponentFixture<CardGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
