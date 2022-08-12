import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageHistoriqueComponent } from './sondage-historique.component';

describe('SondageHistoriqueComponent', () => {
  let component: SondageHistoriqueComponent;
  let fixture: ComponentFixture<SondageHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SondageHistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SondageHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
