let number = 243;
let reverse = 0;

while(number !== 0){
    reverse = reverse * 10 + (number%10);
    number = Math.floor(number/10);
}

console.log(`reverse number = ${reverse}`);