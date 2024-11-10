import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../models/paciente.model';
import { Medicamento } from '../../../models/medicamento.models';
import { Recetas } from '../../../models/receta.model';
import { MedicoService } from '../../services/medico.service';
import { MedicamentosService } from '../../services/medicamentos.service';
import { RecetasService } from '../../services/recetas.service';
import { ListaMedicamentosService } from '../../services/lista-medicamentos.service';
import { listaMedicamentos } from '../../../models/listaMedicamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-receta',
  templateUrl: './register-receta.component.html',
  styleUrls: ['./register-receta.component.css'],
})
export class RegisterRecetaComponent implements OnInit {
  pacientes: Paciente[] = [];
  medicamentos: Medicamento[] = [];
  medicamentosSeleccionados: Medicamento[] = [];
  pacienteSeleccionado: Paciente | null = null;
  enfermedad: string = '';
  nuevaReceta: Recetas = {
    idReceta: 0,
    idPaciente: 0,
    Enfermedad: '',
  };

  constructor(
    private pacienteService: MedicoService,
    private mediService: MedicamentosService,
    private recetasService: RecetasService,
    private listaMedicamentosService: ListaMedicamentosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pacienteService.obtenerMedicos().subscribe((response) => {
      this.pacientes = response;
    });

    this.mediService.obtenerMedicamentos().subscribe((response) => {
      this.medicamentos = response;
    });
  }

  agregarReceta(): void {
    if (this.nuevaReceta.idPaciente && this.enfermedad && this.medicamentosSeleccionados.length > 0) {
      this.nuevaReceta.Enfermedad = this.enfermedad;

      this.recetasService.agregarReceta(this.nuevaReceta).subscribe((recetaCreada) => {
        const listasDeMedicamentos: listaMedicamentos[] = this.medicamentosSeleccionados.map((medicamento) => {
          return {
            idLista: 0,
            idMedicamento: medicamento.id,
            idReceta: recetaCreada.idReceta,
          };
        });

        listasDeMedicamentos.forEach((lista) => {
          this.listaMedicamentosService.agregarLista(lista).subscribe(() => {
            console.log('Medicamento agregado a la lista:', lista);
            this.router.navigate(['dashboard-recetas']);
          });
        });
      });
    } else {
      console.error('Por favor, complete todos los campos y seleccione al menos un medicamento.');
    }
  }
}
