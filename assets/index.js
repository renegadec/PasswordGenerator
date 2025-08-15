const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWordElOne = document.getElementById("password-one")
let passWordElTwo = document.getElementById("password-two")



function generatePassword() {
    let passWordOne = "";
    let passWordTwo = "";
    let passwordLength = document.getElementById("password-length").value;
    
    if (passwordLength < 7 || passwordLength > 30) {
        alert("Password length must be between 7 and 30");
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        passWordOne += characters[randomIndexOne]
        passWordTwo += characters[randomIndexTwo]
    }
    passWordElOne.textContent = passWordOne;
    passWordElTwo.textContent = passWordTwo;
}





