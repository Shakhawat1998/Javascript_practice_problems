// Given an array of integers arr[], sort the array according to the frequency of elements, i.e. 
// elements that have higher frequency comes first.
//  If the frequencies of two elements are the same, then the smaller number comes first.

// Examples:  

// Input: arr[] = [5, 5, 4, 6, 4]
// Output: [4, 4, 5, 5, 6]
// Explanation: The highest frequency here is 2. Both 5 and 4 have that frequency. Now since the 
// frequencies are the same the smaller element comes first. So 4 comes first then comes 5.
//  Finally comes 6. The output is 4 4 5 5 6.

// Input: arr[] = [9, 9, 9, 2, 5]
// Output: [9, 9, 9, 2, 5]
// Explanation: The highest frequency here is 3. Element 9 has the highest frequency 
// So 9 comes first. Now both 2 and 5 have the same frequency. So we print smaller 
// elements first. The output is 9 9 9 2 5.




// Function to sort the array 
// according to frequency of elements
function sortByFreq(arr) {
    
    // hash map to store the 
    // frequency of each element
    let mp = {};
    let n = arr.length;
    
    // store the frequency of each element
    for (let i = 0; i < n; i++) {
        if (mp.hasOwnProperty(arr[i]))
            mp[arr[i]]++;
        else
            mp[arr[i]] = 1;
    }
    
    // create a 2d vector to store 
    // the frequency of each element
    let freq = [];
    for (let key in mp) {
        freq.push([mp[key], parseInt(key)]);
    }
    
    // to sort the frequency in descending order
    freq.sort((a, b) => {
        if(a[0] === b[0])
            return a[1] - b[1];
        return b[0] - a[0];
    });
    
    // to store the answer
    let ans = [];
    
    // push the elements in the answer array
    for (let i = 0; i < freq.length; i++) {
        for (let j = 0; j < freq[i][0]; j++) {
            ans.push(freq[i][1]);
        }
    }
    return ans;
}
 
let arr = [5, 5, 4, 6, 4];
let ans = sortByFreq(arr);
console.log(ans.join(" "));