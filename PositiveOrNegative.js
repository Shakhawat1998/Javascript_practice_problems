const prompt = require('prompt-sync')();
const number = prompt("Enter number: ");
if(number>0){
    console.log("number is positive");
}
else{
    console.log("number is negative");
}