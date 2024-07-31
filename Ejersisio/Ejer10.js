const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizarPrimerasLetras() {
    rl.question('Ingresa una frase: ', (frase) => {
        const fraseCapitalizada = frase.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
        console.log('Frase capitalizada:', fraseCapitalizada);
        rl.close();
    });
}

capitalizarPrimerasLetras();
