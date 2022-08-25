import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatListComponent } from './condidat-list.component';

describe('CondidatListComponent', () => {
  let component: CondidatListComponent;
  let fixture: ComponentFixture<CondidatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
