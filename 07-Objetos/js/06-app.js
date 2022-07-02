const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1mt'
        },
        fabricacion: {
            pais: 'Colombia',
            ciudad: 'Medellin'
        }
    }
}
const { nombre,informacion,informacion:{fabricacion,fabricacion:{pais}} } = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);