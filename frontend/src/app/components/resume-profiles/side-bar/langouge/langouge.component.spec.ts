import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangougeComponent } from './langouge.component';

describe('LangougeComponent', () => {
  let component: LangougeComponent;
  let fixture: ComponentFixture<LangougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangougeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
