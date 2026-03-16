import { Component, ViewEncapsulation } from '@angular/core'; // Añadido ViewEncapsulation
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './historia.html',
  styleUrl: './historia.scss',
  encapsulation: ViewEncapsulation.None // Ahora sí funcionará
})
export class HistoriaComponent {
  timelineItems = [
    { year: "1996", desc: "Inicio trabajo humanitario con Cruz Roja." },
    { year: "2007", desc: "INE — Desarrollo del nuevo IPC nacional." },
    { year: "2010", desc: "Operación Terremoto Chile — Coordinación internacional y Hospital Japonés." },
    { year: "2019", desc: "Soporte tecnológico sistemas de pago electrónico y DTE." },
    { year: "2020", desc: "Proyectos tecnológicos en seguridad pública con IA." },
    { year: "2025", desc: "Transición profesional hacia desarrollo front-end." }
  ];
}
