const prompt = require('prompt-sync')();

let largest = null;
let smallest = null;

console.log("Enter numbers. To stop, type 'q' ");

while(true){
    let input = prompt("Enter a number: ");


    if(input.toLowerCase() === 'q'){
        break;
    }

    let num = parseInt(input);

    if(isNaN(num)){
        console.log("Invalid input.Please enter a valid number or 'q' to quit. ");
        continue;
    }

    if(largest === null || num > largest){
        largest = num;
    }

    if(smallest === null || num < smallest){
        smallest = num;
    }
}

if(largest === null || smallest === null){
    console.log("No numberes were entered");
}else{
    console.log("Largest number: ",largest);
    console.log("Smallest number: ", smallest);
}
