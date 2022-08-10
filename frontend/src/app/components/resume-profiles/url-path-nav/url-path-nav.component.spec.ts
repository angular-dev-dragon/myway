import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPathNavComponent } from './url-path-nav.component';

describe('UrlPathNavComponent', () => {
  let component: UrlPathNavComponent;
  let fixture: ComponentFixture<UrlPathNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlPathNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlPathNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
