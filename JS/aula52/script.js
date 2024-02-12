const nome = 'Gabriel';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Centeno';
    falaNome();
}
usaFalaNome();