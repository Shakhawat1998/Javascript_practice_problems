const myStr = "programming";

const chars = myStr.split('');
const hashSet = new Set();
const newHashSet = new Set();


for(let c of chars){
    if(!hashSet.has(c)){
        hashSet.add(c);
    } else{
        newHashSet.add(c);
    }
}

// console.log([...newHashSet]);

console.log(Array.from(newHashSet));