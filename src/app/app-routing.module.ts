import { RegisterRecetaComponent } from './recetas/register-receta/register-receta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicosFormComponent } from './medicos/medicos-form/medicos-form.component';
import { MedicosListComponent } from './medicos/medicos-list/medicos-list.component';
import { MedicamentosFormComponent } from './medicamentos/medicamentos-form/medicamentos-form.component';
import { MedicamentosListComponent } from './medicamentos/medicamentos-list/medicamentos-list.component';
import { DashboardRecetaComponent } from './recetas/dashboard-receta/dashboard-receta.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medicos-form', component: MedicosFormComponent},
  { path: 'medicos-list', component: MedicosListComponent},
  { path: 'medicamentos-form', component: MedicamentosFormComponent},
  { path: 'medicamentos-list', component: MedicamentosListComponent},
  { path: 'recetas-form', component: RegisterRecetaComponent},
  { path: 'dashboard-recetas', component: DashboardRecetaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
