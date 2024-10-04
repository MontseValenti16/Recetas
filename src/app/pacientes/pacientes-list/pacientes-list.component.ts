import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../../models/paciente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.pacientes = this.pacienteService.getPacientes();
  }

  editarPaciente(paciente: Paciente) {
    this.router.navigate(['/agregar-paciente'], { state: { paciente } });
  }


  eliminarPaciente(id: number) {
    this.pacienteService.deletePaciente(id);
    this.cargarPacientes(); 
  }
}
