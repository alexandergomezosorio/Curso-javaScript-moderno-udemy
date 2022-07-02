//Object literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    
}
//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
const producto2 = new Producto('Monitor 20 pulgadas', 350);
const producto3 = new Producto('Bicicleta trek', 600);
console.log(producto2);
console.log(producto3);