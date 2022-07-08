
const dinero = 100;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('Si puedes pagar');
}
else if (cheque) {
    console.log('Si puedo pagar porque tengo el cheque');
}
else if (tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta');
}
else {
    console.log('Fondos insuficientes');
}