const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarPalabras() {
    rl.question('Ingresa una frase: ', (frase) => {
        const palabras = frase.trim().split(/\s+/);
        const numPalabras = palabras.length;
        console.log('Número de palabras:', numPalabras);
        rl.close();
    });
}
contarPalabras();
