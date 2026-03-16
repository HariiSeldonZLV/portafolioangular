import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { HistoriaComponent } from './components/historia/historia';
import { ProyectosComponent } from './components/proyectos/proyectos';
import { SkillsComponent } from './components/skills/skills';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { EstudiosComponent } from './components/estudios/estudios';
import { ContactoComponent } from './components/contacto/contacto';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'certificaciones', component: EstudiosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
