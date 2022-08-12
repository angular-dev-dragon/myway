import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogeurComponent } from './list-blogeur.component';

describe('ListBlogeurComponent', () => {
  let component: ListBlogeurComponent;
  let fixture: ComponentFixture<ListBlogeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBlogeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
