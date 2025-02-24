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

/* const etaSomma = users.reduce((acc, curr) => (acc + curr.eta), 0);
const etaMedia = etaSomma / users.length;
console.log(etaMedia); */

const userObject = users.reduce((acc, curr) => {
    const key = curr.name.toLowerCase();
    acc[key] = curr;
    return acc;
}, {});
console.log(userObject);

