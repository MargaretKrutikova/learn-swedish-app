import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { LanguageNote, LanguageNoteService } from './language-note.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LanguageNoteDetailComponent } from './language-note-detail.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'language-notes',
    templateUrl: 'language-notes.component.html'
}) 
export class LanguageNotesComponent implements OnInit, OnDestroy {
    @ViewChild('noteDetailModal')
    modal: ModalComponent;

    private subscription: Subscription;

    errorMessage: string;
    languageNotes: LanguageNote[];
    selectedNote: LanguageNote;

    // pagination
    notesPerPage: number = 4;
    pages: number[];
    currentPage: number;

    constructor(
        private languageNoteService: LanguageNoteService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        ) { }

    ngOnInit() {
        // subscribe to router event
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                this.currentPage = param['page'];
                this.getLanguageNotes(this.currentPage); 
            });
    }

    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }

    openDetails(note: LanguageNote) {
        this.selectedNote = note;
        this.modal.open();
    }

    getLanguageNotes(page: number = 1) {
         this.languageNoteService.getLanguageNotes().subscribe(
            notes => {
                let pagesNumber = Math.ceil(notes.length / this.notesPerPage);
                
                let startIndex = this.notesPerPage * (page - 1);
                this.languageNotes = notes.slice(startIndex, startIndex + this.notesPerPage);

                this.pages = Array.from(Array(pagesNumber),(x, i) => i + 1);
                this.currentPage = page;

                this.router.navigate(['language-notes', this.currentPage ]);
            },
            error => this.errorMessage = error
        );
    }
}