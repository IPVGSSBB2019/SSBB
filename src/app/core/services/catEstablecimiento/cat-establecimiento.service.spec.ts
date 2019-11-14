import { TestBed } from '@angular/core/testing';

import { CatEstablecimientoService } from './cat-establecimiento.service';

describe('CatEstablecimientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatEstablecimientoService = TestBed.get(CatEstablecimientoService);
    expect(service).toBeTruthy();
  });
});
