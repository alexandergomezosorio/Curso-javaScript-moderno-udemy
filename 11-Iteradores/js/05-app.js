
let i = 1; //Inicializacion

do {
    if (i % 15 === 0) {
        console.log(`${i}  Es Fizz Buzz`);
    }
    else if (i % 3 === 0) {
        console.log(`${i}  Es Fizz`);
    }
    else if (i % 5 === 0) {
        console.log(`${i}  Es Buzz`);
    }


    i++ //Incremento
} while (i < 100); //Condicion
