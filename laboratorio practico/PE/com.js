function comprarEnLinea(monto) {
    return new Promise((resolve, reject) => {
        if (monto > 0) {
            resolve(`Compra completa por ${monto}`);
        } else {
            reject("Monto inválido para la compra");
        }
    });
}

// Ejemplo de uso:
comprarEnLinea(100)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));
