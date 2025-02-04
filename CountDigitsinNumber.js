let n = 3465;
let count = 0;

while (n > 0) {
    n = Math.floor(n / 10);  // Divide the number by 10 and round down
    count++;
}

console.log(`Total Count: ${count}`);
