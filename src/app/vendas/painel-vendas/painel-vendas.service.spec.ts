import { TestBed } from '@angular/core/testing';

import { PainelVendasService } from './painel-vendas.service';

describe('PainelVendasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PainelVendasService = TestBed.get(PainelVendasService);
    expect(service).toBeTruthy();
  });
});
