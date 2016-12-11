import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageNote, LanguageNoteService } from './language-note.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LanguageNoteDetailComponent } from './language-note-detail.component';

@Component({
    moduleId: module.id,
    selector: 'language-notes',
    templateUrl: 'language-notes.component.html'
}) 
export class LanguageNotesComponent implements OnInit {
    @ViewChild('noteDetailModal')
    modal: ModalComponent;

    errorMessage: string;
    languageNotes: LanguageNote[];
    selectedNote: LanguageNote;

    constructor(
        private languageNoteService: LanguageNoteService) { }

    ngOnInit() {
       this.getLanguageNotes(); 
    }

    openDetails(note: LanguageNote) {
        this.selectedNote = note;
        this.modal.open();
    }

    getLanguageNotes() {
         this.languageNoteService.getLanguageNotes().subscribe(
            notes => this.languageNotes = notes,
            error => this.errorMessage = error
        );
    }
}