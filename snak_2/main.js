/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


// creo un array con delle squadre di calcio con proprietà
const teams = [
    {
        name: "LA Lakers",
        score: 0,
        fouls: 0,
    },
    {
        name: "GT Warriors",
        score: 0,
        fouls: 0,
    },
    {
        name: "Miami Heat",
        score: 0,
        fouls: 0,
    },
];


// ciclo nell"array per avere i songoli oggetti (elementi)
let singleTeam;
let newArr = [];

for (let i = 0; i < teams.length; i++) {
    singleTeam = teams[i]; // ottendo le singole squadre dentro all'array
    
    // assegno alle proprietà score e fail due numeri casuali richiamdo la funzione
    singleTeam.score = getRndInteger(1, 50); 
    singleTeam.fouls = getRndInteger(1, 10);
    
    // pusho il nuovo oggetto nell'array vuoto
    newArr.push(
        {
            name: singleTeam.name, 
            fail: singleTeam.fouls
        }
    );
}

console.log(newArr);

// funzione per generare due numeri casuali 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};