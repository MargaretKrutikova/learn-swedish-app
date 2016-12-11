import { Component, OnInit, Input } from "@angular/core";
import { LanguageNote } from "./language-note.service";
@Component({
    moduleId: module.id,
    selector: "language-note-detail",
    templateUrl: 'language-note-detail.component.html'
})
export class LanguageNoteDetailComponent implements OnInit {
    @Input() note: LanguageNote;
    @Input() hideTitle: boolean;
    
    constructor() {
        this.hideTitle = false;
     }

    ngOnInit() { }
}