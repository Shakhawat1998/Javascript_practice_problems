//adding one to number represented as array of digits 

//given a non-negative number represented as an 
//array of digits. This is to add 1 to the number
//increment the number represented by the digits
//by 1. The digits are stored such that the most 
//significant digit is the first element 
//of the array 


//Input: [1,2,4]
//output:125
//explanation 124+1=125

//input: [9,9,9]
//output:1000 
//explanation 999+1=1000

//we will use high school mathematics 
//parse the given array from the end as we do 
//in school addition 
//if the last elements are 9, make it 
//0 and carry=1
//for the next iteration check curry and if it adds to 10,do the 
//same as step 2 
//after adding curry, make curry=0 for the next iteration. 
//if the carry still remains 
//after traversing the entire array. append 1 in the beginning 


function addOne(arr){
    let carry=1;
    for(let i =arr.length-1; i>=0;i--){
        let sum=arr[i]+carry;
        arr[i]=sum%10;
        carry=Math.floor(sum/10);
    }

    if(carry>0){
        arr.unshift(carry);
    }

    return arr;
}


let arr=[9,9,9];
let res=addOne(arr);
console.log(res.join(""));