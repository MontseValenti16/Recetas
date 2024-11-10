import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentosFormComponent } from './medicamentos-form/medicamentos-form.component';
import { MedicamentosListComponent } from './medicamentos-list/medicamentos-list.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    MedicamentosFormComponent,
    MedicamentosListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    MedicamentosFormComponent
  ]
})
export class MedicamentosModule { }
