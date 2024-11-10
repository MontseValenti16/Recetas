import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from '../../models/medicamento.models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  private apiUrl: string = 'http://localhost:8080/api/medicamentos'

  constructor(private httpService: HttpClient){}

  agregarMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.httpService.post<Medicamento>(this.apiUrl,medicamento)
  }

  obtenerMedicamentos(): Observable<Medicamento[]> {
    return this.httpService.get<Medicamento[]>(this.apiUrl);
  }

  eliminarMedicamento(index: number): Observable<void> {
    return this.httpService.delete<void>(`${this.apiUrl}/${index}`)
  }

  editarMedicamento(index: number, updatedMedicamento: Medicamento) {
    return this.httpService.put<Medicamento>(`${this.apiUrl}/${index}`,updatedMedicamento )
  }

  obtenerMedicamentoPorId(id: number): Observable<Medicamento> {
    return this.httpService.get<Medicamento>(`${this.apiUrl}/${id}`);
  }

}
