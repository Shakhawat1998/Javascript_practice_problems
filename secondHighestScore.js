let cgpa = [3.50, 3.52, 3.43, 3.63, 3.48, 3.32, 3.30, 3.60, 3.86];

let highest = cgpa[0];     
let secondHighest = cgpa[0]; 

for (let i = 0; i < cgpa.length; i++) {
    if (cgpa[i] > highest) {
        secondHighest = highest; 
        highest = cgpa[i];      
    } else if (cgpa[i] > secondHighest && cgpa[i] < highest) {
        secondHighest = cgpa[i]; 
    }
}

console.log("Second highest score: " + secondHighest);