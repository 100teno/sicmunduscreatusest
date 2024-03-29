function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    //console.log(data);
    const dia = zeroEsquerda (data.getDate());
    const mes = zeroEsquerda (data.getMonth() + 1);
    const ano = zeroEsquerda (data.getFullYear());
    const hora = zeroEsquerda (data.getHours());
    const min = zeroEsquerda (data.getMinutes());
    const seg = zeroEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);



// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix 
// const data = new Date('2024-01-02 20:20:20');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 Domingo - 6 = Sábado
// console.log(data.toString());
// console.log(Date.now());