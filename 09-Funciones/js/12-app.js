const carrito = [
    { nombre: 'Monitor 30 pulgadas', precio: 300 },
    { nombre: 'Celular samsung s20', precio: 1500 },
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Celular vivo', precio: 500 }

]

//Con arrow functions menos codigo
const nuevoArreglo = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

carrito.forEach( producto => console.log(`${producto.nombre} - ${producto.precio}`));

console.log(nuevoArreglo);

