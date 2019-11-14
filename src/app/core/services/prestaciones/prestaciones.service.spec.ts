import { TestBed } from '@angular/core/testing';

import { PrestacionesService } from './prestaciones.service';

describe('PrestacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestacionesService = TestBed.get(PrestacionesService);
    expect(service).toBeTruthy();
  });
});
