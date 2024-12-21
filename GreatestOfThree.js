const prompt = require('prompt-sync')();
const number1 = prompt("Enter number 1");
const number2 = prompt("Enter number 2");
const number3 = prompt("Enter number 3");
if(number1>number2 && number1>number3){
    console.log(`${number1} is the greatest`);
}
else if(number2>number1 && number2>number3){
    console.log(`${number2} is the greatest`);
}
else{
    console.log(`${number3} is the greatest`);
} 