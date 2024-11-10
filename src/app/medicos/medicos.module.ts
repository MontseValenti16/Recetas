import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicosFormComponent } from './medicos-form/medicos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicosListComponent } from './medicos-list/medicos-list.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    MedicosFormComponent,
    MedicosListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    MedicosFormComponent,
  ]
})
export class MedicosModule { }
