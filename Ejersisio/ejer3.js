let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje:', (mensaje)=>{
    const cadena=mensaje.toUpperCase()
    console.log('La cadena de caracteres en mayusculas es:', (cadena)),
    process.exit()
    
})