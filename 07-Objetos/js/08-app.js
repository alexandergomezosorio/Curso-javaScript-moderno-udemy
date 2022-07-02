'use strict'

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true

}
Object.freeze(producto);

//producto.disponible = false;
//producto.imagen = 'imagen jpg'
//delete producto.precio;

console.log(producto);
//Para saber si un objeto esta congelado
console.log(Object.isFrozen(producto));