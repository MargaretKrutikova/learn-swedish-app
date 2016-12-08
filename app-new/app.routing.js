"use strict";
var router_1 = require("@angular/router");
var characters_component_1 = require("./characters/characters.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var language_notes_component_1 = require("./language-note/language-notes.component");
var page_not_found_component_1 = require("./page-not-found.component");
var language_note_edit_component_1 = require("./language-note/language-note-edit.component");
exports.routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'characters', component: characters_component_1.CharactersComponent, },
    { path: 'language-notes', component: language_notes_component_1.LanguageNotesComponent, },
    { path: 'new-language-note', component: language_note_edit_component_1.LanguageNoteEditComponent, },
    { path: '**', pathMatch: 'full', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
exports.routedComponents = [
    dashboard_component_1.DashboardComponent,
    characters_component_1.CharactersComponent,
    language_notes_component_1.LanguageNotesComponent,
    language_note_edit_component_1.LanguageNoteEditComponent,
    page_not_found_component_1.PageNotFoundComponent
];
//# sourceMappingURL=app.routing.js.map