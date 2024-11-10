import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { listaMedicamentos } from '../../models/listaMedicamento.model';
import { ListaMC } from '../../models/lista-mc';

@Injectable({
  providedIn: 'root'
})
export class ListaMedicamentosService {
  private apiUrl: string = 'http://localhost:8080/api/listaMedicamentos'

  constructor(private httpService: HttpClient){}

  agregarLista(receta: listaMedicamentos): Observable<listaMedicamentos> {
    return this.httpService.post<listaMedicamentos>(this.apiUrl,receta)
  }

  obtenerLista(): Observable<ListaMC[]> {
    return this.httpService.get<ListaMC[]>(`${this.apiUrl}/lista/details/`);
  }

  obtenerListaPorId(id: number): Observable<listaMedicamentos> {
    return this.httpService.get<listaMedicamentos>(`${this.apiUrl}/${id}`);
  }
}
