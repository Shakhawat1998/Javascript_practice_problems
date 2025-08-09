/*
Problem: Fair Playoff Tournament Check

Scenario:
- 4 players compete in a tournament.
- Round 1 matches:
    Player 1 vs Player 2
    Player 3 vs Player 4
- Winners of these two matches meet in the final.

Given:
- Skills of players s1, s2, s3, s4 (all distinct).

Goal:
- Determine if the tournament is "fair":
  The two players with the highest skills meet in the final.

How to check:
- Find the winners of the two semifinal matches:
  winner1 = max(s1, s2)
  winner2 = max(s3, s4)
- The final is between winner1 and winner2.
- Find the two players with the highest skills overall.
- If these two top skilled players are exactly winner1 and winner2, print "YES".
- Otherwise, print "NO".

------------------------------------------------------
Examples:

Example 1:
Input: 3 7 9 5
- Semifinal winners: max(3,7)=7 and max(9,5)=9
- Top two players: 9 and 7
- Winners are these top two → YES

Example 2:
Input: 4 5 6 9
- Semifinal winners: max(4,5)=5 and max(6,9)=9
- Top two players: 9 and 6
- Winners are 9 and 5 → not top two → NO

Example 3:
Input: 5 3 8 1
- Semifinal winners: max(5,3)=5 and max(8,1)=8
- Top two players: 8 and 5
- Winners match top two → YES

Example 4:
Input: 6 5 3 2
- Semifinal winners: max(6,5)=6 and max(3,2)=3
- Top two players: 6 and 5
- Winners are 6 and 3 → not top two → NO
*/


const prompt = require('prompt-sync')();

const t = Number(prompt());

for (let i = 0; i < t; i++) {
  const skills = prompt().split(' ').map(Number);

  // Winners of the semifinals
  const winner1 = Math.max(skills[0], skills[1]);
  const winner2 = Math.max(skills[2], skills[3]);

  // Find top two skills overall
  const sortedSkills = [...skills].sort((a, b) => b - a);
  const top1 = sortedSkills[0];
  const top2 = sortedSkills[1];

  // Check if finalists are exactly the top two players
  if (
    (winner1 === top1 && winner2 === top2) ||
    (winner1 === top2 && winner2 === top1)
  ) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
