let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('¿Cual es tu nombre?',(nombre)=> {
    rl.question('¿Cual es tu apellido?',(apellido)=>{
        console.log('Que honduras', (nombre), (apellido))
        process.exit()
    }
)})