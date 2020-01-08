import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasRealizadasComponent } from './vendas-realizadas.component';

describe('VendasRealizadasComponent', () => {
  let component: VendasRealizadasComponent;
  let fixture: ComponentFixture<VendasRealizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasRealizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
