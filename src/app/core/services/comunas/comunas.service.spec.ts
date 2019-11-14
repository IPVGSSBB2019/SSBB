import { TestBed } from '@angular/core/testing';

import { ComunaService } from './comunas.service';

describe('ComunasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunaService = TestBed.get(ComunaService);
    expect(service).toBeTruthy();
  });
});
