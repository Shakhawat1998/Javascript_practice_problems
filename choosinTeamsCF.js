// You are given a group of n students. Each student has already participated in the ACM ICPC world championship a certain number of times (between 0 and 5). According to ACM ICPC rules:

// A person can participate at most 5 times in their lifetime.

// Each team must consist of exactly 3 students.

// A person cannot be in more than one team.

// You want to create as many teams as possible such that:

// Each team can participate at least k more times together in the championship.

// So, each student in the team must have already participated at most (5 - k) times.

// Input:
// First line: Two integers n (number of students) and k (minimum number of future participations as a team).

// Second line: A list of n integers where each number indicates how many times each student has already participated.

// Output:
// A single number: the maximum number of valid teams you can form.

// How to Solve:
// Filter students who can participate at least k more times (i.e., those with participation ≤ 5 - k).

// Count how many such students you have.

// You can form at most floor(validStudents / 3) teams (since each team needs 3 people).

// Examples Explained:
// Example 1:

// Input:
// 5 2
// 0 4 5 1 0

// Explanation:
// To be in a team, a student must have ≤ 3 participations (because 5 - 2 = 3).
// Eligible students: 0, 1, 0 → (indexes 1, 4, 5) → 3 students
// 1 team can be formed.

// Output:
// 1
// Example 2:

// Input:
// 6 4
// 0 1 2 3 4 5

// Explanation:
// To be eligible: student must have ≤ 1 (because 5 - 4 = 1)
// Eligible students: 0, 1 → only 2 students
// Not enough for a team of 3.

// Output:
// 0
// Example 3:

// Input:
// 6 5
// 0 0 0 0 0 0

// Explanation:
// To be eligible: ≤ 0 (5 - 5 = 0)
// All students are eligible (all have 0)
// 6 students → 2 teams can be formed

// Output:
// 2



const prompt = require('prompt-sync')();

// Read inputs
const [n, k] = prompt("Enter n and k (space-separated): ").split(' ').map(Number);
const participationList = prompt().split(' ').map(Number);

// Filter eligible students
const eligibleStudents = participationList.filter(times => times <= 5 - k);

// Calculate max number of teams
const maxTeamCount = Math.floor(eligibleStudents.length / 3);

// Output the result
console.log(maxTeamCount);
