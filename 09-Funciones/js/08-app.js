function sumar(a, b) {
    return (a + b);
}
const resultado = sumar(2, 4);

console.log(resultado);

//Ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.15;
}
total = agregarCarrito(1000);
total = agregarCarrito(2000);
total = agregarCarrito(3000);

const totalPagar = calcularImpuesto(total);

console.log(`Total a pagar es: ${totalPagar}`)
console.log(total);