import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStorageService } from '../api/in-memory-storage.service';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './heroes/hero.service';
import { LanguageNoteService } from './language-note/language-note.service';
import { ExceptionService } from './common/exception.service';
import { PaginatorComponent } from './common/paginator/paginator.component';

import { HeroSearchComponent } from './heroes/hero-search.component';
import { LanguageNoteDetailComponent } from './language-note/language-note-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    Ng2Bs3ModalModule,
    InMemoryWebApiModule.forRoot(InMemoryStorageService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    LanguageNoteDetailComponent,
    PaginatorComponent,
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
