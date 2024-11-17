const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log(`
Seleccione una opción:
1. Crear archivo JSON con estudiantes
2. Leer archivo JSON de estudiantes
3. Agregar nuevo estudiante
4. Actualizar información de estudiantes
5. Eliminar un estudiante
6. Contar estudiantes
7. Salir
    `);

    rl.question("Ingrese una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                exec('node crear.js', (error, stdout) => {
                    if (error) console.error(error);
                    else console.log(stdout);
                    mostrarMenu();
                });
                break;
            case '2':
                exec('node leer.js', (error, stdout) => {
                    if (error) console.error(error);
                    else console.log(stdout);
                    mostrarMenu();
                });
                break;
            case '3':
                exec('node agregar.js', (error, stdout) => {
                    if (error) console.error(error);
                    else console.log(stdout);
                    mostrarMenu();
                });
                break;
            case '4':
                exec('node actualizar.js', (error, stdout) => {
                    if (error) console.error(error);
                    else console.log(stdout);
                    mostrarMenu();
                });
                break;
            case '5':
                exec('node eliminar.js', (error, stdout) => {
                    if (error) console.error(error);
                    else console.log(stdout);
                    mostrarMenu();
                });
                break;
            case '6':
                exec('node contar.js', (error, stdout) => {
                    if (error) console.error(error);
                    else console.log(stdout);
                    mostrarMenu();
                });
                break;
            case '7':
                console.log("Saliendo...");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                mostrarMenu();
                break;
        }
    });
};

mostrarMenu();
