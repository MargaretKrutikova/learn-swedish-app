import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStorageService } from '../api/in-memory-storage.service';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ValueProvider } from '@angular/core';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './heroes/hero.service';
import { LanguageNoteService } from './language-note/language-note.service';
import { ExceptionService } from './common/exception.service';
import { PaginatorComponent } from './common/paginator/paginator.component';
import { IconComponent } from './common/icon.component';

import { HeroSearchComponent } from './heroes/hero-search.component';
import { LanguageNoteDetailComponent } from './language-note/language-note-detail.component';
import { ListViewEditComponent } from './common/list-view-edit/list-view-edit.component';

const WINDOW_PROVIDER: ValueProvider = {
    provide: 'Window',
    useValue: window
};

const NAVIGATOR_PROVIDER: ValueProvider = {
    provide: 'Navigator',
    useValue: navigator
};


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    Ng2Bs3ModalModule,
    InMemoryWebApiModule.forRoot(InMemoryStorageService)
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    LanguageNoteDetailComponent,
    ListViewEditComponent,
    PaginatorComponent,
    IconComponent,
    routedComponents
  ],
  providers: [
    HeroService,
    ExceptionService,
    LanguageNoteService,
    WINDOW_PROVIDER,
    NAVIGATOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
