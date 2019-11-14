import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { catEstablecimientoComponent } from './categoria-establecimiento.component';

describe('CategoriaEstablecimientoComponent', () => {
  let component: catEstablecimientoComponent;
  let fixture: ComponentFixture<catEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ catEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(catEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
