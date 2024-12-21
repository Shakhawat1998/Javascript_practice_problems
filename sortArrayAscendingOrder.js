const numbers = [78,34,1,3,90,34,6,55,20];

for(let i=0;i<numbers.length-1;i++){
    for(let j=i+1;j<numbers.length-1;j++){
        if(numbers[i]>numbers[j]){
            let temp = numbers[i];
            numbers[i]=numbers[j];
            numbers[j]=temp;
        }
    }
}

for(let i=0;i<numbers.length;i++){
    // console.log(`${numbers[i]}`);
    process.stdout.write(`${numbers[i]} `); 
}