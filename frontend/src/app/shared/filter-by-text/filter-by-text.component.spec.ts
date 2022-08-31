import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByTextComponent } from './filter-by-text.component';

describe('FilterByTextComponent', () => {
  let component: FilterByTextComponent;
  let fixture: ComponentFixture<FilterByTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
