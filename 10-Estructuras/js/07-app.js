//Operadador or para que se cumpla una condiccion o la otra
const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar) {
    console.log('Si puedes pagar');
} else {
    console.log('Fondos insuficientes');
}