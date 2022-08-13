import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesFromComponent } from './hobbies-from.component';

describe('HobbiesFromComponent', () => {
  let component: HobbiesFromComponent;
  let fixture: ComponentFixture<HobbiesFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
