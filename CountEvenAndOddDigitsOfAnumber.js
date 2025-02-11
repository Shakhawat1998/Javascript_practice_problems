let n=12345;
let even =0;
let odd=0;


while(n>0){
    let temp=Math.floor(n%10);
    if(temp % 2){
        odd++;
    }
    else{
        even++;
    }
    n=Math.floor(n/10);
}

console.log(`Odd digit count ${odd}`);
console.log(`even digit count ${even}`);