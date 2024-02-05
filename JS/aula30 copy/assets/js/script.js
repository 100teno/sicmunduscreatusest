const h1 = document.querySelector('.container h1');
const data = new Date();


function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda-feira', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
    return diasSemana[diaSemana];
}


function getNomeMes (numeroMes) {
   const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return meses[numeroMes];
}

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()}` +
     ` ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'});
