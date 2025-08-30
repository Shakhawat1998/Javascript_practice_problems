/*
Problem Simplified:

We are given an array 'a' of positive integers.
We need to check if there exists another array 'b' of the same length such that:

1. For every index i → ai != bi
   (all elements in 'b' must be different from the corresponding elements in 'a')

2. The sum of elements of 'a' == sum of elements of 'b'

If such an array 'b' exists → print "YES"
Otherwise → print "NO"


-------------------
Example Walkthrough:
-------------------

Input:
6            // number of test cases
3
6 1 2
2
1 1
4
3 1 2 4
1
17
5
1 2 1 1 1
3
618343152 819343431 1000000000


Output:
YES
NO
YES
NO
NO
YES


----------------------------------------
Test case 1:
n = 3
a = [6, 1, 2]
sum(a) = 9

Try b = [3, 3, 3]
sum(b) = 9
Also, b[i] != a[i] for all i
=> "YES"


Test case 2:
n = 2
a = [1, 1]
sum(a) = 2

The only possible positive integer array of length 2 that sums to 2 is [1, 1]
But here b = [1, 1] → same as a
So it violates condition ai != bi
=> "NO"


Test case 3:
n = 4
a = [3, 1, 2, 4]
sum(a) = 10

Try b = [2, 2, 2, 4]
sum(b) = 10
Check elementwise:
3 != 2, 1 != 2, 2 != 2 ❌ (fails because 2 == 2 at position 3)

Another try:
b = [4, 2, 1, 3]
sum(b) = 10
All b[i] != a[i]
=> "YES"


Test case 4:
n = 1
a = [17]
sum(a) = 17

We need b = [x] with x != 17 and x = 17 (since sums must match)
Impossible because the single element must be equal and unequal at the same time
=> "NO"


Test case 5:
n = 5
a = [1, 2, 1, 1, 1]
sum(a) = 6

We need b = [x1, x2, x3, x4, x5], sum = 6, all different from a[i]
But no such b exists (since too many 1’s, can’t balance the sum properly)
=> "NO"


Test case 6:
n = 3
a = [618343152, 819343431, 1000000000]
sum(a) = 2439346583

Try b = [1000000000, 819343152, 618343431]
sum(b) = 2439346583
Check elementwise:
618343152 != 1000000000,
819343431 != 819343152,
1000000000 != 618343431
All good!
=> "YES"
*/



// Import prompt-sync to take input from the console
const prompt = require("prompt-sync")({ sigint: true });

// Read number of test cases
let t = parseInt(prompt());

// Process each test case
while (t--) {
    // Read n (size of the array)
    let n = parseInt(prompt());

    // Read array 'a' as numbers
    let a = prompt().split(" ").map(Number);

    // Initialize sum = sum of all elements
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += a[i];
    }

    // Adjust sum based on rules:
    // If element is 1 → subtract 2
    // Otherwise       → subtract 1
    for (let i = 0; i < n; i++) {
        if (a[i] === 1) {
            sum -= 2;
        } else {
            sum -= 1;
        }
    }

    // If final sum < 0 OR n == 1 → not possible
    if (sum < 0 || n === 1) {
        console.log("NO");
    } 
    // Otherwise possible
    else {
        console.log("YES");
    }
}
