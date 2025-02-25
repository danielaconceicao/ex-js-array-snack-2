/* const a = 'arancia';
const b = 'banana';
const unir = a.localeCompare(b);
console.log(unir); // -1 (arancia vieni prima) */

const frutti = ['banana', 'arancia', 'Ciliegia'];
frutti.sort()
console.log(frutti);

const fruttiTest = ['banana', 'arancia', 'Ciliegia'];
frutti.sort((a, b) => {
    return a.localeCompare(b)
})
console.log(frutti);