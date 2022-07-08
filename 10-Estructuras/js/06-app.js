const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si eres usuario y puedes pagar ');
}
else if (!puedePagar && !usuario) {
    console.log('No no puedes comprar');
}
else if (!usuario) {
    console.log('Inicia seccion o registrate ');
}
else if (!puedePagar) {
    console.log('Fondos insuficientes ');
}

