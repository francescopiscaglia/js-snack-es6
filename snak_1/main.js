/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


const bikes = [
    {
        name: "BMX",
        weight: 10,
    },
    {
        name: "Road-bike",
        weight: 5,
    },
    {
        name: "Offroad-bike",
        weight: 8,
    },
    {
        name: "Mountainbike",
        weight: 14,
    },
];

let arr = [];
let lowestWeightBike;

// seleziono gli elementi dalla DOM
const bikeSpecsEL = document.querySelector(".list-group");
const lowestWeightEL = document.getElementById("lowest");

// accedere agli elementi dell'array
for (let i  = 0; i < bikes.length; i++) {
    const singleBike = bikes[i]; // bici singola
    
    const bikeWeight = singleBike.weight; // salvo le proprietà weight di ogni bici 
    arr.push(bikeWeight); // pusho il valore di weight nell'array vuoto

    // costruisco il markup da aggiungere
    const markup = `
        <li class="list-group-item">
            ${singleBike.name}: ${singleBike.weight} kg
        </li>
    `;

    // inserisco il markup
    bikeSpecsEL.insertAdjacentHTML("beforeend", markup);
};

// ottengo il valore più piccolo dell'array
lowestWeightBike = Math.min(...arr);

// stampo il risultato
lowestWeightEL.innerHTML = `La più leggera è di ${lowestWeightBike} kg`;



