import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentosService } from '../../services/medicamentos.service';
import { Medicamento } from '../../../models/medicamento.models';

@Component({
  selector: 'app-medicamentos-form',
  templateUrl: './medicamentos-form.component.html',
  styleUrls: ['./medicamentos-form.component.css']
})
export class MedicamentosFormComponent implements OnInit{
  nuevoMedicamento : Medicamento = {
    id: 0,
    nombre: '',
    dosis: '',
    presentacion: '',
    cantidad: '',
    viaAdministracion: ''
    }

    isEditMode = false;

    constructor(
      private medicamentoService: MedicamentosService,
      private router : Router,
      private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
          if(params['id']) {
            this.isEditMode = true;
            const id = +params['id']

            this.medicamentoService.obtenerMedicamentoPorId(id).subscribe(
              (medicamento) => {
                this.nuevoMedicamento = medicamento
              },
              (error) => console.error('Error al obtener el paciente: ', error)
            )
          }
        })
    }

    agregarMedicamento(): void {
      if (this.isEditMode) {
        this.medicamentoService.editarMedicamento(this.nuevoMedicamento.id, this.nuevoMedicamento).subscribe(
          (response) => {
            console.log('Medicamento actualizado:', response);
            this.router.navigate(['medicamentos-list']);
          },
          (error) => console.error('Error al actualizar medicamento: ', error)
        );
      } else {
        this.medicamentoService.agregarMedicamento(this.nuevoMedicamento).subscribe(
          (response) => {
            console.log('Nuevo Medicamento agregado:', response);
            this.router.navigate(['medicamentos-list']);
          },
          (error) => console.error('Error al agregar Medicamento: ', error)
        );
      }
    }
}
