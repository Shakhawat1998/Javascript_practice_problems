const prompt = require("prompt-sync")();


function simpleLogin() {
    const username = "admin";
    const password = "password";

    const inputUsername = prompt("Enter username: ");
    const inputPassword = prompt("Enter password: ");

    if (username === inputUsername && password === inputPassword) {
        console.log("Login successful!");
    } else {
        console.log("Login failed!");
    }
}

simpleLogin();
