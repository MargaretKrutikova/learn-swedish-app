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
var language_note_service_1 = require("./language-note.service");
var LanguageNotesComponent = (function () {
    function LanguageNotesComponent(languageNoteService) {
        this.languageNoteService = languageNoteService;
    }
    LanguageNotesComponent.prototype.ngOnInit = function () {
        this.getLanguageNotes();
    };
    LanguageNotesComponent.prototype.getLanguageNotes = function () {
        var _this = this;
        this.languageNoteService.getLanguageNotes().subscribe(function (notes) { return _this.languageNotes = notes; }, function (error) { return _this.errorMessage = error; });
    };
    return LanguageNotesComponent;
}());
LanguageNotesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'language-notes',
        templateUrl: 'language-notes.component.html',
        styleUrls: ['language-notes.component.css'],
    }),
    __metadata("design:paramtypes", [language_note_service_1.LanguageNoteService])
], LanguageNotesComponent);
exports.LanguageNotesComponent = LanguageNotesComponent;
//# sourceMappingURL=language-notes.component.js.map