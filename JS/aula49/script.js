// Declaracao de funcao (Function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
    console.log('sou uma arrow function');
};
arrowFunction();

// Dentro de um objeto 
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();
