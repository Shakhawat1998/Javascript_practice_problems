// // // You are given several test cases. In each test case:

// // // There are 2n integers.

// // // You need to check if it's possible to form n pairs such that:

// // // Each number is used exactly once.

// // // The sum of the numbers in each pair is odd.

// // // Important Rule:

// // // A pair of one even number and one odd number gives an odd sum.

// // // So, for a valid pairing, the number of even numbers must be equal to the number of odd numbers.

// // // Input:

// // // First line: t — number of test cases.

// // // For each test case:

// // // Line 1: n — number of pairs you need to form.

// // // Line 2: 2n integers.

// // // Output:

// // // Print "Yes" if you can form n valid pairs with odd sums.

// // // Print "No" otherwise.


// // // input
// // 2
// // 2
// // 2 3 4 5
// // 1
// // 2 4

// //output
// Yes
// No



const prompt = require('prompt-sync')();

let t = parseInt(prompt());

while (t--) {
    let n = parseInt(prompt());
    let nums = prompt().split(' ').map(Number);
    
    let oddCount = 0;
    for (let x of nums) {
        if (x % 2 !== 0) {
            oddCount++;
        }
    }

    console.log(oddCount === n ? "Yes" : "No");
}
