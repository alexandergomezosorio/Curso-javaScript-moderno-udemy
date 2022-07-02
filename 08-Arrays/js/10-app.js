const carrito = [
    { nombre: 'Monitor 30 pulgadas', precio: 300 },
    { nombre: 'Celular samsung s20', precio: 1500 },
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Celular vivo', precio: 500 }

]

const nuevoArreglo = carrito.forEach(function (producto) {
   return `${producto.nombre} - ${producto.precio}`;
})
const nuevoArreglo2 = carrito.map(function (producto) {
    return `${producto.nombre} - ${producto.precio}`
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);