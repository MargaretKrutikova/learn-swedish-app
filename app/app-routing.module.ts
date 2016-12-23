import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LanguageNotesComponent } from './language-note/language-notes.component';
import { LanguageNoteEditComponent } from './language-note/language-note-edit.component';

import { HeroDetailComponent } from './heroes/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'new-note',
    component: LanguageNoteEditComponent
  },
  {
    path: 'edit-note/:id',
    component: LanguageNoteEditComponent
  },
  {
    path: 'language-notes/:page',
    component: LanguageNotesComponent
  },
   {
    path: 'language-notes',
    component: LanguageNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  DashboardComponent, 
  HeroesComponent, 
  HeroDetailComponent, 
  LanguageNotesComponent,
  LanguageNoteEditComponent];
