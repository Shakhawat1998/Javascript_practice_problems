// Vasya tracks the scores of his favorite coder from several contests in chronological order.

// The first contest is never amazing.

// A contest is amazing if the coder’s score in that contest is either:

// Strictly higher than all previous scores (a new personal best), OR

// Strictly lower than all previous scores (a new personal worst).

// You need to count how many amazing performances the coder had.

// 📥 Input Format:
// First line: integer n — number of contests (1 ≤ n ≤ 1000)

// Second line: n space-separated integers — points earned in each contest (0 ≤ points ≤ 10000)

// 📤 Output Format:
// Print one integer — the number of amazing performances.

// 🔍 How to determine amazing performances:
// Ignore the first contest.

// Keep track of the current highest and lowest scores so far.

// For each next contest:

// If score > current highest → amazing (new best), update highest.

// If score < current lowest → amazing (new worst), update lowest.

// Count how many times this happens.

// 📚 Examples Explained
// Example 1
// Input:


// 5
// 100 50 200 150 200
// Step by step:

// Contest 1: score = 100 → not amazing (first contest)

// Contest 2: score = 50 → lower than 100 → amazing (new worst)

// Contest 3: score = 200 → higher than 100 → amazing (new best)

// Contest 4: score = 150 → neither new best nor new worst

// Contest 5: score = 200 → equals current best (200), not strictly greater → not amazing

// Output:


// 2
// Example 2
// Input:


// 10
// 4664 6496 5814 7010 5762 5736 6944 4850 3698 7242
// Amazing contests are: 2, 4, 9, 10

// Output:


// 📝 Summary:
// Count how many times the coder’s score breaks their previous personal best or worst (except for the first contest).





// Example 2 Explained:
// Input:


// 10
// 4664 6496 5814 7010 5762 5736 6944 4850 3698 7242
// Scores by contest:

// Contest #	Score	Amazing?	Reason	Update best/worst
// 1	4664	No (first contest)	Initial scores	best = 4664, worst = 4664
// 2	6496	Yes	6496 > best (4664) → new best	best = 6496
// 3	5814	No	5814 < best but > worst	no change
// 4	7010	Yes	7010 > best (6496) → new best	best = 7010
// 5	5762	No	5762 between best and worst	no change
// 6	5736	No	5736 between best and worst	no change
// 7	6944	No	6944 < best and > worst	no change
// 8	4850	No	4850 between best and worst	no change
// 9	3698	Yes	3698 < worst (4664) → new worst	worst = 3698
// 10	7242	Yes	7242 > best (7010) → new best	best = 7242

// Summary for Example 2:
// Amazing performances: contests 2, 4, 9, 10

// Total amazing = 4



function countAmazingPerformances(scores) {
  // The first contest is never amazing
  let best = scores[0];
  let worst = scores[0];
  let amazingCount = 0;

  // Start from second contest
  for (let i = 1; i < scores.length; i++) {
    const score = scores[i];

    if (score > best) {
      // New personal best
      best = score;
      amazingCount++;
    } else if (score < worst) {
      // New personal worst
      worst = score;
      amazingCount++;
    }
    // If score equals best or worst, or lies between, no increase
  }

  return amazingCount;
}

// Example usage:
const scores1 = [100, 50, 200, 150, 200];
console.log(countAmazingPerformances(scores1));  // Output: 2

const scores2 = [4664, 6496, 5814, 7010, 5762, 5736, 6944, 4850, 3698, 7242];
console.log(countAmazingPerformances(scores2));  // Output: 4
