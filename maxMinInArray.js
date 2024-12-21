const numbers = [4,2,7,3,10];
max= 0;
min = Infinity;

for(let number of numbers){
    if(number < min){
        min = number;
    }
    if(number > max){
        max = number;
    }
}

console.log(`Maximum = ${max}`);
console.log(`Minimum = ${min}`);