// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Gabriel', idade: 20 },
    { nome: 'Henrique', idade: 13 },
    { nome: 'Maiara', idade: 19 },
    { nome: 'Jonatan', idade: 42 },
    { nome: 'Olidriana', idade: 40 },
    { nome: 'Mel', idade: 2 },
    ];
const umaStringNome = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}));

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(idades);