// You are given two arrays, color and radius, representing a sequence of balls:


// color[i] is the color of the i-th ball.
// radius[i] is the radius of the i-th ball.

// If two consecutive balls have the same color and radius, remove them both. Repeat 
// this process until no more such pairs exist.


// Return the number of balls remaining after all possible removals.

// Examples:

// Input: color[] = [2, 3, 5], radius[] = [3, 3, 5]
// Output: 3
// Explanation: All the 3 balls have different colors and radius.
// Input: color[] = [2, 2, 5], radius[] = [3, 3, 5]
// Output: 1
// Explanation: First ball and second ball have same color 2 and same radius 3. So, after removing 
// only one ball is left. It cannot be removed from the array. Hence, the final array has length 1.
// Constraints:
// 1 ≤ color.size() = radius.size() ≤ 105
// 1 ≤ color[i] ≤ 109
// 1 ≤ radius[i] ≤ 109      

//approach


// Use a stack to keep track of balls that haven't been removed yet.

// For each new ball:

// If the top of the stack has the same color and radius, pop it (remove both).

// Otherwise, push the current ball onto the stack.

// After processing all balls, the stack contains the remaining balls.



var countRemainingBalls = function(color, radius) {
    const stack = [];

    for (let i = 0; i < color.length; i++) {
        const curr = [color[i], radius[i]];
        
        // Check top of the stack
        if (stack.length > 0) {
            const top = stack[stack.length - 1];
            // If same color and radius, remove the pair
            if (top[0] === curr[0] && top[1] === curr[1]) {
                stack.pop();
                continue;
            }
        }
        // Otherwise, push current ball
        stack.push(curr);
    }

    return stack.length;
};

// Example usage:
console.log(countRemainingBalls([2, 3, 5], [3, 3, 5])); // Output: 3
console.log(countRemainingBalls([2, 2, 5], [3, 3, 5])); // Output: 1



