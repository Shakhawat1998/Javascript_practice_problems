// Given two strings, s1 and s2, the task is to find the length of the Longest Common Subsequence.
//  If there is no common subsequence, return 0. A subsequence is a string generated from the original 
// string by deleting 0 or more characters, without changing the relative order of the remaining characters.

// For example, subsequences of “ABC” are “”, “A”, “B”, “C”, “AB”, “AC”, “BC” and “ABC”. In general, 
// a string of length n has 2n subsequences.

// Examples:

// Input: s1 = “ABC”, s2 = “ACD”
// Output: 2
// Explanation: The longest subsequence which is present in both strings is “AC”.


// Input: s1 = “AGGTAB”, s2 = “GXTXAYB”
// Output: 4
// Explanation: The longest common subsequence is “GTAB”.


// Input: s1 = “ABC”, s2 = “CBA”
// Output: 1
// Explanation: There are three longest common subsequences of length 1, “A”, “B” and “C”.


// Using Bottom-Up DP (Tabulation) – O(m * n) Time and O(m * n) Space
// There are two parameters that change in the recursive solution and these parameters go 
// rom 0 to m and 0 to n. So we create a 2D dp array of size (m+1) x (n+1).  


// We first fill the known entries when m is 0 or n is 0.
// Then we fill the remaining entries using the recursive formula.


function lcs(S1, S2) {
    const m = S1.length;
    const n = S2.length;

    // Initializing a matrix of size (m+1) x (n+1) with zeros using loops
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }

    // Building dp[m+1][n+1] in bottom-up fashion
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (S1[i - 1] === S2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

const S1 = "AGGTAB";
const S2 = "GXTXAYB";
console.log(lcs(S1, S2));
