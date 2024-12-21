const prompt = require("prompt-sync")();3.42


function findCGPAUsingBinarySearch() {

    let cgpa = [3.50, 3.52, 3.43, 3.63, 3.48, 3.32, 3.30, 3.60, 3.86];


    cgpa.sort((a, b) => a - b);
    console.log("CGPAs after sorting in ascending order: ");
    console.log(cgpa.join(' '));


    let targetCGPA = parseFloat(prompt("Enter CGPA to search:"));


    let low = 0, high = cgpa.length - 1;
    let mid;
    let flag = false;
    let index = -1;


    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        if (cgpa[mid] === targetCGPA) {
            flag = true;
            index = mid;
            break;
        } else if (cgpa[mid] < targetCGPA) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }


    if (flag) {
        console.log(`Target CGPA is found at index ${index}`);
    } else {
        console.log("Target CGPA is not found");
    }
}

// Call the function
findCGPAUsingBinarySearch();
