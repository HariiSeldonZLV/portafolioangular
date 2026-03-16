import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProyectosComponent {

  // Datos de Proyectos Web
  webProjects = [
    {
      title: 'MAULENOTICIAS_2.0',
      subtitle: 'Interfaz Dinámica de Noticias',
      desc: 'Desarrollado como proyecto personal para explorar el manejo de estados y consumo de datos en tiempo real.',
      img: '/assets/maulenoticias.png', // <--- Añadida la barra inicial
      url: 'https://hariiseldonzlv.github.io/maulenoticias2/#/'
    },
    {
      title: 'DIPUTADA_PRISCILLA_CASTILLO',
      subtitle: 'Vue 3 + Vuetify + Netlify',
      desc: 'Plataforma institucional con despliegue continuo, optimizada para accesibilidad y servicio público.',
      img: '/assets/priscilla.png', // <--- Añadida la barra inicial
      url: 'https://super-creponne-d29a1a.netlify.app'
    }
  ];

  // Datos de Videos Humanitarios
  videos = [
    { title: 'MEDIOS_VIDA_PESQUEROS', id: '58VOpib2BaI', desc: 'Coordinación en terreno para el fortalecimiento de comunidades pesqueras locales.' },
    { title: 'INICIATIVA_APICULTURA', id: 'MM1rrrzJgXk', desc: 'Desarrollo de proyectos productivos apícolas para el sustento de familias rurales.' },
    { title: 'RED_RECONSTRUCCIÓN', id: '4wj9yxXswqQ', desc: 'Gestión de red para reconstrucción habitacional post-terremoto 2010.' }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  // Función para que Angular acepte los iframes de YouTube sin errores de seguridad
  getSafeUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
  }
}
