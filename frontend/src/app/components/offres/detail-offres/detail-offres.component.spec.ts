import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOffresComponent } from './detail-offres.component';

describe('DetailOffresComponent', () => {
  let component: DetailOffresComponent;
  let fixture: ComponentFixture<DetailOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
