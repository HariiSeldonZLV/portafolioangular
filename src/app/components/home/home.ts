import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './home.html', // <--- Cambiado de ./home.component.html a ./home.html
  styleUrl: './home.scss'     // <--- Cambiado de ./home.component.scss a ./home.scss
})
export class HomeComponent {
  letters = [
    { char: 'd', word: 'HISTORIA', route: '/historia' },
    { char: 's', word: 'SKILLS', route: '/skills' },
    { char: '1', word: 'PROYECTOS', route: '/proyectos' },
    { char: '9', word: 'EXPERIENCIA', route: '/experiencia' },
    { char: '8', word: 'ESTUDIOS', route: '/certificaciones' },
    { char: '0', word: 'CONTACTO', route: '/contacto' }
  ];
}
