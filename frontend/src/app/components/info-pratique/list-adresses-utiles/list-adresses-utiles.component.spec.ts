import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdressesUtilesComponent } from './list-adresses-utiles.component';

describe('ListAdressesUtilesComponent', () => {
  let component: ListAdressesUtilesComponent;
  let fixture: ComponentFixture<ListAdressesUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdressesUtilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdressesUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
