const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Centeno',
    idade: 20,
    endereco: {
        rua: 'Rua Marlene',
        numero: 1234
    }
};
// Atribuicao via desestruturacao
const { nome, ...resto } = pessoa;

console.log(nome, resto);