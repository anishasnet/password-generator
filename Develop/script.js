// Assignment code here
var generatePassword = function() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var lowercaseArray = lowercase.split("");
    var uppercaseArray = uppercase.split("");
    var numericArray = numbers.split("");
    var specialCharsArray = specialChars.split("");
    console.log(lowercaseArray);
    console.log(uppercaseArray);
    console.log(numericArray);
    console.log(specialCharsArray);
    var length = parseInt(window.prompt("Type the length of your password."));
    console.log(length);
    var boolLower = window.confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no.");
    console.log(boolLower);
    var boolUpper = window.confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no.");
    console.log(boolUpper);
    var boolNumerics = window.confirm("Would you like numbers in your password? Click OK for yes and Cancel for no.");
    console.log(boolNumerics);
    var boolSpecialChars = window.confirm("Would you like special characters in your password? Click OK for yes and Cancel for no.");
    console.log(boolSpecialChars);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
