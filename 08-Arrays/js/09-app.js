const carrito = [
    { nombre: 'Monitor 30 pulgadas', precio: 300 },
    { nombre: 'Celular samsung s20', precio: 1500 },
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Celular vivo', precio: 500 }
    
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre}-${carrito[i].precio}`);
}
//Hace lo mismo que el for
carrito.forEach(function (producto) {
    console.log(`${producto.nombre} - ${producto.precio}`);
})