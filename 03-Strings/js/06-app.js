const producto = "Monitor 20 Pulgadas";

//.repeat para repetir cadenas de texto
const texto = ' en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//split, para dividir un string
const actividad ='Estoy aprendiendo javaScript';

console.log(actividad.split(' '));

const hobbies = 'leer,caminar,escuchar,aprender,escribir,aprender a programar';
console.log(hobbies.split(','));

const tweet = 'Aprendiendo javaScript #javaScript';
console.log(tweet.split('#'));
