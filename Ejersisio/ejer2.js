let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje:', (mensaje)=>{
    const numcaracteres=mensaje.length
    console.log('El numero de Caracteres del mensaje es:', (numcaracteres))
    process.exit()
})