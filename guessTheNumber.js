const prompt = require('prompt-sync')();

const randomNumber = Math.floor(Math.random() * 100)+1;
let guess;

console.log("Guess the number (between 1 and 100): ");

do{
    guess = parseInt(prompt("Enter your guess:"));

    if(isNaN(guess) || guess < 1 || guess > 100){
        console.log("Please enter a valid integer between 1 and 100.");
        continue;
    }

    if(guess > randomNumber){
        console.log("Your guess is higher than the number.");
    }
    else if(guess < randomNumber){
        console.log("Your guess is lower than the number.");
    } 
    else{
        console.log("You guessed the correct number!");
    }



} while(guess !== randomNumber); 