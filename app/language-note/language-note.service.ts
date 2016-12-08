import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ExceptionService } from '../common/exception.service';

export interface LanguageNote {
    id: number;
    note: string;
    type?: string;
    translations?: string[];
    explanations?: string[];
    usages?: string[];
}

// Substantiv
// Pronomen (Jag, oss, hennes, er, som, denna, vem och någon)
// Adjektiv 
// Verb
// Adverb
// Preposition (I, på, till, framför, utan, efter, över och bakom)
// Konjunktion (Och, men, för, om, eller, att)
// Interjektion (Usch, oj, aj, nej och hurra)
// Uttryck
// Ordspråk

let languageNotesUrl = "api/languageNotes";

@Injectable()
export class LanguageNoteService {
    constructor(private http: Http, private exceptionService: ExceptionService) {

    }

    getLanguageNotes() : Observable<LanguageNote[]> {
        return this.http.get(languageNotesUrl)
            .map((response: Response) => <LanguageNote[]>(response.json().data || {}))
            .catch(this.exceptionService.handleError);
    }

    addLanguageNote(note: LanguageNote) : Observable<LanguageNote> {
        let jsonNote = JSON.stringify(note);
        
        return this.http.post(`${languageNotesUrl}`, jsonNote)
                .map((response: Response) => <LanguageNote>(response.json().data || {}))
                .catch(this.exceptionService.handleError);
    }
}
