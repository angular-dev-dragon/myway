import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffresEmploiComponent } from './list-offres-emploi.component';

describe('ListOffresEmploiComponent', () => {
  let component: ListOffresEmploiComponent;
  let fixture: ComponentFixture<ListOffresEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffresEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOffresEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
