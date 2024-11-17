const fs = require('fs');

const eliminarEstudiante = (id) => {
    if (!fs.existsSync('estudiantes.json')) {
        console.log("El archivo no existe. Primero crea el archivo.");
        return;
    }

    const data = fs.readFileSync('estudiantes.json', 'utf-8');
    const estudiantes = JSON.parse(data);

    const estudiantesFiltrados = estudiantes.filter(est => est.id !== id);

    fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantesFiltrados, null, 2));
    console.log("Estudiante eliminado correctamente.");
};

eliminarEstudiante(1);
