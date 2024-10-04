import { Injectable } from '@angular/core';
import { Paciente } from '../../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacientes: Paciente[] = [];
  private idCounter: number = 1;

  constructor() { }

  addPaciente(paciente: Paciente) {
    paciente.id = this.idCounter++;
    this.pacientes.push(paciente);
    console.log('Paciente agregado:', paciente);
  }

  getPacientes() {
    return this.pacientes;
  }

  updatePaciente(pacienteActualizado: Paciente) {
    const index = this.pacientes.findIndex(p => p.id === pacienteActualizado.id);
    if (index !== -1) {
      this.pacientes[index] = pacienteActualizado;
      console.log('Paciente actualizado:', pacienteActualizado);
    }
  }

  deletePaciente(id: number) {
    this.pacientes = this.pacientes.filter(paciente => paciente.id !== id);
    console.log('Paciente eliminado con ID:', id);
  }

  getPacienteById(id: number): Paciente | undefined {
    return this.pacientes.find(paciente => paciente.id === id);
  }
}
