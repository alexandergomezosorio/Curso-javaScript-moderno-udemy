const producto = "Monitor 20 Pulgadas";

console.log(producto);

//Conocer la cantidad de la cadena de texto
//console.log(producto.length);

//Nos va decir la posicion donde inicia la palabra, si no encuentra muestra -1
console.log(producto.indexOf('Monitor'));

console.log(producto.includes('Tablet'));//Muestra false porque no la encuentra
console.log(producto.includes('Monitor'));//Muestra true porque la encuentra 
console.log(producto.includes('monitor'));//Muestra false porque esta con minuscula