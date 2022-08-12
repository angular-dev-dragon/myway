import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfileFromComponent } from './header-profile-from.component';

describe('HeaderProfileFromComponent', () => {
  let component: HeaderProfileFromComponent;
  let fixture: ComponentFixture<HeaderProfileFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProfileFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderProfileFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
