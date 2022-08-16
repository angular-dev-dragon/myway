import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRecruiterComponent } from './details-recruiter.component';

describe('DetailsRecruiterComponent', () => {
  let component: DetailsRecruiterComponent;
  let fixture: ComponentFixture<DetailsRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
