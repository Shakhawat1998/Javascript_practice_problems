function randomIntegerArrayWithMaxAndMinValues() {
    let array = [];


    console.log("Array of 10 random integers: ");
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * 9) + 1; 
        process.stdout.write(array[i] + " "); 
    }
    console.log();


    let max = array[0];
    let min = array[0];


    for (let i = 1; i < 10; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }


    console.log("Maximum value: " + max);
    console.log("Minimum value: " + min);
}


randomIntegerArrayWithMaxAndMinValues();
