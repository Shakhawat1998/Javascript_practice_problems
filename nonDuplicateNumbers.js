function nonDuplicateNumbers() {
    let numbers = [1, 1, 2, 3, 1, 2, 4, 5, 6, 5, 4, 7];


    for (let i = 0; i < numbers.length; i++) {
        let isDuplicate = false;


        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] === numbers[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            process.stdout.write(numbers[i] + " ");
        }
    }

}

nonDuplicateNumbers();
