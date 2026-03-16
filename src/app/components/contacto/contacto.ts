import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class ContactoComponent {} // <--- Cambiado a ContactoComponent
