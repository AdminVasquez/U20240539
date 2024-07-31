const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales() {
    rl.question('Ingresa una palabra: ', (palabra) => {
        const vocales = palabra.toLowerCase().match(/[aeiou]/g);
        const numVocales = vocales ? vocales.length : 0;
        console.log('Número de vocales:', numVocales);
        rl.close();
    });
}

contarVocales();
