const boxeadores = [
    { nombre: "Floyd Mayweather", victorias: 50, derrotas: 0, kos: 27 },
    { nombre: "Mike Tyson", victorias: 50, derrotas: 6, kos: 44 },
    { nombre: "Muhammad Ali", victorias: 56, derrotas: 5, kos: 37 },
    { nombre: "Gennadiy Golovkin", victorias: 42, derrotas: 2, kos: 37 }
];

console.log(`=== ESTADÍSTICAS DE BOXEADORES ===`);

let masVictorias = boxeadores[0];
let masKOs = boxeadores[0];

for (let i = 0; i < boxeadores.length; i++) {

    let boxeador = boxeadores[i];

    let peleasTotales = boxeador.victorias + boxeador.derrotas;

    let porcentajeVictorias =
        (boxeador.victorias / peleasTotales) * 100;

    let porcentajeKO =
        (boxeador.kos / peleasTotales) * 100;

    console.log(`
${boxeador.nombre}
  Peleas: ${peleasTotales} (${boxeador.victorias}V - ${boxeador.derrotas}D)
  % de victorias: ${porcentajeVictorias.toFixed(1)}%
  % de KO: ${porcentajeKO.toFixed(1)}%
    `);

    if (boxeador.victorias > masVictorias.victorias) {
        masVictorias = boxeador;
    }

    if (boxeador.kos > masKOs.kos) {
        masKOs = boxeador;
    }
}

console.log(`El boxeador con más victorias es: ${masVictorias.nombre}`);
console.log(`El boxeador con más KOs es: ${masKOs.nombre}`);