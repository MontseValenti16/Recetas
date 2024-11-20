import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosModule } from './medicos/medicos.module';
import { MedicoService } from './services/medico.service';
import { HomeComponent } from './home/home.component';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecetasModule } from './recetas/recetas.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MedicosModule,
    MedicamentosModule,
    HttpClientModule,
    RecetasModule
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
