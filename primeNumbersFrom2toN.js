let number = 60;



function checkPrime(num) {
    let isprime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isprime = false;
            break
        }
    }

    if (isprime) {
        console.log(`${num}`);
    }


}



for (let i = 2; i <= number; i++) {
    checkPrime(i);
}