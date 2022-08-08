import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilsPratiqueComponent } from './conseils-pratique.component';

describe('ConseilsPratiqueComponent', () => {
  let component: ConseilsPratiqueComponent;
  let fixture: ComponentFixture<ConseilsPratiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilsPratiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilsPratiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
