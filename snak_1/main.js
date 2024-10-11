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

// accedere agli elementi dell'array
for (let i  = 0; i < bikes.length; i++) {
    const singleBike = bikes[i]; // bici singola

    const bikeWeight = singleBike.weight;
    console.log(bikeWeight);


    
}

// accedere alla proprietà weight dell'oggetto
