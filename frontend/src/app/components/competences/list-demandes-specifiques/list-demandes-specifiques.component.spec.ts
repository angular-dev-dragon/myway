import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandesSpecifiquesComponent } from './list-demandes-specifiques.component';

describe('ListDemandesSpecifiquesComponent', () => {
  let component: ListDemandesSpecifiquesComponent;
  let fixture: ComponentFixture<ListDemandesSpecifiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemandesSpecifiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDemandesSpecifiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
