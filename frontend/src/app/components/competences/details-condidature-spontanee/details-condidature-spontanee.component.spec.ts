import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCondidatureSpontaneeComponent } from './details-condidature-spontanee.component';

describe('DetailsCondidatureSpontaneeComponent', () => {
  let component: DetailsCondidatureSpontaneeComponent;
  let fixture: ComponentFixture<DetailsCondidatureSpontaneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCondidatureSpontaneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCondidatureSpontaneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
