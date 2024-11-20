import { RegisterRecetaComponent } from './register-receta/register-receta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DashboardRecetaComponent } from './dashboard-receta/dashboard-receta.component';



@NgModule({
  declarations: [
    RegisterRecetaComponent,
    DashboardRecetaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    RegisterRecetaComponent
  ]
})
export class RecetasModule { }
