const fs = require('fs');

const crearArchivo = () => {
    const estudiantes = [
        { id: 1, nombre: "Juan", edad: 20 },
        { id: 2, nombre: "María", edad: 22 },
        { id: 3, nombre: "Carlos", edad: 21 }
    ];
    
    fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes, null, 2));
    console.log("Archivo JSON creado con datos iniciales.");
};

crearArchivo();
