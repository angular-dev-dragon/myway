import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidaCartTowComponent } from './condida-cart-tow.component';

describe('CondidaCartTowComponent', () => {
  let component: CondidaCartTowComponent;
  let fixture: ComponentFixture<CondidaCartTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidaCartTowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidaCartTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
