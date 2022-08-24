import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCondidaturesSpontaneesComponent } from './list-condidatures-spontanees.component';

describe('ListCondidaturesSpontaneesComponent', () => {
  let component: ListCondidaturesSpontaneesComponent;
  let fixture: ComponentFixture<ListCondidaturesSpontaneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCondidaturesSpontaneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCondidaturesSpontaneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
