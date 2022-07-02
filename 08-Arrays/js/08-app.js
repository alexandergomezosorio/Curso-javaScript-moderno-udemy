const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}
//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring
const { nombre } = producto;
console.log(nombre);

//Destructuring en arreglo
const numeros = [10, 20, 30, 40, 50];

const [diez, veinte, ...cincuenta] = numeros;

console.log(cuarenta);
