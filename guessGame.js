const prompt = require("prompt-sync")();

let totalPoints = 0;
for (let i = 0; i < 10; i++) {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;

    const userInput = parseInt(prompt(`Attempt ${i + 1}: Guess the number (1-100): `));

    if (userInput === randomNumber1 || userInput === randomNumber2) {
        console.log("Correct! You earned 1 point");
        totalPoints++;
    }
    else {
        console.log("Incorrect! No points earned.");

    }

    console.log(`Game over! You scored a total of ${totalPoints} points.`);



}