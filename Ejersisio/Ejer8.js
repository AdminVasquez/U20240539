const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarPalindromo() {
    rl.question('Ingresa una palabra: ', (palabra) => {
        const palabraNormalizada = palabra.replace(/\s+/g, '').toLowerCase();
        const palabraInvertida = palabraNormalizada.split('').reverse().join('');
        
        if (palabraNormalizada === palabraInvertida) {
            console.log('La palabra es un palíndromo.');
        } else {
            console.log('La palabra no es un palíndromo.');
        }
        rl.close();
    });
}

verificarPalindromo();

