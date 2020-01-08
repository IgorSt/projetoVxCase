import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVendasComponent } from './painel-vendas.component';

describe('PainelVendasComponent', () => {
  let component: PainelVendasComponent;
  let fixture: ComponentFixture<PainelVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
