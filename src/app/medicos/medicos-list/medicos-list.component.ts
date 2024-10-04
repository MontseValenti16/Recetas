import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../../models/medico.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.css']
})
export class MedicosListComponent implements OnInit {
  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarMedicos();
  }

  cargarMedicos() {
    this.medicos = this.medicoService.getMedicos();
  }

  editarMedico(medico: Medico) {
    this.router.navigate(['/agregar-medico'], { state: { medico } });
  }

  eliminarMedico(id: number) {
    this.medicoService.deleteMedico(id);
    this.cargarMedicos();
  }
}
