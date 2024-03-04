function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Gabriel', 'Centeno');
delete p1.nome;
const p2 = new Pessoa('Maiara', 'Fazan');



console.log(p1);
console.log(p2);

