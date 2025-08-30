/*
Problem Simplified:

We have a store with n items, each with a price p[i].
There is a promotion:
- If a customer buys at least x items, the y cheapest among them are free.

We are given q queries:
- For each query, with parameters x and y, determine the **maximum total value of items received for free** if a customer buys the optimal set of items.

Key Idea:
- To maximize free value, pick the **x most expensive items**.
- Among these x items, the **y cheapest ones** become free.
- Sort the items by price descending.
- For query (x, y):
    1. Take the top x items.
    2. Among them, sum the smallest y items → this is the total free value.

-------------------
Examples Explained:
-------------------

Example Input:
5 3
5 3 1 5 2
3 2
1 1
5 3

Items sorted descending: 5,5,3,2,1

Query 1: x=3, y=2
- Take top 3 items: 5,5,3
- Two cheapest of these: 3 + 5 = 8 → maximum free value
Output: 8

Query 2: x=1, y=1
- Take top 1 item: 5
- One cheapest of this: 5 → free
Output: 5

Query 3: x=5, y=3
- Take all 5 items: 5,5,3,2,1
- Three cheapest of these: 1 + 2 + 3 = 6 → free
Output: 6

-------------------
Conclusion:
- Sort items descending.
- For each query (x, y):
    1. Pick top x items.
    2. Take y smallest among them → sum → maximum free value.
*/




// Import prompt-sync for console input
const prompt = require("prompt-sync")({ sigint: true });

// Read n (number of items) and q (number of queries)
let [n, q] = prompt().split(" ").map(Number);

// Read item prices
let prices = prompt().split(" ").map(Number);

// Sort prices in descending order for maximum free value
prices.sort((a, b) => b - a);

// Precompute prefix sums to quickly calculate sums of subarrays
let prefixSum = new Array(n + 1).fill(0);
for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + prices[i];
}

// Process each query
for (let i = 0; i < q; i++) {
    // Read x and y for the query
    let [x, y] = prompt().split(" ").map(Number);

    // Pick top x items (they are the first x in descending sorted array)
    // Sum of top x items = prefixSum[x]
    // Sum of top (x - y) most expensive items = prefixSum[x - y]
    // Free value = sum of y cheapest among top x = prefixSum[x] - prefixSum[x - y]
    let freeValue = prefixSum[x] - prefixSum[x - y];

    // Print the maximum free value
    console.log(freeValue);
}
