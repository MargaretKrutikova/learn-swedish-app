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
var router_1 = require("@angular/router");
var language_note_service_1 = require("../language-note/language-note.service");
var LanguageNoteEditComponent = (function () {
    function LanguageNoteEditComponent(languageNoteService, _router) {
        this.languageNoteService = languageNoteService;
        this._router = _router;
        this.editLanguageNote = {};
    }
    LanguageNoteEditComponent.prototype.addNote = function () {
        var _this = this;
        console.log(this.editLanguageNote);
        if (this.editLanguageNote.id == null) {
            this.languageNoteService.addLanguageNote(this.editLanguageNote)
                .subscribe(function (newNote) { return _this.gotoNotes(); });
            return;
        }
        // save edit: not implemented
    };
    LanguageNoteEditComponent.prototype.gotoNotes = function () {
        var route = ['language-notes'];
        this._router.navigate(route);
    };
    return LanguageNoteEditComponent;
}());
LanguageNoteEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'language-note-edit',
        templateUrl: 'language-note-edit.component.html'
    }),
    __metadata("design:paramtypes", [language_note_service_1.LanguageNoteService,
        router_1.Router])
], LanguageNoteEditComponent);
exports.LanguageNoteEditComponent = LanguageNoteEditComponent;
//# sourceMappingURL=language-note-edit.component.js.map