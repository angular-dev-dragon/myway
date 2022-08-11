import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsThemeComponent } from './details-theme.component';

describe('DetailsThemeComponent', () => {
  let component: DetailsThemeComponent;
  let fixture: ComponentFixture<DetailsThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
