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

for (let i = 0; i < producto.length; i++) {
    total += producto[i].precio * producto[i].stock;
}

console.log(`Se invirtieron $${total} en todos los productos`);
