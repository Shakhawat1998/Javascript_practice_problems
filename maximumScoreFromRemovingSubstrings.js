// You are given a string s and two integers x and y. You can perform two types of operations any number of times.

// Remove substring "ab" and gain x points.
// For example, when removing "ab" from "cabxbae" it becomes "cxbae".
// Remove substring "ba" and gain y points.
// For example, when removing "ba" from "cabxbae" it becomes "cabxe".
// Return the maximum points you can gain after applying the above operations on s.

 

// Example 1:

// Input: s = "cdbcbbaaabab", x = 4, y = 5
// Output: 19
// Explanation:
// - Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
// - Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
// - Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
// - Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
// Total score = 5 + 4 + 5 + 5 = 19.
// Example 2:

// Input: s = "aabbaaxybbaabb", x = 5, y = 4
// Output: 20
 

// Constraints:

// 1 <= s.length <= 105
// 1 <= x, y <= 104
// s consists of lowercase English letters.



// Intuition: The "Gold Coin" Strategy
// The core of this problem is a greedy choice. Imagine you can get points for removing two types of substrings:

// "ab" gives x points (a "gold coin").
// "ba" gives y points (a "silver coin").
// If gold coins are worth more (x > y), you should always prioritize hunting for gold coins first. Why? Removing a 
// lower-value pair might disrupt a potential higher-value pair. For example, in "b(ab)a", grabbing the high-value 
// "ab" leaves you with "ba", which you can also score. This is better than scoring just one of the "ba" pairs and losing the "ab".

// Our strategy is therefore a two-pass greedy approach:

// First Pass: On the original string, remove all instances of the higher-scoring pair.
// Second Pass: On the string that remains, remove all instances of the lower-scoring pair.
// To do this efficiently, we use a stack. A stack helps us "remove" pairs in linear time by 
// checking only the most recently added character, avoiding slow, repeated string searches.



var maximumGain = function(s, x, y) {
    
    const solve = (text, pattern, score) => {
        const stack = [];
        let points = 0;
        for (const char of text) {
            if (stack.length > 0 && stack[stack.length - 1] === pattern[0] && char === pattern[1]) {
                stack.pop();
                points += score;
            } else {
                stack.push(char);
            }
        }
        return { points, remainingText: stack.join('') };
    };

    let totalPoints = 0;
    let highPriorityPair, lowPriorityPair, highPriorityScore, lowPriorityScore;

    if (x > y) {
        highPriorityPair = "ab";
        highPriorityScore = x;
        lowPriorityPair = "ba";
        lowPriorityScore = y;
    } else {
        highPriorityPair = "ba";
        highPriorityScore = y;
        lowPriorityPair = "ab";
        lowPriorityScore = x;
    }

    // First pass
    const { points: points1, remainingText: afterFirstPass } = solve(s, highPriorityPair, highPriorityScore);
    totalPoints += points1;

    // Second pass
    const { points: points2 } = solve(afterFirstPass, lowPriorityPair, lowPriorityScore);
    totalPoints += points2;

    return totalPoints;
};


console.log(maximumGain("cdbcbbaaabab", 4, 5))


