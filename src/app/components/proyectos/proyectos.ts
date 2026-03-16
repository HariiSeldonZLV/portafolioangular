import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class ProyectosComponent {} // <--- ¡Asegúrate que termine en 's' y 'Component'!
