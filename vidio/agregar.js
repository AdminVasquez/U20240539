const fs = require('fs');

const agregarEstudiante = (nuevoEstudiante) => {
    if (!fs.existsSync('estudiantes.json')) {
        console.log("El archivo no existe. Primero crea el archivo.");
        return;
    }

    const data = fs.readFileSync('estudiantes.json', 'utf-8');
    const estudiantes = JSON.parse(data);
    
    estudiantes.push(nuevoEstudiante);

    fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes, null, 2));
    console.log("Estudiante agregado correctamente.");
};

const nuevoEstudiante = { id: 4, nombre: "Ana", edad: 23 };
agregarEstudiante(nuevoEstudiante);
