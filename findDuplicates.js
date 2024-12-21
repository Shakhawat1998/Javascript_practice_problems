function findDuplicates() {

    let numbers = [1, 2, 3, 4, 4, 5, 1, 2];


    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[i] === numbers[j]) {
                console.log(numbers[i]);
                break;
            }
        }
    }
}


findDuplicates();
