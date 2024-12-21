function generateRandomPassword(len){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&";
    let password = "";

    for(let i=0;i<len;i++){
        const randomIndex = Math.floor(Math.random()*chars.length);
        password += chars.charAt(randomIndex);
    }


    return password;
}



const password = generateRandomPassword(8);
console.log(password);