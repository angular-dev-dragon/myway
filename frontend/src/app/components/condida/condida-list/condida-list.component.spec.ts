import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidaListComponent } from './condida-list.component';

describe('CondidaListComponent', () => {
  let component: CondidaListComponent;
  let fixture: ComponentFixture<CondidaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
