import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // <--- Esto arregla el error de mat-icon

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule], // <--- Importante incluirlos aquí
  templateUrl: './historia.html',
  styleUrl: './historia.scss'
})
export class HistoriaComponent { } // <--- Asegúrate que el nombre sea HistoriaComponent
