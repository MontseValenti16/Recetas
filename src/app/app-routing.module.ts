import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesListComponent } from './pacientes/pacientes-list/pacientes-list.component';
import { PacientesFormComponent } from './pacientes/pacientes-form/pacientes-form.component';
import { MedicosListComponent } from './medicos/medicos-list/medicos-list.component';
import { MedicamentosFormComponent } from './medicamentos/medicamentos-form/medicamentos-form.component';

const routes: Routes = [
  { path: 'lista-medicos', component: MedicosListComponent },
  { path: 'agregar-medico', component: MedicamentosFormComponent },
  { path: 'lista-pacientes', component: PacientesListComponent },
  { path: 'agregar-paciente', component: PacientesFormComponent },
  { path: '', redirectTo: '/agregar-paciente', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
