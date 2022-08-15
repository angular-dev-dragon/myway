import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCerificatLayoutComponent } from './education-cerificat-layout.component';

describe('EducationCerificatLayoutComponent', () => {
  let component: EducationCerificatLayoutComponent;
  let fixture: ComponentFixture<EducationCerificatLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationCerificatLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCerificatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
