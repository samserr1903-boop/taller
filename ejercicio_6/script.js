const estudiantes = [
    { nombre: "Santiago", nota: 4.8 },
    { nombre: "Valentina", nota: 2.5 },
    { nombre: "Mateo", nota: 3.7 },
    { nombre: "Daniela", nota: 2.9 }
];

for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota >= 3.0) {
        console.log(`${estudiantes[i].nombre} - ${estudiantes[i].nota}`);
    }
}


