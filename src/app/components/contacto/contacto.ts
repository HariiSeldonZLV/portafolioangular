import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser'; // 1. Importamos la librería

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, RouterLink],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContactoComponent {
  public contactForm: FormGroup;
  public statusMessage: string = '';

  public contactLinks = [
    { label: "WHATSAPP", value: "+56 9 8262 7475", icon: "chat", url: "https://wa.me/56982627475" },
    { label: "EMAIL", value: "dje.salinas.m@gmail.com", icon: "email", url: "mailto:dje.salinas.m@gmail.com" },
    { label: "LINKEDIN", value: "linkedin.com/in/denis-salinas", icon: "link", url: "https://www.linkedin.com/in/denis-salinas-49b6b352/" },
    { label: "UBICACIÓN", value: "Molina, Región del Maule, Chile", icon: "place", url: "https://www.google.com/maps/place/Molina,+Regi%C3%B3n+del+Maule/" }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.statusMessage = '> INICIANDO PROTOCOLO DE TRANSMISIÓN...';

      try {
        // 2. Enviamos el mensaje usando tus credenciales
        await emailjs.send(
         environment.emailjsServiceId,   // Reemplaza con tu Service ID
          environment.emailjsTemplateId,  // Reemplaza con tu Template ID
          this.contactForm.value,
          environment.emailjsPublicKey    // Reemplaza con tu Public Key
        );

        this.statusMessage = '> TRANSMISIÓN COMPLETADA. MENSAJE EN EL NÚCLEO.';
        this.contactForm.reset();

      } catch (error) {
        this.statusMessage = '> ERROR CRÍTICO: FALLO EN EL ENLACE DE DATOS.';
        console.error('FAILED...', error);
      }
    }
  }
}
