// The price of one banana is 7 taka.
// The shopkeeper has offered an attractive deal —
// For every 3 banana peels, you get 1 banana for free.
// You have 70 taka.
// With this 70 taka, how many bananas can you eat in total?


//Solution : You buy bananas with your money: 70 ÷ 7 = 10 bananas.

// Each banana gives 1 peel.

// For every 3 peels, you get 1 free banana, which also gives 1 more peel.

// The loop continues as long as you have at least 3 peels.

// You keep exchanging peels for free bananas, and collecting more peels from them.

// Final result: You eat 14 bananas in total — 10 bought + 4 free (through peel exchange).


function countKola(money, price, peelsNeeded) {
    let kola = Math.floor(money / price);
    let khosha = kola;
    while (khosha >= peelsNeeded) {
        const free = Math.floor(khosha / peelsNeeded);
        kola += free;
        khosha = khosha - (free * peelsNeeded) + free;
    }

    return kola;
}
console.log(countKola(70, 7, 3));