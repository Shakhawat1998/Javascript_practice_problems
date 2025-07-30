// // There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:

// // multiply the number on display by 2, or
// // subtract 1 from the number on display.
// // Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.

 

// // Example 1:

// // Input: startValue = 2, target = 3
// // Output: 2
// // Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.
// // Example 2:

// // Input: startValue = 5, target = 8
// // Output: 2
// // Explanation: Use decrement and then double {5 -> 4 -> 8}.
// // Example 3:

// // Input: startValue = 3, target = 10
// // Output: 3
// // Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.
 

// // Constraints:

// // 1 <= startValue, target <= 109



// ALGORITHM

// The idea is to bring target equal to startvalue & counting the number of operations.
// We will do opposite insitead of turning startvalue to target.
// we are turning target to startvalue by 2 steps.
// if target value is odd , we will make it even by adding one to it.
// If target is even we will divide by 2;
// and doing these 2 operations we will count min operations till targetvalue is greater than startvalue.



function brokenCalc(startValue, target) {
    // Counter for number of operations
    let res = 0;

    // Work backwards from target to startValue
    while (target > startValue) {
        // If target is odd, increment it to make it even
        if (target % 2 === 1) {
            target += 1;
        } 
        // If target is even, divide it by 2
        else {
            target = Math.floor(target / 2);
        }
        res++;
    }

    // Add the remaining difference
    return res + (startValue - target);
}

// Example usage
console.log(brokenCalc(5, 8)); // Output: 2
