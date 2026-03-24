import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './historia.html',
  styleUrl: './historia.scss',
  encapsulation: ViewEncapsulation.None
})
export class HistoriaComponent {
  timelineItems = [
    { year: "2010", desc: "Operación Terremoto Chile — Coordinación internacional de programas de ayuda y Hospital Japonés en Parral." },
    { year: "2016", desc: "Director de Programa de Albergues de Cruz Roja Chilena." },
    { year: "2019", desc: "SAC, devoluciones, cambios y renegociaciones para TURBUS" },
    { year: "2019", desc: "Atención al cliente y soporte tecnológico sistemas de pago electrónico y DTE para TUU" },
    { year: "2020", desc: "Proyectos tecnológicos en seguridad pública en la ciudad de Molina, creación del sistema de detección de vehículos robados en pórticos con IA." },
    { year: "2025", desc: "Transición profesional hacia desarrollo front-end y herramientas IA." }
  ];
}
