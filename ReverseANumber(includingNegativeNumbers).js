let n = -123;

let revNum = 0;

let sign = (n < 0) ? -1 : 1;

n = Math.abs(n);

while (n > 0) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);  // Use Math.floor to get the integer part of division
    revNum = (revNum * 10) + lastDigit;
}

console.log(sign * revNum);
