
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
                "explanations": ["(c) Anders, träning"] 
            },
            { 
                "id": 5, 
                "note": "synvinkel", 
                "translations": ["point of view"],
                "usages": [ "från/ur min synvinkel" ]
            },
            { 
                "id": 6, 
                "note": "tillägna", 
                "usages": ["jag ska tillägna dagen med att"],
                "explanations": ["i will make use of the day by doing"]  
            },
            { 
                "id": 7, 
                "note": "inspirerad", 
                "usages" : ["jag är inspirerad av någon"] 
            },
            { 
                "id": 8, 
                "note": "att tillägna något",
                "explanations":  ["ta något tillgodo", "to make use of" ] 
            },
            { 
                "id": 9, 
                "note": "att klumpa ihop", 
                "translations" : ["lump together", "смешивать в кучу"] 
            },
            { 
                "id": 10, 
                "note": "ivrig, ivrigt", 
                "translations" : ["eager", "zealous", "усердно"] 
            },
            { 
                "id": 11, 
                "note": "flitig", 
                "translations" : ["diligent", "hard-working"] 
            },
            { 
                "id": 12, 
                "note": "ytlig", 
                "translations" : ["external", "superficial", "поверхностный"] 
            },
             { 
                "id": 13, 
                "note": "petig", 
                "translations" : ["мелочный"],
                "explanations":  ["för noggrann", "pedantisk" ] 
            },
            { 
                "id": 14, 
                "note": "kräsen", 
                "translations" : ["picky"],
                "explanations":  ["om mat t.ex." ] 
            },
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