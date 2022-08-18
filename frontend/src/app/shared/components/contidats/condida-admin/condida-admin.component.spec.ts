import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidaAdminComponent } from './condida-admin.component';

describe('CondidaAdminComponent', () => {
  let component: CondidaAdminComponent;
  let fixture: ComponentFixture<CondidaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
