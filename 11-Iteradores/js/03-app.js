// Fizz buzz = 100 Numeros
// 3,6,9,12... Fizz
// 5,10,15,20... Buzz
//15,30,45... Fizz Buzz

for (let i = 1; i < 100; i++){
    if (i % 15 === 0) {
        console.log(`${i}  Es Fizz Buzz`);
    }
    else if (i % 3 === 0) {
        console.log(`${i}  Es Fizz`);
        
    }
    else if (i % 5 === 0) {
        console.log(`${i}  Es Buzz`);
        continue;
    }
    
}