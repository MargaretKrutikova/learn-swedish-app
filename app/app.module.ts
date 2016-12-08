import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStorageService } from '../api/in-memory-storage.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './heroes/hero.service';
import { LanguageNoteService } from './language-note/language-note.service';
import { ExceptionService } from './common/exception.service';

import { HeroSearchComponent } from './heroes/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStorageService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents
  ],
  providers: [
    HeroService,
    ExceptionService,
    LanguageNoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
