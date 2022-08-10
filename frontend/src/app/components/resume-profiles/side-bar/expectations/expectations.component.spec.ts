import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectationsComponent } from './expectations.component';

describe('ExpectationsComponent', () => {
  let component: ExpectationsComponent;
  let fixture: ComponentFixture<ExpectationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
