/* const meses = ['enero', 'febrero', 'marzo'];

//meses[3] = 'abril';

//Para agregar un elemento nuevo al final del arreglo
meses.push('abril');
meses.push('mayo');

console.table(meses); */

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
carrito.push(producto);
carrito.push(producto2);

//Para poner en la primera posicion
carrito.unshift(producto3);

console.table(carrito);