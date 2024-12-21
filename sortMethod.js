function arraySort(){
    let numbers = [100,80,99,56,62,24,39,40,17];

    numbers.sort((a,b) => a-b);

    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
    }


}





arraySort();