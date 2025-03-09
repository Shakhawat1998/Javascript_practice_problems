//given ar array arr[] consisting of only 0s,1s and 2s.
//The task is to sort the array. 
//put all 0s first then all 1s and all 2s
//in last 


//Input: arr[] = {0,1,2,0,1,2}
//Output: {0,0,1,1,2,2}

//we will use counting 0s,1s and 2s
//Two pass-O(n) time and o(1) 
//space 

    let arr=[0,1,2,0,1,2];

    let c0=0,c1=0,c2=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            c0+=1;
        }
        else if(arr[i] === 1){
            c1 +=1;
        }
        else{
            c2+=1;
        }
    }

    let idx=0;
    //Place all the 0s
    for(let i=0;i<c0;i++){
        arr[idx++]=0;
    }
    //Place all the 1s
    for(let i=0;i<c1;i++){
        arr[idx++]=1;
    }
    //Place all the 2s
    for(let i=0;i<c2;i++){
        arr[idx++]=2;
    }

    console.log(arr.join(' '));

