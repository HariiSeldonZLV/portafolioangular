import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// NO ejecutes la función, solo expórtala de forma ultra simple
export default () => bootstrapApplication(App, appConfig);
