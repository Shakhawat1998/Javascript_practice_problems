function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


const num1 = 60;
const num2 = 48;
console.log(findGCD(num1, num2)); // num1 must be greater than num2
