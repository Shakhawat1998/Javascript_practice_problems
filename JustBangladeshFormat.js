// Write a program that will give following output:
// Input: bangladesh
// Output: B8H


const str= "bangladesh";
const firstLetter = str.charAt(0).toUpperCase();
const lastLetter = str.charAt(str.length-1).toUpperCase();
const middleCount = str.length-2;
console.log(firstLetter + middleCount + lastLetter);
