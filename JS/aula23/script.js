/*
&& -> false && true -> false "o valor mesmo"
|| -> false || true -> true vai retornar "o valor verdadeiro" 


FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

/*function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Gabriel';

console.log(vaiExecutar && falaOi());*/

/*const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corUsuario);*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);