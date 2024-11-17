const fs = require('fs');

const contarEstudiantes = () => {
    if (!fs.existsSync('estudiantes.json')) {
        console.log("El archivo no existe. Primero crea el archivo.");
        return;
    }

    const data = fs.readFileSync('estudiantes.json', 'utf-8');
    const estudiantes = JSON.parse(data);

    console.log(`Número total de estudiantes: ${estudiantes.length}`);
};

contarEstudiantes();
