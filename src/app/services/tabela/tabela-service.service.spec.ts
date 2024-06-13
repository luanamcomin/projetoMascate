import { TestBed } from '@angular/core/testing';

import { TabelaServiceService } from './tabela-service.service';

describe('TabelaServiceService', () => {
  let service: TabelaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
