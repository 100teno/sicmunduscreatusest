const nome = 'Gabriel'; // string
const nome1 = "Gabriel"; // string
const nome2 = `Gabriel`; // string
const num1 = 10; //number
const num2 = 10.5; //number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = true; // Booleano = true, false (lógico)

let a = 2;
let b = a;

console.log(a, b); // 2, 2

a = 3;
console.log(a, b) // 3, 2 