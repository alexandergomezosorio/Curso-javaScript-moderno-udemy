const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1 mt'
}
console.log(producto);
console.log(medidas);

//Para unir objetos
const resultado = Object.assign(producto, medidas);

//Spread operator o rest operator
const resultado2 = { ...producto, ...medidas }
console.log(resultado); 
console.log(resultado2);
