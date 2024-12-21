function numberExistsInArray(){
    let numbers = [1,2,3,4,5];
    let number = 9;
    let found = false;

    for(let i=0;i<numbers.length;i++){
        if(numbers[i] === number){
            found = true;
            break;
        }
    }

    if(found){
        console.log(`${number} is found.`);
    } else{
        console.log(`${number} is not found`);
    }
}














numberExistsInArray();