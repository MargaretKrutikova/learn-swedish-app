import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ExceptionService } from '../common/exception.service';

export interface LanguageNote {
    id: number;
    value: string;
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

let languageNotesUrl = "api/languageNotes";;//"http://localhost:8080/api/language-notes";//"api/languageNotes";

@Injectable()
export class LanguageNoteService {
    constructor(private http: Http, private exceptionService: ExceptionService) {

    }

    getLanguageNotes() : Observable<LanguageNote[]> {
        return this.http.get(languageNotesUrl)
            //.map(response => response = response.json())
            .map((response: Response) => <LanguageNote[]>(response.json().data || {}))
            .catch(this.exceptionService.handleError);
    }

    getNoteById(id: Number) : Observable<LanguageNote> {
        var source = Observable.create(observer => {
            this.getLanguageNotes().subscribe(notes => {
                let note = notes.find(n => n.id == id);
                observer.next(note);
                observer.complete();
            });
        });
        return source;
    }

    saveNote(note: LanguageNote) : Observable<LanguageNote> {
        let jsonNote = JSON.stringify(note);
        
        let observable;
        if (note.id == null) {
            observable = this.http.post(`${languageNotesUrl}`, jsonNote);
        } else {
             observable = this.http.put(`${languageNotesUrl}/${note.id}`, jsonNote);
        }
         
        return observable.map((response: Response) => <LanguageNote>(response.json() || {})) // use response.json().data with real api
                .catch(this.exceptionService.handleError);
    }
}
