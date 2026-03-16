import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './estudios.html',
  styleUrl: './estudios.scss',
})
export class EstudiosComponent {} // <--- Cambiado a EstudiosComponent
