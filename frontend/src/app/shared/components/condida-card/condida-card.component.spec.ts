import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidaCardComponent } from './condida-card.component';

describe('CondidaCardComponent', () => {
  let component: CondidaCardComponent;
  let fixture: ComponentFixture<CondidaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
