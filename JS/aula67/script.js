//Some todos os numeros
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
// console.log(total);











const pessoas = [
    { nome: 'Gabriel', idade: 20 },
    { nome: 'Henrique', idade: 13 },
    { nome: 'Maiara', idade: 19 },
    { nome: 'Jonatan', idade: 42 },
    { nome: 'Olidriana', idade: 40 },
    { nome: 'Mel', idade: 2 },
    ];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);


