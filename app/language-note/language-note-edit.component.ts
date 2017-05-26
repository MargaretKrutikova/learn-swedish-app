import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ListViewEditComponent } from '../common/list-view-edit/list-view-edit.component';

import { LanguageNote, LanguageNoteService } from '../language-note/language-note.service';

@Component({
	moduleId: module.id,
    selector: 'language-note-edit',
	templateUrl: 'language-note-edit.component.html'
})
export class LanguageNoteEditComponent implements OnInit {
	editNote : LanguageNote = <LanguageNote>{};
    public noteForm: FormGroup; 

    @ViewChild('translations')
    translationsListView: ListViewEditComponent;

    @ViewChild('explanations')
    explanationsListView: ListViewEditComponent;

    @ViewChild('usages')
    usagesListView: ListViewEditComponent;

    constructor(
        private languageNoteService: LanguageNoteService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.noteForm = this.fb.group({
           noteValue: this.fb.control('')
        });

        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.languageNoteService.getNoteById(id)
                    .subscribe(note => {
                        this.editNote = note;
                        this.noteForm.controls['noteValue'].setValue(this.editNote.value);
                    });
            } 
       });
    }

	saveNote() {
        console.log(this.editNote);
        
        this.editNote.value = this.noteForm.controls['noteValue'].value;

        this.editNote.explanations = this.explanationsListView.getCurrentListValues();
        this.editNote.translations = this.translationsListView.getCurrentListValues();
        this.editNote.usages = this.usagesListView.getCurrentListValues();
        
         this.languageNoteService.saveNote(this.editNote)
                .subscribe(newNote => this.gotoNotes());
	}

    private transformValueToFormControl(value: String = '') {
        return new FormControl(value);
    }

    private gotoNotes() {
        let route = ['language-notes'];
        this.router.navigate(route);
    }
}
