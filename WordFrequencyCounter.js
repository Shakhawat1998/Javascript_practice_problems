let input = "Hey Hey I am Automation Automation Tester";

let words = input.split(" ");

let map = {};

for (let word of words) {
    if (map[word]) {
        map[word] += 1;
    } else {
        map[word] = 1;
    }
}

for (let word in map) {
    console.log(word + ": " + map[word]);
}
