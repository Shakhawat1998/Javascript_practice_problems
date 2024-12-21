// // Prompt the user to input a list of numbers, separated by commas
// let input = prompt("Enter a list of numbers, separated by commas (e.g., 1, 2, 3)");

// // Split the input into an array of strings and convert each to a number
// let numbers = input.split(',').map(Number);

// // Iterate through the array and print each number
// for (let i = 0; i < numbers.length; i++) {
//     console.log("Number: " + numbers[i]);
// }



const numbers = [6,3,9,10,11,1,8,5];
let max = numbers[0];
let smax = numbers[1];

for(let i=0;i<numbers.length; i++){
    if(numbers[i]>max){
        smax =max;
        max = numbers[i];
    }
    else if(numbers[i] > smax){
        smax = numbers[i];
    }
}

console.log(`Second largest = ${smax}`);
