// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto nao existe.')
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser numeros.');
    }

    return x + y;
}


try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(err) {
    console.log('Alguma coisa mais amigavel');
}