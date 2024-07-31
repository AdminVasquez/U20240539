const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function reemplazarPalabra() {
    rl.question('Ingresa una frase: ', (frase) => {
        rl.question('Ingresa la palabra que deseas reemplazar: ', (palabraAReemplazar) => {
            rl.question('Ingresa la nueva palabra: ', (nuevaPalabra) => {
                let fraseReemplazada = frase.replace(new RegExp(palabraAReemplazar, 'g'), nuevaPalabra);
                console.log(`Frase original: ${frase}`);
                console.log(`Frase modificada: ${fraseReemplazada}`);
                rl.close();
            });
        });
    });
}


reemplazarPalabra();
