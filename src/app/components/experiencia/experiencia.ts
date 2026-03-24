import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, RouterLink],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  encapsulation: ViewEncapsulation.None
})
export class ExperienciaComponent {

  experiencias = [
    // Trabajo actual
    {
      puesto: "Setter",
      empresa: "Agencia O3",
      fecha: "01/2026 – Presente",
      icon: "person_search",
      detalles: ["Contacto de prospectos","Gestión agenda de ventas"]
    },
    {
      puesto: "Encargado de cámara y logística",
      empresa: "Planta Campofrut",
      fecha: "2025",
      icon: "factory",
      detalles: ["Control de calidad y almacenaje","Gestión de despachos y recepción de fruta"]
    },
    {
      puesto: "Administrador General",
      empresa: "Supermercado Bodega Ahorro Talca",
      fecha: "2025",
      icon: "store",
      detalles: ["Habilitación sistemas online","Reclutamiento y adquisiciones","Puesta en marcha operativa"]
    },
    // TURBUS 2019
    {
      puesto: "Atención al Cliente",
      empresa: "TURBUS",
      fecha: "2019",
      icon: "support_agent",
      detalles: [
        "Gestión de devoluciones, cambios y renegociaciones",
        "Atención al cliente y resolución de conflictos",
        "Procesamiento de solicitudes especiales en SAC"
      ]
    },
    // TUU 2019
    {
      puesto: "Soporte Tecnológico",
      empresa: "TUU",
      fecha: "2019",
      icon: "devices",
      detalles: [
        "Atención al cliente en sistemas de pago electrónico",
        "Soporte técnico para Documentos Tributarios Electrónicos (DTE)",
        "Mesa de ayuda y resolución de incidencias"
      ]
    },
    // Municipalidad de Molina
    {
      puesto: "Tecnología en Seguridad Pública",
      empresa: "I. Municipalidad de Molina",
      fecha: "2020 a 2024",
      icon: "security",
      detalles: [
        "Responsable de proyectos tecnológicos y mantenimiento",
        "Implementación de IA para identificación vehicular delictiva",
        "Creación de sistema de detección de vehículos robados en pórticos"
      ]
    },
    // ELIMINADA: Soporte Fintech Haulmer TUU
    // Administrador Hotelero Brasil
    {
      puesto: "Administrador Hotelero (Brasil)",
      empresa: "Che Lagarto Suites Búzios",
      fecha: "2015 a 2016",
      icon: "hotel",
      detalles: ["Administración general en Rio de Janeiro","Gestión de servicios y operaciones hoteleras"]
    },
    // Cruz Roja
    {
      puesto: "Project Manager Humanitario",
      empresa: "Chilean Red Cross / JRCS",
      fecha: "1996 a 2016",
      icon: "public",
      detalles: [
        "Project Manager Japanese Red Cross (2010-2012) para reconstrucción costera post-tsunami",
        "Responsable Nacional de Logística: Adquisiciones, flota y ayuda humanitaria",
        "Responsable del POA Terremoto Chile 2010 (Operación Internacional)",
        "Coordinación Hospital de Campaña San José de Parral (Donación Japón)",
        "Traductor oficial delegaciones emergencia 27F",
        "Director de Albergues (Estadio Víctor Jara: +500 personas diarias)"
      ]
    },
    // Boston Repuestos
    {
      puesto: "Ecommerce & Branding",
      empresa: "Boston Repuestos",
      fecha: "2016 a 2017",
      icon: "shopping_cart",
      detalles: [
        "Implementación del primer Ecommerce en Barrio 10 de Julio",
        "Sincronización de inventario con ventas online",
        "Branding y modernización de gestión de ventas"
      ]
    }
  ];

  referencias = [
    { nombre: "Naoki Kokawa", contacto: "kokawanaoki@gmail.com" },
    { nombre: "Rafael Méndez Mella", contacto: "presidencia@cruzroja.cl" },
    { nombre: "Tomoko Niino", contacto: "tniino@yahoo.com" },
    { nombre: "Gustavo Ramírez Arriagada", contacto: "gustavo.ramirez@ifrc.org" },
    { nombre: "Fernando Uribe-Etxeverria", contacto: "furibe@uribe-etxeverria.cl" },
    { nombre: "Dante Torres Ibarra", contacto: "dante@o3.cl" }
  ];
}
