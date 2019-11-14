import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunasComponent } from './features/administracionGestion/comunas/comunas.component';
import { especialidadComponent } from'./features/administracionGestion/especialidades/especialidades.component'
import {catEstablecimientoComponent} from './features/administracionGestion/categoria-establecimiento/categoria-establecimiento.component'
import { EstablecimientoComponent } from './features/administracionGestion/establecimiento/establecimiento.component';
import { PrestacionesComponent } from './features/administracionGestion/prestaciones/prestaciones.component';
import { RendimientoComponent } from './features/administracionGestion/rendimiento/rendimiento.component';


const routes: Routes = [
  {path:'', component:RendimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
