import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCondidatsComponent } from './list-condidats.component';

describe('ListCondidatsComponent', () => {
  let component: ListCondidatsComponent;
  let fixture: ComponentFixture<ListCondidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCondidatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCondidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
