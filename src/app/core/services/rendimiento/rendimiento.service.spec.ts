import { TestBed } from '@angular/core/testing';

import { RendimientoService } from './rendimiento.service';

describe('RendimientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendimientoService = TestBed.get(RendimientoService);
    expect(service).toBeTruthy();
  });
});
