function countCharacterFrequency(myStr){
    const charCount = {};

    for(let c of myStr){
        charCount[c] = (charCount[c] || 0)+1;

    }

    console.log(charCount);
}


const myStr = "programming";
countCharacterFrequency(myStr);