// Given an array of integers from 1 to n with exactly one number missing, find and return the missing number.

function findMissingNumber() {
    let arr = [1, 2, 4, 5, 6];
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;

    for (let num of arr) {
        total -= num;
    }

    console.log(total);
}

findMissingNumber();
