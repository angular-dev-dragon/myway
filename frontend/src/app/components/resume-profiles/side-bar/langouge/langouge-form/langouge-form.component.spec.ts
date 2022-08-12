import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangougeFormComponent } from './langouge-form.component';

describe('LangougeFormComponent', () => {
  let component: LangougeFormComponent;
  let fixture: ComponentFixture<LangougeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangougeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangougeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
