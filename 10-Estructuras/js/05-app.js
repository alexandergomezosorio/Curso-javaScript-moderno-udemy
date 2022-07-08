//Switch case

const metodoDePago = 'efectivo';

switch (metodoDePago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    default:
        console.log('A un no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;
}
function pagar() {
    console.log('Pagando...');
}
