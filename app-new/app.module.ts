import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
// import './shared/rxjs-extensions';
import { routing, routedComponents } from './app.routing';
import { CharacterService } from './characters/character.service'
import { LanguageNoteService } from './language-note/language-note.service';
import { ExceptionService } from './common/exception.service';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryStorageService } from '../api/in-memory-storage.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryStorageService, { delay: 600 }),
  ],
  declarations: [AppComponent, routedComponents],
  providers: [
    CharacterService,
    ExceptionService,
    LanguageNoteService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
