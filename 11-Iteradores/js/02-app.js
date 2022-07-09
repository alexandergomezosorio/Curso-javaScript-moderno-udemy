
/* for (let i = 0; i < + 10; i++){
    if (i === 5) {
        console.log('Cinco');
        
     }
    console.log(`Numero: ${i}`);
} */

const carrito = [
    { nombre: 'Monitor 30 pulgadas', precio: 300 },
    { nombre: 'Celular samsung s20', precio: 1500 },
    { nombre: 'Laptop', precio: 1000, descuento: true },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Celular vivo', precio: 500 }

]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento `);
        continue;
    }
    console.log(carrito[i].nombre);
}

