import { Injectable } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private apiUrl: string = 'http://localhost:8080/api/pacientes'

  constructor(private httpService: HttpClient){}

  agregarMedico(paciente: Paciente): Observable<Paciente> {
    return this.httpService.post<Paciente>(this.apiUrl,paciente)
  }

  obtenerMedicos(): Observable<Paciente[]> {
    return this.httpService.get<Paciente[]>(this.apiUrl);
  }

  eliminarMedico(index: number): Observable<void> {
    return this.httpService.delete<void>(`${this.apiUrl}/${index}`)
  }

  editarMedico(index: number, updatedPaciente: Paciente) {
    return this.httpService.put<Paciente>(`${this.apiUrl}/${index}`,updatedPaciente )
  }

  obtenerMedicoPorId(id: number): Observable<Paciente> {
    return this.httpService.get<Paciente>(`${this.apiUrl}/${id}`);
  }
}
