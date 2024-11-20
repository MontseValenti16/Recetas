import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recetas } from '../../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private apiUrl: string = 'http://localhost:8080/api/recetas'

  constructor(private httpService: HttpClient){}

  agregarReceta(receta: Recetas): Observable<Recetas> {
    return this.httpService.post<Recetas>(this.apiUrl,receta)
  }

  obtenerRecetas(): Observable<Recetas[]> {
    return this.httpService.get<Recetas[]>(this.apiUrl);
  }

  obtenerRecetaPorId(id: number): Observable<Recetas> {
    return this.httpService.get<Recetas>(`${this.apiUrl}/${id}`);
  }
}
