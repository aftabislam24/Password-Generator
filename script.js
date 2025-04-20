let passwordBox = document.querySelector(`#password`);
let generateBtn = document.querySelector(`#generate-btn`);
let copyBtn = document.querySelector("#copy-btn");
let length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+-={}[]|\?/><";



function createPassword(){
    let password = "";

    let allChars = upperCase+lowerCase+number+symbol;

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}

generateBtn.addEventListener(`click`,createPassword);
copyBtn.addEventListener(`click`,copyPassword);