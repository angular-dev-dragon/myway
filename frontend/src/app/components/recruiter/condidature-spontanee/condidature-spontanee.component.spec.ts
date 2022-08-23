import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatureSpontaneeComponent } from './condidature-spontanee.component';

describe('CondidatureSpontaneeComponent', () => {
  let component: CondidatureSpontaneeComponent;
  let fixture: ComponentFixture<CondidatureSpontaneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatureSpontaneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidatureSpontaneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
