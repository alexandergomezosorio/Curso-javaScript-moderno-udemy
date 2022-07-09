const automovil = {
    modelo: 'Logan',
    year: 2020,
    motor: '1.6'
}
/* for (propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
} */

for (let [llave, valor] of Object.entries(automovil) ) {
    console.log(valor);
    console.log(llave);
}