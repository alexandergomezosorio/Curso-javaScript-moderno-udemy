const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300
}
const producto2 = {
    nombre: 'celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado gamer',
    precio: 100
}
const producto4 = {
    nombre: 'celular oppo',
    precio: 600
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

//Para poner en la primera posicion
carrito.unshift(producto3);

console.table(carrito);
/*
//Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar primer elemento de un arreglo
carrito.shift();
console.table(carrito); */

carrito.splice(1, 1);
console.table(carrito);