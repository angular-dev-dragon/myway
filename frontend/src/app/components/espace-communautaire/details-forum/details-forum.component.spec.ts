import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsForumComponent } from './details-forum.component';

describe('DetailsForumComponent', () => {
  let component: DetailsForumComponent;
  let fixture: ComponentFixture<DetailsForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
