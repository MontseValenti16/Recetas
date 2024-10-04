import { Injectable } from '@angular/core';
import { Medico } from '../../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private medicos: Medico[] = [];
  private idCounter: number = 1;

  constructor() { }

  addMedico(medico: Medico) {
    medico.id = this.idCounter++;
    this.medicos.push(medico);
    console.log('Médico agregado:', medico);
  }

  getMedicos() {
    return this.medicos;
  }

  updateMedico(medicoActualizado: Medico) {
    const index = this.medicos.findIndex(m => m.id === medicoActualizado.id);
    if (index !== -1) {
      this.medicos[index] = medicoActualizado;
      console.log('Médico actualizado:', medicoActualizado);
    }
  }

  deleteMedico(id: number) {
    this.medicos = this.medicos.filter(medico => medico.id !== id);
    console.log('Médico eliminado con ID:', id);
  }

  getMedicoById(id: number): Medico | undefined {
    return this.medicos.find(medico => medico.id === id);
  }
}
