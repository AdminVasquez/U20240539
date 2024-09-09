let numero = 5;

const verificarNumero = new Promise((resolve, reject) => {
    if (numero === 5) {
        resolve("El número es 5");
    } else {
        reject("El número no es 5");
    }
});

// Uso de la promesa
verificarNumero
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));
