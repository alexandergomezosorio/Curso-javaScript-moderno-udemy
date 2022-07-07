//funcion normal
const aprendiendo = function (tegnologia,tegnologia2) {
    console.log(`Aprendiendo: ${tegnologia} y ${tegnologia2}` );
}

//Arrow functions 
const aprendiendo2 = () => {
    console.log('Aprendiendo JavaScript');
} 
aprendiendo('JavaScript','Node js');
aprendiendo2();
const aprendiendo3 = (tegnologia,tegnologia2) => `Aprendiendo: ${tegnologia} y ${tegnologia2}` 


console.log(aprendiendo3('JavaScript','Node js'));