import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PacientesFormComponent,
    PacientesListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PacientesFormComponent,
    PacientesListComponent
  ]
})
export class PacientesModule { }
