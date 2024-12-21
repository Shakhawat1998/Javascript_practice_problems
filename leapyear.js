const prompt = require('prompt-sync')();
const year = prompt("Enter year ");
if(( year % 400 ===0) || (year % 100 !== 0) &&
(year % 4 === 0)){
    console.log("Leap year");
}
else{
    console.log("Not Leap year");
} 