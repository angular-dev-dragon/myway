import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBlogeurComponent } from './details-blogeur.component';

describe('DetailsBlogeurComponent', () => {
  let component: DetailsBlogeurComponent;
  let fixture: ComponentFixture<DetailsBlogeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBlogeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBlogeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
