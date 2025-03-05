// Sample test cases with ID, summary, and status
const testCases = [
    { id: 101, summary: "Login test", status: "Passed" },
    { id: 102, summary: "Payment test", status: "Failed" },
    { id: 103, summary: "Checkout test", status: "Passed" },
    { id: 104, summary: "Profile update test", status: "Failed" },
    { id: 105, summary: "Logout test", status: "Failed" }
];

// Function to count failed test cases
function countFailedTests(testCases) {
    let count = 0;
    for (let i = 0; i < testCases.length; i++) {
        if (testCases[i].status.toLowerCase() === "failed") {
            count++;
        }
    }
    return count;
}

// Print the number of failed test cases
console.log("Total number of failed test cases:", countFailedTests(testCases));
