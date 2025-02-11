// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.



// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"


// use hashset


var destCity = function(paths) {
    let set = new Set();
    
    // Add all departure cities to the set
    for (let path of paths) {
        set.add(path[0]);
    }

    // Find the destination city that is not in the set
    for (let path of paths) {
        let candidate = path[1];
        if (!set.has(candidate)) {
            return candidate;
        }
    }
    
    return "";
};


let paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];
var result = destCity(paths);
console.log(result);  // Output

let paths1 = [["B","C"],["D","B"],["C","A"]];
var result = destCity(paths1);
console.log(result);  // Output

