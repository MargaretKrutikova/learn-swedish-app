import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageNote, LanguageNoteService } from '../language-note/language-note.service';

@Component({
	moduleId: module.id,
    selector: 'language-note-edit',
	templateUrl: 'language-note-edit.component.html'
})
export class LanguageNoteEditComponent {
	editLanguageNote : LanguageNote = <LanguageNote>{};

    constructor(
        private languageNoteService: LanguageNoteService,
        private _router: Router) { }

	addNote() {
        console.log(this.editLanguageNote);
		if (this.editLanguageNote.id == null) {
            this.languageNoteService.addLanguageNote(this.editLanguageNote)
                .subscribe(newNote => this.gotoNotes());
                
            return;
        }

        // save edit: not implemented
	}

      private gotoNotes() {
        let route = ['language-notes'];
        this._router.navigate(route);
    }
}
