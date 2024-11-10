import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentosService } from '../../services/medicamentos.service';
import { Medicamento } from '../../../models/medicamento.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicamentos-list',
  templateUrl: './medicamentos-list.component.html',
  styleUrls: ['./medicamentos-list.component.css'],
})
export class MedicamentosListComponent implements OnInit {
  medicamentos: Medicamento[] = [];
  medicamentoSelect: Medicamento | null = null;

  constructor(
    private medicamentoService: MedicamentosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedicamentos();
  }

  getMedicamentos(): void {
    this.medicamentoService
      .obtenerMedicamentos()
      .subscribe((response) => (this.medicamentos = response),
    error =>
      console.error("Error: ", error)
    );
  }

  selectPaciente(medicamento: Medicamento): void {
    this.medicamentoSelect = { ...medicamento };
  }

  updateMedicamento(medicamento: Medicamento): void {
    this.medicamentoSelect = medicamento
    this.router.navigate(['medicamentos-form'], { queryParams: { id: medicamento.id } });
  }

  deleteMedicamento(id: number): void {
    this.medicamentoService.eliminarMedicamento(id).subscribe(
      ()=>{
        this.medicamentos = this.medicamentos.filter(user => user.id !== id)
      },error => {console.error("Error al actualizar", error);}

    )
  }
}
