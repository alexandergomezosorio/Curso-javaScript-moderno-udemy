const producto = "            Monitor 20 Pulgadas            ";

console.log(producto);
console.log(producto.length);

//Eliminar spacios del inicio
console.log(producto.trimStart());

//Eliminar spacios del final
console.log(producto.trimEnd());
console.log(producto.trimStart().trimEnd());//para cortar espacios al inicio y final

console.log(producto.trim());//para eliminar en ambas direcciones
