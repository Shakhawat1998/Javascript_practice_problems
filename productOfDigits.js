function productOfDigits() {
    let num = 12345;
    let prod = 1;

    while (num !== 0) {
        prod *= num % 10;
        num = Math.floor(num / 10);
    }

    console.log(prod);
}

productOfDigits();
