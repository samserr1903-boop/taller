const ejercicios = [
    { nombre: "Sentadilla", peso: 100 },
    { nombre: "Press militar", peso: 55 },
    { nombre: "Peso muerto", peso: 140 },
    { nombre: "Remo con barra", peso: 75 }
];

let maximoPeso = 0;
let ejercicioMasPesado = "";

for (let i = 0; i < ejercicios.length; i++) {
    if (ejercicios[i].peso > maximoPeso) {
        maximoPeso = ejercicios[i].peso;
        ejercicioMasPesado = ejercicios[i].nombre;
    }
}

console.log(`El ejercicio más pesado es ${ejercicioMasPesado} con ${maximoPeso} kg`);







