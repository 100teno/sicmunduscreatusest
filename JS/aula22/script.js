/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar o valor TRUE.
|| -> OR -> OU -> Se apenas um valor for verdadeiro a expressão irá retornar TRUE, não é necessário que todas sejam verdadeiras.
! -> NOT -> NÃO
*/
//const expressaoAnd = true && true && false && true;
//const expressaoOr = false || false || false || false; 

const usuario = 'Gabriel'; //form que o usuário digitou
const senha = '123456'; // form usuário digitou

//                           True                 False
const logar = usuario === 'Gabriel' && senha === '12345';
console.log(logar);