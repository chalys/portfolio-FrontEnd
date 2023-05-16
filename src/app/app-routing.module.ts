import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/edit-educacion.component';
import { NeweducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { authGuardFn } from './guards/auth-fn.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'newexp',
    canActivate: [authGuardFn],
    component: NewExperienciaComponent,
  },
  {
    path: 'editexp/:id',
    canActivate: [authGuardFn],
    component: EditExperienciaComponent,
  },
  {
    path: 'newedu',
    canActivate: [authGuardFn],
    component: NeweducacionComponent,
  },
  {
    path: 'editedu/:id',
    canActivate: [authGuardFn],
    component: EditeducacionComponent,
  },
  {
    path: 'newskill',
    canActivate: [authGuardFn],
    component: NewSkillComponent,
  },
  {
    path: 'editskill/:id',
    canActivate: [authGuardFn],
    component: EditSkillComponent,
  },
  {
    path: 'editacercade/:id',
    canActivate: [authGuardFn],
    component: EditAcercaDeComponent,
  },
  {
    path: 'newproy',
    canActivate: [authGuardFn],
    component: NewProyectoComponent,
  },
  {
    path: 'editproy/:id',
    canActivate: [authGuardFn],
    component: EditProyectoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
