//Crear un objeto Date con la hora y la fecha actual
const fecha_actual= new Date();

//Obtener los milisegundos actuales
const milisegundos = fecha_actual.getUTCMilliseconds();

console.log("Milisegundos actuales:", milisegundos)