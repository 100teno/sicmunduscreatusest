const nome = 'Gabriel';
const sobrenome = 'Centeno';
const idade = 20;
const peso = 80;
const alturaEmM = 1.68; 
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade



console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`), 
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`)
console.log(`${nome} ${sobrenome} nasceu em  ${anoNascimento}.`)

