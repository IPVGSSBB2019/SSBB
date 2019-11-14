import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { especialidadComponent } from './especialidades.component';

describe('EspecialidadesComponent', () => {
  let component: especialidadComponent;
  let fixture: ComponentFixture<especialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ especialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(especialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
