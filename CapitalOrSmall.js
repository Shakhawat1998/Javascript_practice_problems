const prompt = require("prompt-sync")();
let ch = prompt("Enter character: ");
if(ch>="A" && ch<="Z"){
    console.log("Capital");
}
else{
    console.log("Small");
}