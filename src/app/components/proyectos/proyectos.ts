// app/components/proyectos/proyectos.ts
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
      title: 'CRUZ ROJA CHILENA',
      subtitle: 'WordPress | Sitio Institucional (Participación inicial)',
      desc: 'Participé en el desarrollo inicial de la plataforma web para Cruz Roja Chilena. El sitio, construido bajo los estándares de WordPress a petición de la institución, incluye un completo gestor de noticias, secciones informativas y formularios de contacto. Su objetivo es difundir la labor humanitaria de la organización a nivel nacional.\n\n📌 Nota: El sitio ha sido actualizado por otros equipos después de mi participación, pero conserva la estructura y funcionalidades centrales que desarrollé.',
      img: '/assets/cruzroja.png',
      url: 'https://www.cruzroja.cl/inicio/',
      tags: ['WordPress', 'PHP', 'JavaScript', 'Institucional']
    },
    {
      title: 'BOSTON REPUESTOS',
      subtitle: 'Ecommerce Pionero | Barrio 10 de Julio',
      desc: 'Desarrollé la primera tienda online del tradicional Barrio 10 de Julio en Santiago. Este ecommerce de repuestos automotrices integró catálogo de productos, carrito de compras y sistema de gestión de pedidos, marcando un hito comercial en la zona.\n\n📌 Nota: El sitio ha sido actualizado por otros equipos después de mi participación, pero conserva la estructura y funcionalidades centrales que desarrollé.',
      img: '/assets/bostonrepuestos.png',
      url: 'https://bostonrepuestos.cl',
      tags: ['Ecommerce', 'Pionero', 'JavaScript', 'UI/UX']
    },
    {
      title: 'PONELE HUEVOS',
      subtitle: 'Ecommerce | Angular 19 + Firebase + Vercel',
      desc: 'Tienda online de productos del campo. Carrito de compras, checkout con formulario de envío, integración con WhatsApp, panel de administración, autenticación segura y gestión de productos en tiempo real.',
      img: '/assets/ponelehuevos.png',
      url: 'https://ponelehuevos3.vercel.app',
      tags: ['Angular', 'Firebase', 'SCSS', 'WhatsApp API', 'Vercel']
    },
    {
      title: 'MJ ESPINOZA - ESCRITORA',
      subtitle: 'Angular 19 + Firebase + Netlify',
      desc: 'Sitio web profesional para escritora chilena. Panel de noticias, carrito de compras, integración WhatsApp, formulario de contacto con anti-spam y autenticación segura.',
      img: '/assets/mjespinoza.png',
      url: 'https://mjescritora.netlify.app',
      tags: ['Angular', 'Firebase', 'SCSS', 'Netlify']
    },
    {
      title: 'MAULENOTICIAS_2.0',
      subtitle: 'Interfaz Dinámica de Noticias',
      desc: 'Desarrollado como proyecto personal para explorar el manejo de estados y consumo de datos en tiempo real.',
      img: '/assets/maulenoticias.png',
      url: 'https://hariiseldonzlv.github.io/maulenoticias2/#/',
      tags: ['Angular', 'API REST', 'Bootstrap']
    },
    {
      title: 'DIPUTADA_PRISCILLA_CASTILLO',
      subtitle: 'Vue 3 + Vuetify + Netlify',
      desc: 'Plataforma institucional con despliegue continuo, optimizada para accesibilidad y servicio público.',
      img: '/assets/priscilla.png',
      url: 'https://super-creponne-d29a1a.netlify.app',
      tags: ['Vue 3', 'Vuetify', 'Netlify']
    }
  ];

  // Datos de Videos Humanitarios
  videos = [
    { title: 'MEDIOS_VIDA_PESQUEROS', id: '58VOpib2BaI', desc: 'Coordinación en terreno para el fortalecimiento de comunidades pesqueras locales.' },
    { title: 'INICIATIVA_APICULTURA', id: 'MM1rrrzJgXk', desc: 'Desarrollo de proyectos productivos apícolas para el sustento de familias rurales.' },
    { title: 'RED_RECONSTRUCCIÓN', id: '4wj9yxXswqQ', desc: 'Gestión de red para reconstrucción habitacional post-terremoto 2010.' }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
  }
}
