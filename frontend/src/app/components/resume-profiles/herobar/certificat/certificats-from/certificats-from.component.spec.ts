import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatsFromComponent } from './certificats-from.component';

describe('CertificatsFromComponent', () => {
  let component: CertificatsFromComponent;
  let fixture: ComponentFixture<CertificatsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatsFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
