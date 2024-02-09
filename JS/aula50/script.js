// arguments que sustenta todos os argumento enviados
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9,);

// const conta = function conta(operador, acumulador, ...numeros) {
//     console.log(arguments);

//     // for (let numero of numeros) {
//     //     if (operador === '+') acumulador += numero;
//     //     if (operador === '-') acumulador -= numero;
//     //     if (operador === '/') acumulador /= numero;
//     //     if (operador === '*') acumulador *= numero;
//     // }

//     console.log(acumulador);
// };

const conta = (...args) => {
    console.log(args);
};
conta('+', 0, 20, 30, 40, 50);