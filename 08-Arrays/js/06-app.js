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
let resultado;
resultado = [...carrito, producto, producto2];
//Para poner en primera posicion 
resultado = [producto3, ...resultado];

console.table(resultado);
