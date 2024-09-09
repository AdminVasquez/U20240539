function verificarCodigoDescuento(codigo) {
    return new Promise((resolve, reject) => {
        if (codigo === "DESCUENTO2024") {
            resolve("Código de descuento válido");
        } else {
            reject("Código de descuento inválido");
        }
    });
}

// Ejemplo de uso:
verificarCodigoDescuento("DESCUENTO2024")
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));
