
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octure', 'Noviembre', 'Diciembre'];

// CON .concat
const resultado = meses.concat(meses2, meses3);

console.log(resultado); 

//Con spread operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);