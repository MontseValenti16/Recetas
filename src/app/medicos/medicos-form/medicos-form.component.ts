import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from '../../../models/medico.model';

@Component({
  selector: 'app-medicos-form',
  templateUrl: './medicos-form.component.html',
  styleUrls: ['./medicos-form.component.css']
})
export class MedicosFormComponent implements OnInit {
  medicoForm: FormGroup;
  medicoEditando: Medico | null = null;

  constructor(
    private medicoService: MedicoService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.medicoForm = this.fb.group({
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      cedula: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const medico = history.state.medico as Medico;
    if (medico) {
      this.medicoEditando = medico;
      this.medicoForm.patchValue(medico);
      console.log(history.state.medico);
    }
  }

  onSubmit() {
    if (this.medicoForm.valid) {
      if (this.medicoEditando) {
        const medicoActualizado = { ...this.medicoEditando, ...this.medicoForm.value };
        this.medicoService.updateMedico(medicoActualizado);
      } else {
        this.medicoService.addMedico(this.medicoForm.value);
      }

      this.medicoForm.reset();
      this.router.navigate(['/lista-medicos']);
    }
  }
}
