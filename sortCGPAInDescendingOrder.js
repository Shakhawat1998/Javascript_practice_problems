let cgpa = [3.50, 3.52, 3.43, 3.63, 3.48, 3.32, 3.30, 3.60, 3.86];

for (let i = 0; i < cgpa.length; i++) {
    for (let j = i + 1; j < cgpa.length; j++) {
        if (cgpa[j] > cgpa[i]) {
            let temp = cgpa[i];
            cgpa[i] = cgpa[j];
            cgpa[j] = temp;
        }
    }
}

console.log("CGPAs in descending order: " + cgpa);