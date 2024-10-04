import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from '../../../models/paciente.model';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent implements OnInit {
  pacienteForm: FormGroup;
  pacienteEditando: Paciente | null = null;

  constructor(
    private pacienteService: PacienteService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.pacienteForm = this.fb.group({
      id: [null],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const paciente = history.state.paciente as Paciente;
    if (paciente) {
      this.pacienteEditando = paciente;
      this.pacienteForm.patchValue(paciente);
    }
  }



  onSubmit() {
    if (this.pacienteForm.valid) {
      if (this.pacienteForm.value.id) {
        const pacienteActualizado = this.pacienteForm.value;
        this.pacienteService.updatePaciente(pacienteActualizado);
      } else {
        this.pacienteService.addPaciente(this.pacienteForm.value);
      }

      this.pacienteForm.reset();
      this.router.navigate(['/lista-pacientes']);
    }
  }

}
