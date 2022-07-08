
const puntaje = 1000;
const puntaje2 = '1000';

console.log(typeof (puntaje));
console.log(typeof (puntaje2));


//if (puntaje != 1000) {// != Diferente  == igual a
//    console.log('Si es diferente a 1000')
//} 

if (puntaje !== '1000') {// != Diferente  == igual a
    console.log('Si es diferente');
} else {
    console.log('No es diferente');
}
// == Operador no extricto
//=== operador extricto