import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectationsFormComponent } from './expectations-form.component';

describe('ExpectationsFormComponent', () => {
  let component: ExpectationsFormComponent;
  let fixture: ComponentFixture<ExpectationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
