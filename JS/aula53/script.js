function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Gabriel');
const funcao2 = retornaFuncao('Centeno');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());