import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageNotesComponent } from './language-note/language-notes.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LanguageNoteEditComponent } from './language-note/language-note-edit.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharactersComponent, },
  { path: 'language-notes', component: LanguageNotesComponent, },
  { path: 'new-language-note', component: LanguageNoteEditComponent, },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [
  DashboardComponent, 
  CharactersComponent, 
  LanguageNotesComponent,
  LanguageNoteEditComponent,
  PageNotFoundComponent];
