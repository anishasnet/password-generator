// Assignment code here
var generatePassword = function() {
    // strings of all possible character types
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    // using strings from above place each character in specified array
    var lowercaseArray = lowercase.split("");
    var uppercaseArray = uppercase.split("");
    var numericArray = numbers.split("");
    var specialCharsArray = specialChars.split("");
    // prompt user for password length
    var length = parseInt(window.prompt("Type the length of your password. It must be at least 8 characters but less than 128 characters."));
    // validate password length must be >= 8 and < 128 and a number value
    while (isNaN(length) || length < 8 || length >= 128) {
        window.alert("Your length must be between 8 and 128. Do not include any non-numeric characters. Try again.");
        length = parseInt(window.prompt("Type the length of your password. It must be at least 8 characters but less than 128 characters."));
    }
    // prompt user for password's character type criteria
    var boolLower = window.confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no.");
    var boolUpper = window.confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no.");
    var boolNumerics = window.confirm("Would you like numbers in your password? Click OK for yes and Cancel for no.");
    var boolSpecialChars = window.confirm("Would you like special characters in your password? Click OK for yes and Cancel for no.");
    // validate that the user selects at least one character type
    while (!boolLower && !boolUpper && !boolNumerics && !boolSpecialChars) {
        window.alert("You must select at least one of the given character types.. Try it again");
        var boolLower = window.confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no.");
        var boolUpper = window.confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no.");
        var boolNumerics = window.confirm("Would you like numeric characters in your password? Click OK for yes and Cancel for no.");
        var boolSpecialChars = window.confirm("Would you like special characters in your password? Click OK for yes and Cancel for no.");
    }
    // create a password variable 
    var result = "";
    // based on character types selected create password.
    if (boolLower) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
        }
    }
    if (boolUpper) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
        }
    }
    if (boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
        }
    }
    if (boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
        }
    }
    if (boolLower && boolUpper) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
        }   
    }
    if (boolLower && boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
        } 
    }
    if (boolLower && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolUpper && boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            else {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
        } 
    }
    if (boolUpper && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        }      
    }
    if (boolLower && boolUpper && boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            
            else {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
        }  
    }
    if (boolLower && boolUpper && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolLower && boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolUpper && boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        }
    }
    if (boolLower && boolUpper && boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%4 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%4 == 1) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            
            else if (i%4 == 2){
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        }
    }
    // return password so that it is printed to screen
    return result;
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
