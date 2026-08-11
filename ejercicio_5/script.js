const productos = [
    { nombre: "Celular", precio: 900000 },
    { nombre: "Audifonos", precio: 150000 },
    { nombre: "Cargador", precio: 80000 }
];

let precioTotal = 0;

for (let i = 0; i < productos.length; i++) {
    precioTotal = precioTotal + productos[i].precio;
}

console.log(`El precio total es: ${precioTotal}`);