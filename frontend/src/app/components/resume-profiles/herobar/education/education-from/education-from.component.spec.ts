import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationFromComponent } from './education-from.component';

describe('EducationFromComponent', () => {
  let component: EducationFromComponent;
  let fixture: ComponentFixture<EducationFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
