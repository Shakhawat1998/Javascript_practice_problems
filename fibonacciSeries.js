function fibonacci(n) {
    let num1 = 0, num2 = 1;
    let result = [num1, num2];

    for (let i = 2; i < n; i++) {
        let num3 = num1 + num2;
        result.push(num3);
        num1 = num2;
        num2 = num3;
    }

    return result.join(", ");
}

const n = 10;
console.log("Fibonacci Series: " + fibonacci(n));
