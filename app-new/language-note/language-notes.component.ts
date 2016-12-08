import { Component, OnInit } from '@angular/core';
import { LanguageNote, LanguageNoteService } from './language-note.service';

@Component({
    moduleId: module.id,
    selector: 'language-notes',
    templateUrl: 'language-notes.component.html',
    styleUrls: ['language-notes.component.css'],
}) 
export class LanguageNotesComponent implements OnInit {
    errorMessage: string;
    languageNotes: LanguageNote[];

    constructor(
        private languageNoteService: LanguageNoteService) { }

    ngOnInit() {
       this.getLanguageNotes();
    }

    getLanguageNotes() {
         this.languageNoteService.getLanguageNotes().subscribe(
            notes => this.languageNotes = notes,
            error => this.errorMessage = error
        );
    }
}