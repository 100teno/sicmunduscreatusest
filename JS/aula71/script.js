// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // seta o valor
        writable: true, // permite ou nao alterar valor
        configurable: true, // pode ou nao apagar, editar, reconfigurar a chave
    });

    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true,
    //         value: nome,
    //         writable: true,
    //         configurable: true
    //     },
    //     preco: {
    //         enumerable: true,
    //         value: preco,
    //         writable: true,
    //         configurable: true
    //     },
    // });
}

const p1 = new Produto('Mouse Gamer', 120, 10);
console.log(p1);