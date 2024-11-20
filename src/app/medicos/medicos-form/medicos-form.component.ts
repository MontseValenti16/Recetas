import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { Paciente } from '../../../models/paciente.model';

@Component({
  selector: 'app-medicos-form',
  templateUrl: './medicos-form.component.html',
  styleUrls: ['./medicos-form.component.css']
})
export class MedicosFormComponent implements OnInit {
  nuevoPaciente: Paciente = {
    id: 0,
    nombre: '',
    email: '',
    edad: 0,
    sexo: '',
    telefono: ''
  };
  isEditMode = false;

  constructor(
    private pacienteService: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        const id = +params['id'];
        this.pacienteService.obtenerMedicoPorId(id).subscribe(
          (paciente) => {
            this.nuevoPaciente = paciente;
          },
          (error) => console.error('Error al obtener el paciente: ', error)
        );
      }
    });
  }

  agregarMedico(): void {
    if (this.isEditMode) {
      this.pacienteService.editarMedico(this.nuevoPaciente.id, this.nuevoPaciente).subscribe(
        (response) => {
          console.log('Paciente actualizado:', response);
          this.router.navigate(['medicos-list']);
        },
        (error) => console.error('Error al actualizar paciente: ', error)
      );
    } else {
      this.pacienteService.agregarMedico(this.nuevoPaciente).subscribe(
        (response) => {
          console.log('Nuevo paciente agregado:', response);
          this.router.navigate(['medicos-list']);
        },
        (error) => console.error('Error al agregar paciente: ', error)
      );
    }
  }
}
