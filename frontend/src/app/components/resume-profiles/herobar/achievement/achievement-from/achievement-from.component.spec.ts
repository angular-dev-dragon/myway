import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementFromComponent } from './achievement-from.component';

describe('AchievementFromComponent', () => {
  let component: AchievementFromComponent;
  let fixture: ComponentFixture<AchievementFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
