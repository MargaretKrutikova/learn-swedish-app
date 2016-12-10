"use strict";
var InMemoryStorageService = (function () {
    function InMemoryStorageService() {
    }
    InMemoryStorageService.prototype.createDb = function () {
        var languageNotes = [
            {
                "id": 1,
                "note": "tillägna",
                "usages": ["jag ska tillägna dagen med att"]
            },
            {
                "id": 2,
                "note": "inspirerad",
                "usages": ["jag är inspirerad av någon"]
            },
            {
                "id": 3,
                "note": "jag ska tillägna dagen med att",
                "translations": ["i will make use of the day by doing"]
            },
            {
                "id": 4,
                "note": "att tillägna något",
                "explanations": ["ta något tillgodo", "to make use of"]
            }
        ];
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { languageNotes: languageNotes, heroes: heroes };
    };
    return InMemoryStorageService;
}());
exports.InMemoryStorageService = InMemoryStorageService;
//# sourceMappingURL=in-memory-storage.service.js.map