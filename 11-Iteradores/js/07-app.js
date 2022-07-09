const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']

const carrito = [
    { nombre: 'Monitor 30 pulgadas', precio: 300 },
    { nombre: 'Celular samsung s20', precio: 1500 },
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Celular vivo', precio: 500 }
]
for (let pendiente of pendientes){
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}