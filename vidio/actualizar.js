const fs = require('fs');

const actualizarEstudiante = (id, nuevaInfo) => {
    if (!fs.existsSync('estudiantes.json')) {
        console.log("El archivo no existe. Primero crea el archivo.");
        return;
    }

    const data = fs.readFileSync('estudiantes.json', 'utf-8');
    let estudiantes = JSON.parse(data);

    estudiantes = estudiantes.map(est =>
        est.id === id ? { ...est, ...nuevaInfo } : est
    );

    fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes, null, 2));
    console.log("Estudiante actualizado correctamente.");
};

actualizarEstudiante(2, { nombre: "María Actualizada", edad: 24 });
