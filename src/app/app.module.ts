import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunasComponent } from './features/administracionGestion/comunas/comunas.component';
import { especialidadComponent } from './features/administracionGestion/especialidades/especialidades.component';
import { catEstablecimientoComponent } from './features/administracionGestion/categoria-establecimiento/categoria-establecimiento.component';
import { EstablecimientoComponent } from './features/administracionGestion/establecimiento/establecimiento.component';
import { Directiva2Directive } from './core/direvtiva2/directiva2.directive';
import { PrestacionesComponent } from './features/administracionGestion/prestaciones/prestaciones.component';
import { RendimientoComponent } from './features/administracionGestion/rendimiento/rendimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    ComunasComponent,
    especialidadComponent,
    catEstablecimientoComponent,
    EstablecimientoComponent,
    Directiva2Directive,
    PrestacionesComponent,
    RendimientoComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
