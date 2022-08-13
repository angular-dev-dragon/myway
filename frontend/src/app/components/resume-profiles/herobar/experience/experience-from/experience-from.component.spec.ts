import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceFromComponent } from './experience-from.component';

describe('ExperienceFromComponent', () => {
  let component: ExperienceFromComponent;
  let fixture: ComponentFixture<ExperienceFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
