import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatsCardComponent } from './condidats-card.component';

describe('CondidatsCardComponent', () => {
  let component: CondidatsCardComponent;
  let fixture: ComponentFixture<CondidatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
