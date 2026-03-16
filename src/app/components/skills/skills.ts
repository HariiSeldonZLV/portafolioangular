import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent {
  // Dividimos por categorías para el grid
  frontend = [
    { name: 'ANGULAR', level: 85 },
    { name: 'VUE.JS', level: 80 },
    { name: 'TYPESCRIPT', level: 85 },
    { name: 'SCSS/SASS', level: 90 }
  ];

  tools = [
    { name: 'GIT/GITHUB', level: 85 },
    { name: 'FIREBASE', level: 70 },
    { name: 'AI PROMPTING', level: 95 },
    { name: 'UI/UX DESIGN', level: 75 }
  ];
}
