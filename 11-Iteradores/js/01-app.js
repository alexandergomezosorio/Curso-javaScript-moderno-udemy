
// for (let i = 0; i <+ 10; i++){
//     console.log(`Numero: ${i}`);
// }

//Para saber que numero es impar
/* for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(`El numero: ${i} es par`);
    } else {
        console.log(`El numero: ${i} es impar`);
    }
} */

const carrito = [
    { nombre: 'Monitor 30 pulgadas', precio: 300 },
    { nombre: 'Celular samsung s20', precio: 1500 },
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Celular vivo', precio: 500 }

]

for (let i = 0; i < carrito.length; i++){
    console.log(carrito[i].precio);
}