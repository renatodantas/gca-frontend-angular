import { TestBed } from '@angular/core/testing';

import { AgrupamentoService } from './agrupamento.service';

describe('AgrupamentoService', () => {
  let service: AgrupamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrupamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
