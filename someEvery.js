const users = [
    {
        id: 1,
        name: 'Mario',
        sesso: 'm',
        eta: 25,
    },

    {
        id: 2,
        name: 'Daniela',
        sesso: 'f',
        eta: 35,
    },

    {
        id: 3,
        name: 'Barbara',
        sesso: 'f',
        eta: 48,
    },

    {
        id: 4,
        name: 'Luigi',
        sesso: 'm',
        eta: 26,
    }

];

const utentMaggiore30Anni = users.some(u => u.eta > 30);
console.log(utentMaggiore30Anni);

const tuttiMaggioreDi30 = users.every(u => u.eta > 30);
console.log(tuttiMaggioreDi30);