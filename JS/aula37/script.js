const nomes = ['Gabriel', 'Maiara', 'Henrique'];



// For classico - Geralmento com iteraveis (array ou strings)'
// For in - retorna o indice ou chave (string, arrays ou objetos)
// For of - retorna o valor em si (iteraveis, arrays ou strings)




for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}
console.log('#####');

for (let i in nomes) {
    console.log(nomes[i]);
    
    }

console.log('#####');

for (let valor of nomes) {
    console.log(valor);
}

console.log('#####');

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});