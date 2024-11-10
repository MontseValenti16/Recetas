import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { Router } from '@angular/router';
import { Paciente } from '../../../models/paciente.model';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.css'],
})
export class MedicosListComponent implements OnInit {
  pacientes: Paciente[] = [];
  pacienteSeleccionado: Paciente | null = null;

  constructor(
    private pacienteService: MedicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.pacienteService.obtenerMedicos().subscribe(
      (response) => {
        this.pacientes = response;
      },
      (error) => console.error('Error: ', error)
    );
  }

  selectPaciente(paciente: Paciente): void {
    this.pacienteSeleccionado = { ...paciente };
  }

  updatePaciente(paciente: Paciente): void {
    this.pacienteSeleccionado = paciente;
    this.router.navigate(['medicos-form'], { queryParams: { id: paciente.id } });
  }

  deletePaciente(id: number): void {
    this.pacienteService.eliminarMedico(id).subscribe(
      ()=>{
        this.pacientes = this.pacientes.filter(user => user.id !== id)
      },error => {console.error("Error al actualizar", error);}

    )
  }
}
