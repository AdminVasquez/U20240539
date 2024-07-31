const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function extraerSubcadena() {
    rl.question('Ingresa una cadena: ', (cadena) => {
        rl.question('Ingresa la posición de inicio (índice): ', (inicio) => {
            rl.question('Ingresa la posición de fin (índice): ', (fin) => {
                inicio = parseInt(inicio, 10);
                fin = parseInt(fin, 10);
                const subcadena = cadena.slice(inicio, fin);
                console.log('Subcadena extraída:', subcadena);
                rl.close();
            });
        });
    });
}

extraerSubcadena();
