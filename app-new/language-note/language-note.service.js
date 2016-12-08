"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var exception_service_1 = require("../common/exception.service");
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
var languageNotesUrl = "api/languageNotes";
var LanguageNoteService = (function () {
    function LanguageNoteService(http, exceptionService) {
        this.http = http;
        this.exceptionService = exceptionService;
    }
    LanguageNoteService.prototype.getLanguageNotes = function () {
        return this.http.get(languageNotesUrl)
            .map(function (response) { return (response.json().data || {}); })
            .catch(this.exceptionService.handleError);
    };
    LanguageNoteService.prototype.addLanguageNote = function (note) {
        var jsonNote = JSON.stringify(note);
        return this.http.post("" + languageNotesUrl, jsonNote)
            .map(function (response) { return (response.json().data || {}); })
            .catch(this.exceptionService.handleError);
    };
    return LanguageNoteService;
}());
LanguageNoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, exception_service_1.ExceptionService])
], LanguageNoteService);
exports.LanguageNoteService = LanguageNoteService;
//# sourceMappingURL=language-note.service.js.map