/*
📌 Problem Simplified:

We are given a positive integer n. 
In one move, you can **remove any single digit** from n. 
- You cannot remove a digit if the number has only 1 digit left.
- If the resulting number has leading zeros, they are removed automatically.

Goal: Find the **minimum number of moves** to make n **divisible by 25** and positive.

Recall: A number is divisible by 25 if its **last two digits are 00, 25, 50, or 75**.

------------------------------------------------
📌 Input:
- t: number of test cases (1 ≤ t ≤ 10^4)
- For each test case:
    - A positive integer n (25 ≤ n ≤ 10^18)
    - n has no leading zeros
- It is guaranteed that a solution exists for each n

📌 Output:
- For each test case, output the minimum number of steps k
- k ≥ 0

------------------------------------------------
📌 Example 1:
Input: 100
Output: 0

Explanation:
- 100 is already divisible by 25
- No removal needed → 0 moves

------------------------------------------------
📌 Example 2:
Input: 71345
Output: 3

Explanation:
- Remove digits 1, 3, 4 → number becomes 75
- 75 is divisible by 25
- Minimum moves = 3

------------------------------------------------
📌 Example 3:
Input: 3259
Output: 1

Explanation:
- Remove last digit 9 → number becomes 325
- 325 is divisible by 25
- Minimum moves = 1

------------------------------------------------
📌 Example 4:
Input: 50555
Output: 3

Explanation:
- Remove last three digits 5, 5, 5 → number becomes 50
- 50 is divisible by 25
- Minimum moves = 3

------------------------------------------------
📌 Example 5:
Input: 2050047
Output: 2

Explanation:
- Remove digits 4 and 7 → number becomes 20500
- 20500 is divisible by 25
- Minimum moves = 2

------------------------------------------------
📌 Observations / Simplification:

1. A number is divisible by 25 if its last two digits are 00, 25, 50, 75.
2. So the task is to **reorder or remove digits** to make last two digits one of {00, 25, 50, 75}.
3. We need **minimum deletions** to achieve this.
4. Strategy:
   - Try to find the last occurrence of the second digit (units place) for each pair {00,25,50,75}.
   - Count how many digits need to be removed to bring the pair to the end.
   - Pick the minimum over all pairs.

------------------------------------------------
✅ Ready for Implementation:

- For each test case:
   1. Convert n to string
   2. For each valid pair of last two digits (00,25,50,75):
       a. Find the pair from right to left
       b. Count deletions required
   3. Output the **minimum deletions**
*/




