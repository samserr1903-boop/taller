const producto = [
    {
        nombre: "tablet",
        marca: "lenovo",
        precio: 234,
        stock: 34,
        modelo: "2020"
    },

    {
        nombre: "tv",
        marca: "samsung",
        precio: 355,
        stock: 65,
        modelo: "2026"
    },

    {
        nombre: "consola",
        marca: "xbox",
        precio: 234,
        stock: 5,
        modelo: "1999"
    },

    {
        nombre: "laptop",
        marca: "hp",
        precio: 432,
        stock: 34,
        modelo: "2024"
    },

    {
        nombre: "teclado",
        marca: "logitech",
        precio: 245,
        stock: 2,
        modelo: "2023"
    },

    {
        nombre: "mouse",
        marca: "razer",
        precio: 546,
        stock: 25,
        modelo: "2026"
    }
]
let total = 0;
let mayor = 0;
let productomayor = "";

for (let i = 0; i < producto.length; i++) {

    let inversion = producto[i].precio * producto[i].stock;

    total += inversion;

    if (inversion > mayor) {
        mayor = inversion;
        productomayor = producto[i].nombre;
    }
}

console.log(`Se invirtieron $${total} en todos los productos`);
console.log(`Se invirtió más en: ${productomayor}`);
console.log(`La inversión fue de $${mayor}`);
let menor = producto[0].precio;
let productoeconomico = producto[0].nombre;

for (let i = 1; i < producto.length; i++) {

    if (producto[i].precio < menor) {
        menor = producto[i].precio;
        productoeconomico = producto[i].nombre;
    }
}

console.log(`El producto más económico es: ${productoeconomico}`);
console.log(`Su precio es de $${menor}`);

let caro = producto[0].precio;
let productomascaro = producto[0].nombre;

for (let i = 1; i < producto.length; i++) {

    if (producto[i].precio > caro) {
        caro = producto[i].precio;
        productomascaro = producto[i].nombre;
    }
 
}

console.log(`El producto más caro es: ${productomascaro}`);
console.log(`Su precio es de $${caro}`);