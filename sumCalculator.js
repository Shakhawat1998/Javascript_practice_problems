const prompt = require(`prompt-sync`)();

let sum=0;
console.log(`Input a number(enter -1 to stop):`);

while(true){
    let num = parseInt(prompt());
    if(num === -1){
        break;
    }
    sum+=num;
    console.log("Current sum:", sum);
}

console.log("Final sum:",sum);