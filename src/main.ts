import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Ruta corregida
import { App } from './app/app'; // Ruta corregida

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
