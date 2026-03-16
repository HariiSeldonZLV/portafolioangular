import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experiencia',
  standalone: true, // Importante para componentes modernos
  imports: [CommonModule, RouterModule, MatIconModule], // Esto arregla el error de mat-icon
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
})
export class ExperienciaComponent { } // Cambiado de 'Experiencia' a 'ExperienciaComponent'
