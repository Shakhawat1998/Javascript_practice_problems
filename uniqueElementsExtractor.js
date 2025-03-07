// int[] arr = {1,5,2,5,6,8,9,2}

// output = 1 6 8 9




const arr = [1, 5, 2, 5, 6, 8, 9, 2];
const frequencyMap = {};

// Count the frequency of each number
for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
}

// Print numbers that appear only once
const output = arr.filter(num => frequencyMap[num] === 1);

console.log("Output is:", output.join(" "));
