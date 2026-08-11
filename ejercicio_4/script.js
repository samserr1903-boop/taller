const numeros = [15, 20, 43, 190, 97];

let numeroMayor = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
}

console.log(`El número mayor es: ${numeroMayor}`);