const fs = require('fs');

const leerArchivo = () => {
    if (!fs.existsSync('estudiantes.json')) {
        console.log("El archivo no existe. Primero crea el archivo.");
        return;
    }
    
    const data = fs.readFileSync('estudiantes.json', 'utf-8');
    console.log("Contenido del archivo:");
    console.log(JSON.parse(data));
};

leerArchivo();
