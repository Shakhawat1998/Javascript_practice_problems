const prompt = require(`prompt-sync`)();

let sum = 0;
let ch;

console.log("Input a number:");

do{
    let num = parseInt(prompt());
    sum+=num;
    console.log("current sum:", sum);

    console.log("Do you want to continue? ");
    ch = prompt();
} while(ch !== 'q');

console.log("Final sum: ", sum);