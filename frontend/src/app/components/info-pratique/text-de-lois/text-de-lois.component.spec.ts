import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDeLoisComponent } from './text-de-lois.component';

describe('TextDeLoisComponent', () => {
  let component: TextDeLoisComponent;
  let fixture: ComponentFixture<TextDeLoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDeLoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDeLoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
