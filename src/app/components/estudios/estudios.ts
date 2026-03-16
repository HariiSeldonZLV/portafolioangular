import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './estudios.html',
  styleUrl: './estudios.scss',
  encapsulation: ViewEncapsulation.None
})
export class EstudiosComponent {
  // Asegúrate de que esté DENTRO de la clase y sea pública
  public formacion = [
    {
      titulo: "DESARROLLO FRONT-END JUNIOR",
      institucion: "Bootcamp SENCE",
      icon: "language",
      destacado: true,
      tag: "STACK_TECNOLÓGICO"
    },
    {
      titulo: "Técnico en Mantenimiento Electrónico",
      institucion: "Instituto Lecciona",
      icon: "settings",
      destacado: false
    },
    {
      titulo: "Técnico en Informática",
      institucion: "Instituto IACC",
      icon: "desktop_windows",
      destacado: false
    },
    {
      titulo: "PMER Officer",
      institucion: "Deutsches Rotes Kreuz, Berlin, Deutschland",
      icon: "laptop",
      destacado: false
    },
    {
      titulo: "Derecho",
      institucion: "Universidad de Valparaíso (8 semestres cursados)",
      icon: "gavel",
      destacado: false
    }
  ];

  constructor() { }
}
