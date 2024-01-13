const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Centeno',
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }

    
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();





// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// const pessoa1 = criaPessoa('Gabriel', 'Centeno', 20);
// const pessoa2 = criaPessoa('Maiara', 'Centeno', 19);
// const pessoa3 = criaPessoa('Henrique', 'Centeno', 13);
// const pessoa4 = criaPessoa('Manuela', 'Centeno', 1);
// const pessoa5 = criaPessoa('João Miguel', 'Centeno', 1);


// console.log(pessoa1.nome, pessoa2.nome);



// const pessoa1 = {
//     nome: 'Gabriel',
//     sobrenome: 'Centeno',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);





// const nome01 = 'Gabriel'
// const sobrenome01 = 'Centeno'
// const idade01 = 25;


// const nome02 = 'Maiara'
// const sobrenome02 = 'Fazan'
// const idade02 = 19;

