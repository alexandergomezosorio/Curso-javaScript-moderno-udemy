'use strict'

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true

}
Object.seal(producto);

producto.disponible = false;
//producto.imagen = 'imagen jpg'
//delete producto.precio;

console.log(producto);
//Para saber si un objeto esta sellado
console.log(Object.isSealed(producto));
