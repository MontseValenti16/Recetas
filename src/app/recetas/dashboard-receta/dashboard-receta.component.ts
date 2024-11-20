import { Component, OnInit } from '@angular/core';
import { ListaMedicamentosService } from '../../services/lista-medicamentos.service';
import { ListaMC } from '../../../models/lista-mc';
import jsPDF from 'jspdf';

interface PacienteConMedicamentos {
  paciente: ListaMC;
  medicamentos: ListaMC[];
}
  
@Component({
  selector: 'app-dashboard-receta',
  templateUrl: './dashboard-receta.component.html',
  styleUrls: ['./dashboard-receta.component.css'],
})
export class DashboardRecetaComponent implements OnInit {
  pacientesConMedicamentos: PacienteConMedicamentos[] = [];

  constructor(private listaService: ListaMedicamentosService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.listaService.obtenerLista().subscribe((response) => {
      const agrupados: { [key: string]: PacienteConMedicamentos } = response.reduce(
        (acc: { [key: string]: PacienteConMedicamentos }, item: ListaMC) => {
          const key = item.Paciente;
          if (!acc[key]) {
            acc[key] = { paciente: item, medicamentos: [] };
          }
          acc[key].medicamentos.push(item);
          return acc;
        },
        {}
      );

      this.pacientesConMedicamentos = Object.values(agrupados);
    });
  }

  generarPDF(paciente: ListaMC, medicamentos: ListaMC[]): void {
    const doc = new jsPDF();

    doc.text(`Paciente: ${paciente.Paciente}`, 10, 10);
    doc.text(`Edad: ${paciente.edad}`, 10, 20);
    doc.text(`Sexo: ${paciente.sexo}`, 10, 30);
    doc.text(`Enfermedad: ${paciente.Enfermedad}`, 10, 40);
    doc.text('Medicamentos:', 10, 50);

    let y = 60;
    medicamentos.forEach((medicamento, index) => {
      doc.text(
        `${index + 1}. Nombre: ${medicamento.Medicamento}, Dosis: ${medicamento.dosis}, Presentación: ${medicamento.presentacion}, Cantidad: ${medicamento.cantidad}`,
        10,
        y
      );
      y += 10;
    });

    doc.save(`receta_${paciente.Paciente}.pdf`);
  }
}
