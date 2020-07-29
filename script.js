// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("How many characters would you like your password to contain?");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return "10vB8!9874bE"
}

var password = prompt("How many characters would you like your password to contain?")

var passConfirm = confirm("Click OK to confirm including special characters.")

var myConfirm = confirm("Click OK to confirm including numeric characters.")

var myConfirm = confirm("Click OK to confirm including lowercase characters.")

var myConfirm = confirm("Click OK to confirm uppercase characters.")