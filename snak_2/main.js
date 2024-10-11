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
        fail: 0,
    },
    {
        name: "GT Warrios",
        score: 0,
        fail: 0,
    },
    {
        name: "Miami Heat",
        score: 0,
        fail: 0,
    },
];

// funzione per generare due numeri casuali 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// ciclo nell"array per avere i songoli oggetti (elementi)
let singleTeam;

for (let i = 0; i < teams.length; i++) {
    singleTeam = teams[i]; // ottendo le singole squadre dentro all'array

    // ciclo all'interno degli oggetti per poter recuperare e modificare la proprietà 
    for (const key in singleTeam) {
        const value = singleTeam[key];
        console.log(key, value);
        
    }
}
