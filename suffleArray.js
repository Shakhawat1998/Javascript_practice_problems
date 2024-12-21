
function shuffleArray(){
    let numbers = [50,80,92,15,61,10,78,28,44];


    for(let i=0;i<numbers.length;i++){
        let index = Math.floor(Math.random() * numbers.length);

        let temp = numbers[index];
        numbers[index] = numbers[i];
        numbers[i] = temp;

    }

    console.log(numbers);


}








shuffleArray();