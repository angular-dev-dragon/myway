import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidaDetailsComponent } from './condida-details.component';

describe('CondidaDetailsComponent', () => {
  let component: CondidaDetailsComponent;
  let fixture: ComponentFixture<CondidaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
