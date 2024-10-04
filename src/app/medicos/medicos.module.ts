import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosFormComponent } from './medicos-form/medicos-form.component';
import { MedicosListComponent } from './medicos-list/medicos-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MedicosFormComponent,
    MedicosListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MedicosFormComponent,
    MedicosListComponent
  ]
})
export class MedicosModule { }
