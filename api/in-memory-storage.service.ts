
export class InMemoryStorageService {

    createDb() {
        let languageNotes = [
            { 
                "id": 1, 
                "note": "att få sparken från jobbet", 
                "translations": ["to get fired"] 
            },
            { 
                "id": 2, 
                "note": "knarka, knarkigt", 
                "translations": ["do drugs"] 
            },
            { 
                "id": 3, 
                "note": "att lagra, lagring", 
                "translations": ["to store, storage"] 
            },
            { 
                "id": 4, 
                "note": "att ta i som ett djur", 
                "explanations": ["(c) Anders, prat om marklyft"] 
            },
            { 
                "id": 5, 
                "note": "mottagning", 
                "translations": ["reception"],
                "explanations": ["mobiltäckning"],
                "usages": [ "dålig mottagning (telefon)" ]
            },
            { 
                "id": 6, 
                "note": "tillägna", 
                "usages": ["jag ska tillägna dagen med att"] 
            },
            { 
                "id": 7, 
                "note": "inspirerad", 
                "usages" : ["jag är inspirerad av någon"] 
            },
            { 
                "id": 8, 
                "note": "jag ska tillägna dagen med att", 
                "translations": ["i will make use of the day by doing"] 
            },
            { 
                "id": 9, 
                "note": "att tillägna något",
                "explanations":  ["ta något tillgodo", "to make use of" ] 
            }
        ];

        let heroes = [
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

        return { languageNotes, heroes };
    }
}