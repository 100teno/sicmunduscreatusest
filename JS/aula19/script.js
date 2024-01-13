/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, sybol, bigint - Valores copiados

Referência (mutável) - array, object, function - passados por referência
*/

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);


// a.push('Luiz');
// console.log(a, c);

const a = {
    nome: 'Gabriel',
    sobrenome :'Centeno'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);
