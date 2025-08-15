const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// Variables
let passWordElOne = document.getElementById("password-one")
let passWordElTwo = document.getElementById("password-two")

// Functions

// Generate Password
function generatePassword() {
    let passWordOne = "";
    let passWordTwo = "";
    let passwordLength = document.getElementById("password-length").value; // Get the password length from the input field

    // Check if the password length is between 7 and 30
    if (passwordLength < 7 || passwordLength > 30) {
        alert("Password length must be between 7 and 30");
        return;
    }

    // Generate the passwords
    for (let i = 0; i < passwordLength; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        passWordOne += characters[randomIndexOne]
        passWordTwo += characters[randomIndexTwo]
    }
    // Set the passwords to the password elements
    passWordElOne.textContent = passWordOne;
    passWordElTwo.textContent = passWordTwo;
}
window.generatePassword = generatePassword;

// Copy Password Function
function copyPassword() {
    // Get the passwords from the password elements
    let copyPasswordOne = document.getElementById("password-one").textContent;
    let copyPasswordTwo = document.getElementById("password-two").textContent;
    // Get the copy status element
    let copyStatus = document.getElementById("copyStatus");

    // Copy the passwords to the clipboard
    navigator.clipboard.writeText(copyPasswordOne);
    navigator.clipboard.writeText(copyPasswordTwo);
    // Set the copy status to the copy status element
    copyStatus.textContent = "Copied to clipboard";
    // Reset the copy status after 2 seconds
    setTimeout(() => {
        copyStatus.textContent = "";
    }, 2000);

}
window.copyPassword = copyPassword;





