import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMetiersComponent } from './list-metiers.component';

describe('ListMetiersComponent', () => {
  let component: ListMetiersComponent;
  let fixture: ComponentFixture<ListMetiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMetiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
