// Your city’s police force starts with no officers. Officers are hired in groups, and crimes happen over time.

// Each officer can investigate only one crime in their lifetime.

// If a crime happens but no free officer is available, that crime goes untreated.

// You get a list of events, where each event is either:

// A positive number → number of officers hired at that moment.

// -1 → a crime has occurred.

// 🔍 Your Task:
// Given the sequence of events, count how many crimes go untreated because there are no free officers available to investigate them.

// 📥 Input Format:
// First line: integer n — number of events (1 ≤ n ≤ 10^5)

// Second line: n space-separated integers — the events:

// -1 means a crime occurred

// positive integer means that many officers were hired (max 10 per hiring)

// 📤 Output Format:
// Print a single integer — number of untreated crimes.

// 🤔 How It Works:
// Keep track of the number of free officers.

// When officers are hired, add to the free count.

// When a crime happens:

// If there is a free officer, assign them to investigate the crime (free officers -= 1).

// If no free officer, this crime is untreated (count += 1).

// 📚 Examples Explained
// Example 1
// Input:


// 3
// -1 -1 1
// Step-by-step:

// Crime occurs, no officers → untreated = 1

// Crime occurs, no officers → untreated = 2

// Hire 1 officer → free officers = 1
// Output: 2

// Example 2
// Input:


// 8
// 1 -1 1 -1 -1 1 1 1
// Step-by-step:

// Hire 1 → free = 1

// Crime → free = 0 (officer used)

// Hire 1 → free = 1

// Crime → free = 0 (officer used)

// Crime → no free officers → untreated = 1

// Hire 1 → free = 1

// Hire 1 → free = 2

// Hire 1 → free = 3
// Output: 1

// Example 3
// Input:


// 11
// -1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1
// Step-by-step:

// Crime → untreated = 1 (no officers)

// Crime → untreated = 2 (no officers)

// Hire 2 → free = 2

// Crime → free = 1

// Crime → free = 0

// Crime → untreated = 3

// Crime → untreated = 4

// Crime → untreated = 5

// Crime → untreated = 6

// Crime → untreated = 7

// Crime → untreated = 8
// Output: 8

// 🧾 Summary:
// Count how many crimes happen when there are no free officers available to investigate.



const prompt = require('prompt-sync')();

// Read number of events
const n = parseInt(prompt('Enter number of events: ').trim());

// Read the events line, split by space and convert to integers
const events = prompt('Enter events: ').trim().split(' ').map(Number);

// Function to count untreated crimes
function countUntreatedCrimes(events) {
  let freeOfficers = 0;
  let untreatedCrimes = 0;

  for (let event of events) {
    if (event === -1) {
      if (freeOfficers > 0) {
        freeOfficers--;
      } else {
        untreatedCrimes++;
      }
    } else if (event > 0) {
      freeOfficers += event;
    }
  }
  return untreatedCrimes;
}

// Calculate and output the result
const result = countUntreatedCrimes(events);
console.log(result);

