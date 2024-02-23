// Filter, map, reduce

// Retorne o números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais 
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
{ nome: 'Gabriel', idade: 20 },
{ nome: 'Henrique', idade: 13 },
{ nome: 'Maiara', idade: 19 },
{ nome: 'Jonatan', idade: 42 },
{ nome: 'Olidriana', idade: 40 },
{ nome: 'Mel', idade: 2 },
];

const pessoasNomeGrande = pessoas.filter(obj =>obj.nome.length >= 5);
const pessoasVelhas = pessoas.filter(obj => obj.idade >= 30);
const pessoasLetra = pessoas.filter(obj => obj.nome.endsWith('a'));

console.log(pessoasLetra);