// Factory function (Funcao fábrica)'
// Constructor function (Funcao construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join('');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Centeno', 1.70, 80);
p1.nomeCompleto = 'Maiara Fazan';
console.log(p1.nome);
console.log(p1.sobrenome);
