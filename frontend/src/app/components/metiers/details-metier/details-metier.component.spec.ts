import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMetierComponent } from './details-metier.component';

describe('DetailsMetierComponent', () => {
  let component: DetailsMetierComponent;
  let fixture: ComponentFixture<DetailsMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMetierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
