// given ar array arr[] consisting of only 0's and 
//1's. find max number of consecui=tive 1's or 0's present 
//in array 


//input: arr[]= {1,1,0,0,1,0,1,0,1,1,1,1}
//output: 4

//explanation: the max number  of consecutive 1's in the array is
//4 from index 8-11

//simple traversal - O(n) time and O(1) space

//The idea is to traverse the array while 
//keeping track og the current 
//streak of consecutive 1s or 0s. If the sequence 
//is broken, update the maximum count and reset the current 
//count 

//initialize maxCount and count to 0 and track the previous element 
//traverse the list, increment count if the current element matches previous
//else update maxCount and reset count 
//Update previous to the current element in each iteration 
//Return the max of maxCount and count at the end


function maxConsecutiveCount(arr){
    let maxCount=0, count=1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] === arr[i-1]){
            count++;
        }else{
            maxCount = Math.max(maxCount,count);
            count=1;
        }
    }
    return Math.max(maxCount,count);
}


let arr= [1,1,0,0,1,0,1,0,1,1,1,1];
console.log(maxConsecutiveCount(arr));