import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsRecrutementsComponent } from './cabinets-recrutements.component';

describe('CabinetsRecrutementsComponent', () => {
  let component: CabinetsRecrutementsComponent;
  let fixture: ComponentFixture<CabinetsRecrutementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetsRecrutementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetsRecrutementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
