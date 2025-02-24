const nomes = ['Carlos', 'Anna', 'Bruno', 'Daniel'];
nomes.sort()
console.log(nomes) 

const numeros = [10, 5, 40, 25, 1];
numeros.sort((a, b) => a - b);
/* console.log(numeros) */ 

const cidades = [
    {nome: 'Rio de Janeiro', temperatura: 30},
    {nome: 'São Paulo', temperatura: 22},
    {nome: 'Curitiba', temperatura: 15}
];

const cidadesMaisFria = cidades.sort((a, b) => a.temperatura - b.temperatura);
/* console.log(cidadesMaisFria) */
/* console.log(cidades) */