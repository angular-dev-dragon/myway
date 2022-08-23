import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCardInfoGComponent } from './s-card-info-g.component';

describe('SCardInfoGComponent', () => {
  let component: SCardInfoGComponent;
  let fixture: ComponentFixture<SCardInfoGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCardInfoGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCardInfoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
