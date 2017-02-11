import { Component, OnInit, OnDestroy, ViewChild, EventEmitter, Inject } from '@angular/core';
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

    private languageNotes: LanguageNote[];

    isMobileDevice: boolean = false;
    errorMessage: string;
    selectedNote: LanguageNote;

    // pagination
    notesPerPage: number = 4;
    currentPage: number = 1;
    languageNotesPaginated: LanguageNote[];
    
    totalNotesChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private languageNoteService: LanguageNoteService,
        private router: Router,
        @Inject('Window') window: any
        ) { }

    ngOnInit() {
        this.getLanguageNotes(); 
        this.isMobileDevice = this.isMobile();
    }

    ngOnDestroy() {
    }

    openDetails(note: LanguageNote) {
        this.selectedNote = note;
        this.modal.open();
    }

    openDetailsIfMobile(note: LanguageNote) {
        if (this.isMobileDevice) {
            this.openDetails(note);
        }
    }

    getLanguageNotesPaginated(page: number = 1) {
        let pagesNumber = Math.ceil(this.languageNotes.length / this.notesPerPage);
        
        let startIndex = this.notesPerPage * (page - 1);
        this.languageNotesPaginated = this.languageNotes.slice(startIndex, startIndex + this.notesPerPage);
        this.currentPage = page;

        this.router.navigate(['language-notes', this.currentPage ]);
    }

    private isMobile() : boolean {
        if(window.innerWidth <= 800 && window.innerHeight <= 600) {
            return true;
        } else {
            return false;
        }
    }

    private getLanguageNotes() {
         this.languageNoteService.getLanguageNotes().subscribe(
            notes => {
                this.languageNotes = notes;
                this.totalNotesChange.emit(notes.length);
            },
            error => this.errorMessage = error
        );
    }
}