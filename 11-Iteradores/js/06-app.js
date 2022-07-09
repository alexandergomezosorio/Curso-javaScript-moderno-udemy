//Foreach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']

pendientes.forEach((pendiente,indice) => {
    console.log(`${indice}:${pendiente}`);
});

const carrito = [
    { nombre: 'Monitor 30 pulgadas', precio: 300 },
    { nombre: 'Celular samsung s20', precio: 1500 },
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Celular vivo', precio: 500 }
]
const nuevoArreglo1 = carrito.forEach(producto => producto.nombre);

const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo1);

console.log(nuevoArreglo2);