function getDayWeekText (dayWeek) {
    let dayWeekTexto;

    switch (dayWeek) {
        case 0:
            dayWeekTexto = 'Domingo';
            return dayWeekTexto;
        case 1:
            dayWeekTexto = 'segunda-feira';
            return dayWeekTexto;
        case 2:
            dayWeekTexto = 'terça-feira';
            return dayWeekTexto;
        case 3:
            dayWeekTexto = 'quarta-feira';
            return dayWeekTexto;
        case 4:
            dayWeekTexto = 'quinta-feira';
            return dayWeekTexto;
        case 5:
            dayWeekTexto = 'sexta-feira';
            return dayWeekTexto;
        case 6:
            dayWeekTexto = 'sabado';
            return dayWeekTexto;
    }
}

function getMonthText (month) {
    let monthText;

    switch (month) {
        case 0:
            monthText = 'janeiro';
            return monthText;
    }
    switch (month) {
        case 1:
            monthText = 'fevereiro';
            return monthText;
    }
    switch (month) {
        case 2:
            monthText = 'março';
            return monthText;
    }
    switch (month) {
        case 3:
            monthText = 'abril';
            return monthText;
    }
    switch (month) {
        case 4:
            monthText = 'maio';
            return monthText;
    }
    switch (month) {
        case 5:
            monthText = 'junho';
            return monthText;
    }
    switch (month) {
        case 6:
            monthText = 'julho';
            return monthText;
    }
    switch (month) {
        case 7:
            monthText = 'agosto';
            return monthText;
    }
    switch (month) {
        case 8:
            monthText = 'setembro';
            return monthText;
    }
    switch (month) {
        case 9:
            monthText = 'outubro';
            return monthText;
    }
    switch (month) {
        case 10:
            monthText = 'novembro';
            return monthText;
    }
    switch (month) {
        case 11:
            monthText = 'dezembro';
            return monthText;
    }
}

const data = new Date();
let dayWeek = data.getDay();
let day = data.getDate();
let month = data.getMonth();
let year = data.getFullYear();
let hour = data.getHours();
let min = data.getMinutes();


const dayWeekTexto = getDayWeekText(dayWeek);
const monthText = getMonthText(month);

const changeText = document.querySelector('.container h1');
changeText.inner = `${dayWeekTexto}, ${day} de ${monthText} de ${year} ${hour}:${min}`;


// document.getElementById('texto').textContent = texto.innerHTML = `${dayWeekTexto}, ${day} de ${monthText} de ${year} ${hour}:${min}`;

// document.h1.innerHTML = `${dayWeekTexto}, ${day} de ${monthText} de ${year} ${hour}:${min}`;

// document.getElementById(texto).textContent = `${dayWeekTexto}, ${day} de ${monthText} de ${year} ${hour}:${min}`;

// texto.innerHTML = `${dayWeekTexto}, ${day} de ${monthText} de ${year} ${hour}:${min}` 

